import Link from "next/link";
import { Button } from "@/shared/ui/shadcn/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6 max-w-2xl">
        <h1 className="mb-4 text-9xl font-light text-muted-foreground/30">
          404
        </h1>
        <h2 className="mb-4 text-3xl md:text-4xl font-light">
          Page Not Found
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button size="lg" className="warm-glow" asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
