import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quran Institute</h3>
            <p className="text-sm opacity-90">
              Dedicated to teaching the Holy Quran with proper Tajweed and understanding, 
              guided by qualified teachers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="opacity-90 hover:opacity-100 transition-opacity">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/register" className="opacity-90 hover:opacity-100 transition-opacity">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Courses</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Tajweed</li>
              <li>Nazra</li>
              <li>Hifz</li>
              <li>Basics of Islam</li>
              <li>Basics of Fiqh</li>
              <li>Islamic Etiquette</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-90">
                <Mail className="w-4 h-4" />
                <span>info@quraninstitute.com</span>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <MapPin className="w-4 h-4" />
                <span>Online Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>© {new Date().getFullYear()} Quran Institute. All rights reserved.</p>
          <p className="mt-2 text-xs">May Allah accept our efforts in spreading His knowledge.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
