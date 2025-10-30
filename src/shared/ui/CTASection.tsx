import Link from "next/link";
import Section from "./Section";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  background?: "default" | "card" | "accent";
}

const CTASection = ({
  title,
  description,
  buttonText,
  buttonLink,
  background = "card",
}: CTASectionProps) => {
  return (
    <Section background={background} className="text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="ty-h2 mb-4">{title}</h2>
        <p className="ty-lead text-muted-foreground mb-8">{description}</p>
        <Link
          href={buttonLink}
          className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:warm-glow transition-all"
        >
          {buttonText}
        </Link>
      </div>
    </Section>
  );
};

export default CTASection;
