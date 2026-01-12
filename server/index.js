import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import SibApiV3Sdk from "sib-api-v3-sdk";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: "*" }));
app.use(express.json());

const brevoApiKey = process.env.BREVO_API_KEY;
const mailTo = process.env.MAIL_TO || process.env.MAIL_FROM;
const mailFrom = process.env.MAIL_FROM || "no-reply@example.com";

if (!brevoApiKey) {
  console.warn("BREVO_API_KEY is not set. Email sending will fail.");
}

// Configure Brevo (Sendinblue) client
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKeyAuth = defaultClient.authentications["api-key"];
if (apiKeyAuth && brevoApiKey) {
  apiKeyAuth.apiKey = brevoApiKey;
}

const brevoClient = new SibApiV3Sdk.TransactionalEmailsApi();

app.post("/api/register", async (req, res) => {
  const { fullName, email, phone, country, course, message } = req.body || {};

  if (!fullName || !email || !course) {
    return res
      .status(400)
      .json({ error: "Missing required fields: fullName, email, course." });
  }

  if (!brevoApiKey || !mailTo) {
    return res
      .status(500)
      .json({ error: "Email service not configured. Set BREVO_API_KEY and MAIL_TO." });
  }

  try {
    const htmlContent = `
      <h2>New Registration Submitted</h2>
      <ul>
        <li><strong>Name:</strong> ${fullName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone || "N/A"}</li>
        <li><strong>Country:</strong> ${country || "N/A"}</li>
        <li><strong>Course:</strong> ${course}</li>
        <li><strong>Message:</strong> ${message || "N/A"}</li>
      </ul>
      <p>Submitted at: ${new Date().toISOString()}</p>
    `;

    const sendSmtpEmail = {
      sender: { email: mailFrom },
      to: [{ email: mailTo }],
      subject: `New registration for ${course} from ${fullName}`,
      htmlContent,
      replyTo: { email },
    };

    const result = await brevoClient.sendTransacEmail(sendSmtpEmail);
    console.log("Brevo email sent:", result?.messageId || result);

    return res.json({ ok: true, message: "Registration email sent.", messageId: result?.messageId });
  } catch (err) {
    const detail = err?.response?.text || err?.message || "Unknown error";
    console.error("Brevo send error:", detail);
    return res.status(500).json({ error: "Failed to send email.", detail });
  }
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

