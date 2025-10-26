import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  treatment: string;
  rating: number;
  comment: string;
}

const TestimonialCard = ({ name, treatment, rating, comment }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-lg p-8 soft-shadow h-full flex flex-col">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? "fill-accent text-accent"
                : "fill-none text-muted-foreground/30"
            }`}
          />
        ))}
      </div>
      <p className="text-foreground leading-relaxed mb-6 flex-grow">
        &ldquo;{comment}&rdquo;
      </p>
      <div className="border-t border-border pt-4">
        <p className="font-medium text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{treatment}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
