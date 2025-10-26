import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-medium mb-4">Anyeong Plant Dental Clinic</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your new smile begins here. Honest care for a confident smile.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              Opening Hours
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              Location
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              123 Gangnam-daero, Gangnam-gu<br />
              Seoul, South Korea
            </p>
            <div className="flex items-center text-sm">
              <Phone className="mr-2 h-4 w-4" />
              <a href="tel:+8221234567" className="hover:text-primary transition-colors">
                +82 2-1234-5678
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Anyeong Plant Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
