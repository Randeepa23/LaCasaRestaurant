import { Facebook, Instagram } from "lucide-react";
import TripAdvisorIcon from "@/components/ui/tripadvisor-icon";
import lacasaLogo from "@/assets/La Casa images/la casa logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Contact */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={lacasaLogo} 
                alt="La Casa Logo" 
                className="h-12 w-12 rounded-full mr-3 shadow-md"
              />
              <h3 className="text-2xl font-bold text-accent">La Casa</h3>
            </div>
            <div className="space-y-2 mb-4">
              <p className="text-background/80">
                <a 
                  href="https://www.google.com/maps/place/La+Casa+Cafe+%26+Restaurant/@7.2025888,79.8457075,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae2ef551d07e92d:0x15c35474299c2b82!8m2!3d7.2025888!4d79.8482824!16s%2Fg%2F11gnrlfww8?entry=ttu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  No 50/A Thaladuwa Road Negombo,<br />
                  Negombo, Sri Lanka, 11500
                </a>
              </p>
              <p className="text-background/80">
                <a href="tel:074 391 4331" className="hover:text-accent transition-colors">074 391 4331</a> | 
                <a href="tel:+94 77 377 7654" className="hover:text-accent transition-colors ml-1">+94 77 377 7654</a>
              </p>
              <p className="text-background/80">
                <a href="mailto:lacasacafeandrestaurant@gmail.com" className="hover:text-accent transition-colors">
                  lacasacafeandrestaurant@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="text-background/80 hover:text-accent transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1A5goJtGwY/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-3 rounded-full hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/la_casa_negombo/?fbclid=IwY2xjawNVbUxleHRuA2FlbQIxMABicmlkETFuZWp4VmszckhISUxIbERrAR7qRnYIqeJMk9Nn1poZTvpkJC_mpSgqkhmuvTMYlwv5mlAnsIdz8TAU9moWMw_aem_lAC-YHGA20LrID32kDEQsA#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-3 rounded-full hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tripadvisor.com/Restaurant_Review-g297897-d15634263-Reviews-Lacasa_Cafe_and_Restaurant-Negombo_Western_Province.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-3 rounded-full hover:bg-accent transition-colors"
                aria-label="TripAdvisor"
              >
                <TripAdvisorIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © {new Date().getFullYear()} La Casa Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
