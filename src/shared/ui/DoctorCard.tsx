import { Button } from "@/shared/ui/shadcn/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface DoctorCardProps {
  id: string;
  image: string;
  name: string;
  title: string;
  quote: string;
}

const DoctorCard = ({ id, image, name, title, quote }: DoctorCardProps) => {
  return (
    <div className="group">
      <div className="mb-6 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-light">{name}</h3>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-sm italic text-foreground/80 pt-2 border-t border-border">
          &ldquo;{quote}&rdquo;
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="mt-4 group/btn"
          asChild
        >
          <Link href={`/doctor#${id}`}>
            더보기
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default DoctorCard;
