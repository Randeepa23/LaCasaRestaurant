import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a production environment, you would implement an actual email sending API here
    // For example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    
    // Email would be sent to: lacasacafeandrestaurant@gmail.com
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you shortly. Thank you for contacting us.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "No 50/A Thaladuwa Road Negombo, Negombo, Sri Lanka, 11500"
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "Negombo, Sri Lanka"
    },
    {
      icon: Phone,
      title: "Mobile",
      details: "074 391 4331"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      details: "+94 77 377 7654"
    },
    {
      icon: Mail,
      title: "Email",
      details: "lacasacafeandrestaurant@gmail.com"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: "9:00 AM - 11:00 PM (Mon-Sun)"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Contact Us
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Have questions or want to make a reservation? Reach out to us directly through our contact form or using the information below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-in order-2 md:order-1">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full min-h-[120px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg py-5 sm:py-6"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in order-1 md:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-3 sm:gap-4 items-start group">
                  <div className="bg-primary/10 p-2 sm:p-3 md:p-4 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <info.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1">{info.title}</h3>
                    {info.title === "Email" ? (
                      <p className="text-muted-foreground text-xs sm:text-sm md:text-base break-all hover:text-primary transition-colors">
                        <a href={`mailto:${info.details}`}>{info.details}</a>
                      </p>
                    ) : (
                      <p className="text-muted-foreground text-xs sm:text-sm md:text-base">{info.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Embed */}
            <div className="mt-6 sm:mt-8 rounded-lg overflow-hidden shadow-lg h-60 sm:h-72 md:h-80 bg-muted">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.7075670220595!2d79.84570751744384!3d7.2025888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ef551d07e92d%3A0x15c35474299c2b82!2sLa%20Casa%20Cafe%20%26%20Restaurant!5e0!3m2!1sen!2sus!4v1665408538041!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="La Casa Cafe & Restaurant Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
