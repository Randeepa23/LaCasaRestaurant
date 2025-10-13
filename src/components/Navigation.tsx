import { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import lacasaLogo from "@/assets/La Casa images/la casa logo.jpg";
import UberEatsIcon from "@/components/ui/ubereats-icon";
import TripAdvisorIcon from "@/components/ui/tripadvisor-icon";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const offset = 80; // Offset for fixed header
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "menu", label: "Menu" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-md shadow-md py-3 transform-gpu" 
          : "bg-black/60 backdrop-blur-sm py-4"
      }`}
      style={{
        boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.2)" : "none",
        transform: "translateZ(0)", // Force GPU acceleration
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <img 
              src={lacasaLogo} 
              alt="La Casa Logo" 
              className="h-12 md:h-14 rounded-full mr-3 transition-all duration-300"
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
            />
            <h1 className="text-white text-2xl md:text-3xl font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
              La Casa
            </h1>
          </div>

          {/* Desktop Navigation with Social Media */}
          <div className="hidden md:flex items-center">
            {/* Main Navigation Links */}
            <div className="flex items-center">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white hover:text-amber-300 px-5 py-2 font-medium text-lg transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center ml-6 mr-4 space-x-4">
              {/* Theme Toggle Button */}
              <ThemeToggle />
              
              <a 
                href="https://www.facebook.com/share/1A5goJtGwY/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-300 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/la_casa_negombo/?fbclid=IwY2xjawNVbUxleHRuA2FlbQIxMABicmlkETFuZWp4VmszckhISUxIbERrAR7qRnYIqeJMk9Nn1poZTvpkJC_mpSgqkhmuvTMYlwv5mlAnsIdz8TAU9moWMw_aem_lAC-YHGA20LrID32kDEQsA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-300 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.tripadvisor.com/Restaurant_Review-g297897-d15634263-Reviews-Lacasa_Cafe_and_Restaurant-Negombo_Western_Province.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-300 transition-colors"
              >
                <TripAdvisorIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Uber Eats Button */}
            <Button
              onClick={() => window.open("https://www.ubereats.com/store/la-casa-restaurant/puO7LIN7SGu81jpKt48i7w?srsltid=AfmBOopmvjrESALhL6tpAsm6FMOx8Rgs7DA4VlNW9OlZ9xLCVNhe3FSK", "_blank")}
              className="bg-green-500 text-white hover:bg-green-600 px-6 py-2 rounded-full flex items-center gap-2"
            >
              <UberEatsIcon className="w-5 h-5" /> Uber Eats
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen 
              ? "max-h-[80vh] opacity-100 py-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col py-5 px-4">
            {/* Mobile Navigation Links */}
            <div className="border-b border-gray-700 pb-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white hover:text-amber-300 transition-colors font-medium text-left py-2 w-full text-lg"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            {/* Social Media Links on Mobile */}
            <div className="flex justify-center space-x-8 py-6 border-b border-gray-700">
              <a 
                href="https://www.facebook.com/share/1A5goJtGwY/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-300 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/la_casa_negombo/?fbclid=IwY2xjawNVbUxleHRuA2FlbQIxMABicmlkETFuZWp4VmszckhISUxIbERrAR7qRnYIqeJMk9Nn1poZTvpkJC_mpSgqkhmuvTMYlwv5mlAnsIdz8TAU9moWMw_aem_lAC-YHGA20LrID32kDEQsA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-300 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.tripadvisor.com/Restaurant_Review-g297897-d15634263-Reviews-Lacasa_Cafe_and_Restaurant-Negombo_Western_Province.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-300 transition-colors"
              >
                <TripAdvisorIcon className="w-6 h-6" />
              </a>
            </div>
            
            {/* Uber Eats Button on Mobile */}
            <div className="pt-6">
              <Button
                onClick={() => window.open("https://www.ubereats.com/store/la-casa-restaurant/puO7LIN7SGu81jpKt48i7w?srsltid=AfmBOopmvjrESALhL6tpAsm6FMOx8Rgs7DA4VlNW9OlZ9xLCVNhe3FSK", "_blank")}
                className="bg-green-500 text-white hover:bg-green-600 w-full py-4 rounded-full flex items-center justify-center gap-2 text-lg"
              >
                <UberEatsIcon className="w-6 h-6" /> Uber Eats
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
