import Section from "@/shared/ui/Section";
import { Card, CardContent } from "@/shared/ui/shadcn/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Metadata } from "next";
import ContactForm from "./_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Anyeong Plant Dental Clinic",
  description:
    "Get in touch with Anyeong Plant Dental Clinic. Schedule your visit or ask any questions. Located in Gangnam-gu, Seoul.",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <Section>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;re here to answer your questions and schedule your visit
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <Card className="soft-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Location</h3>
                    <p className="text-muted-foreground text-sm">
                      123 Gangnam-daero, Gangnam-gu
                      <br />
                      Seoul, South Korea
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="soft-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Phone</h3>
                    <p className="text-muted-foreground text-sm">
                      +82 2-1234-5678
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="soft-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      info@anyeongplant.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="soft-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Opening Hours</h3>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="card">
        <div className="aspect-video w-full rounded-lg overflow-hidden soft-shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.2989645072817!2d127.02456631531567!3d37.49766597981037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a8b5a5c85%3A0x1d8f9c85d8f9c85!2sGangnam-gu%2C%20Seoul%2C%20South%20Korea!5e0!3m2!1sen!2sus!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Anyeong Plant Dental Clinic Location"
          />
        </div>
      </Section>
    </main>
  );
}
