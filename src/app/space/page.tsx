import Section from "@/shared/ui/Section";
import Map from "@/shared/ui/Map";
import Link from "next/link";
import { Metadata } from "next";
import { Car } from "lucide-react";
import { FACILITIES, PARKING_INFO } from "@/constants/facilities";

export const metadata: Metadata = {
  title: "Our Space - Anyeong Plant Dental Clinic",
  description:
    "A thoughtfully designed clinic environment where comfort and care come together. Experience natural light, clean minimal design, and biophilic elements.",
};

export default function SpacePage() {

  const images = [
    {
      src: "/images/hero-clinic.jpg",
      title: "Reception & Waiting Area",
      description: "A warm welcome with natural light and comfortable seating",
    },
    {
      src: "/images/space-interior.jpg",
      title: "Treatment Room",
      description: "Clean, modern equipment in a calming environment",
    },
    {
      src: "/images/treatment-detail.jpg",
      title: "Consultation Area",
      description: "Private spaces for open, comfortable conversations",
    },
  ];

  return (
    <main className="pt-20">
      <Section>
        <div className="text-center mb-16">
          <h1 className="ty-h1 mb-4">Our Space</h1>
          <p className="ty-lead text-muted-foreground max-w-2xl mx-auto">
            A thoughtfully designed environment where comfort and care come
            together
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="ty-body text-muted-foreground text-center mb-8">
            Every detail of our clinic has been carefully considered to create a
            space that feels more like a wellness studio than a traditional
            dental office. From the warm ivory walls to the natural wood accents
            and abundant plants, we&apos;ve designed an environment that helps you
            feel at ease from the moment you arrive.
          </p>
        </div>
      </Section>

      <Section background="card">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="ty-h3 mb-4">
              Natural Light & Open Space
            </h2>
            <p className="ty-body text-muted-foreground">
              Large windows throughout the clinic bring in plenty of natural
              sunlight, creating a bright and uplifting atmosphere. Our open
              layout ensures you never feel confined or claustrophobic.
            </p>
          </div>
          <div>
            <h2 className="ty-h3 mb-4">Clean, Minimal Design</h2>
            <p className="ty-body text-muted-foreground">
              Inspired by Scandinavian and Japanese aesthetics, our design
              philosophy emphasizes simplicity and functionality. Clean lines,
              neutral tones, and natural materials create a serene environment.
            </p>
          </div>
          <div>
            <h2 className="ty-h3 mb-4">Biophilic Elements</h2>
            <p className="ty-body text-muted-foreground">
              Plants are integrated throughout the space, not just for
              aesthetics but to improve air quality and create a connection to
              nature that promotes calm and well-being.
            </p>
          </div>
          <div>
            <h2 className="ty-h3 mb-4">Privacy & Comfort</h2>
            <p className="ty-body text-muted-foreground">
              Each treatment room offers complete privacy with soundproofing and
              thoughtful layout. Comfortable seating and ambient music help you
              relax during your visit.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="ty-h2 mb-12 text-center">Take a Tour</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image) => (
            <div key={image.title} className="space-y-4">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-80 object-cover rounded-lg soft-shadow"
              />
              <div>
                <h3 className="ty-h3 mb-2">{image.title}</h3>
                <p className="ty-caption text-muted-foreground">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="card">
        <h2 className="ty-h2 mb-12 text-center">
          위치 및 시설 안내
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Map />
          </div>

          <div>
            <h3 className="ty-h3 mb-6">시설 정보</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FACILITIES.map((facility, index) => {
                const Icon = facility.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{facility.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/10">
              <div className="flex items-start gap-3">
                <Car className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-2">{PARKING_INFO.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {PARKING_INFO.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="ty-h2 mb-4">Experience the difference</h2>
          <p className="ty-lead text-muted-foreground mb-8">
            We invite you to visit our clinic and see for yourself how our space
            can transform your dental care experience
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:warm-glow transition-all"
          >
            Schedule a Visit
          </Link>
        </div>
      </Section>
    </main>
  );
}
