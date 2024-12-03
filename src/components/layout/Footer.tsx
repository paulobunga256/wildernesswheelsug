import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@wildernesswheels.com"
                className="flex items-center hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                info@wildernesswheels.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                (123) 456-7890
              </a>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1" />
                <p>
                  123 Adventure Road
                  <br />
                  Mountain View, CA 94043
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/vehicles"
                className="block hover:text-emerald-400 transition-colors"
              >
                Our Vehicles
              </Link>
              <Link
                to="/services"
                className="block hover:text-emerald-400 transition-colors"
              >
                Services
              </Link>
              <Link
                to="/news"
                className="block hover:text-emerald-400 transition-colors"
              >
                Latest News
              </Link>
              <Link
                to="/contact"
                className="block hover:text-emerald-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link
                to="/privacy"
                className="block hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="block hover:text-emerald-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cancellation"
                className="block hover:text-emerald-400 transition-colors"
              >
                Cancellation Policy
              </Link>
              <Link
                to="/faq"
                className="block hover:text-emerald-400 transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="text-center text-slate-400">
            <p>
              © {currentYear} Wilderness Wheels. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;