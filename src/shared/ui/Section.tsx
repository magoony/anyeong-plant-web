import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "card" | "accent";
  id?: string;
}

const Section = ({ children, className = "", background = "default", id }: SectionProps) => {
  const bgClass =
    background === "card" ? "bg-card" :
    background === "accent" ? "bg-accent/8" :
    "bg-background";

  return (
    <section id={id} className={`section-padding ${bgClass} ${className}`}>
      <div className="container-custom">{children}</div>
    </section>
  );
};

export default Section;
