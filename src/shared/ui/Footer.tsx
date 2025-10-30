import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-medium mb-4">Anyeong Plant Dental</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your new smile starts here
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
              서울특별시 강남구 강남대로 123
            </p>
            <div className="flex items-center text-sm">
              <Phone className="mr-2 h-4 w-4" />
              <a href="tel:0212345678" className="hover:text-primary transition-colors">
                02-1234-5678
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 안녕플란트치과. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
