import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Mail, Phone, User, MapPin } from "lucide-react";
import patternBg from "@/assets/pattern-bg.jpg";

interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  course: string;
  message: string;
}

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    course: "",
    message: "",
  });

  const courses = [
    "Tajweed",
    "Nazra",
    "Hifz",
    "Basics of Islam",
    "Basics of Fiqh",
    "Islamic Etiquette (Adab)",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.fullName || !formData.email || !formData.course) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Save to localStorage (in real app, this would go to backend)
    const existingRegistrations = JSON.parse(
      localStorage.getItem("registrations") || "[]"
    );
    const newRegistration = {
      ...formData,
      id: Date.now().toString(),
      date: new Date().toISOString(),
      status: "pending",
    };
    localStorage.setItem(
      "registrations",
      JSON.stringify([...existingRegistrations, newRegistration])
    );

    toast({
      title: "Registration Successful!",
      description: "We will contact you soon to schedule your classes.",
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      country: "",
      course: "",
      message: "",
    });

    // Navigate to home after short delay
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleChange = (field: keyof RegistrationData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-16 relative">
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${patternBg})`, backgroundSize: 'cover' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-islamic rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Begin Your Learning Journey
            </h1>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and our team will contact you to schedule your classes.
            </p>
          </div>

          {/* Registration Form */}
          <Card className="shadow-soft border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Registration Form</CardTitle>
              <CardDescription>
                Please provide your details to enroll in our courses. All fields marked with * are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Country */}
                <div className="space-y-2">
                  <Label htmlFor="country" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Country
                  </Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    placeholder="Enter your country"
                  />
                </div>

                {/* Course Selection */}
                <div className="space-y-2">
                  <Label htmlFor="course" className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    Course Interested In *
                  </Label>
                  <Select
                    value={formData.course}
                    onValueChange={(value) => handleChange("course", value)}
                    required
                  >
                    <SelectTrigger id="course">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">
                    Additional Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your learning goals, preferred schedule, or any questions you have..."
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-islamic hover:opacity-90 transition-opacity text-lg"
                >
                  Submit Registration
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  By submitting this form, you agree to be contacted by our team regarding your enrollment.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Info Box */}
          <div className="mt-8 bg-primary/5 border border-primary/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              What happens next?
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Our team will review your registration within 24 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>We'll contact you via email or phone to discuss your needs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Schedule your first class at a time convenient for you</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Begin your journey of learning the Quran</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
