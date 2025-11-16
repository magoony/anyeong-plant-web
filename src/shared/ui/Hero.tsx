import { Button } from "@/shared/ui/shadcn/button";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  image: string;
  title: string;
  subtitle?: string;
  cta?: {
    text: string;
    link: string;
  };
}

const Hero = ({ image, title, subtitle, cta }: HeroProps) => {
  return (
    <section className="relative h-screen 2xl:h-[85vh] 2xl:max-h-[900px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="w-full h-full [&_img]:object-[65%] md:[&_img]:object-center">
          <Image
            src={image}
            alt={title}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover animate-hero-zoom"
          />
        </div>
        {/* 기존 전체 그라디언트 */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground/50" />
        {/* 상단 추가 그라디언트: 헤더 텍스트 가독성 확보 */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black/40 to-transparent" />
        {/* 왼쪽 그라디언트: 타이틀/디스크립션 가독성 확보 */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="container-custom w-full h-full flex items-center">
          <div className="text-left -mt-[240px] md:-mt-[60px] px-4 md:px-0">
            <h1
              className="text-2xl md:text-[42px] 2xl:text-5xl font-medium tracking-normal mb-4 md:mb-6 text-white whitespace-pre-line animate-hero-title"
              style={{
                lineHeight: "1.3",
                textShadow:
                  "0 2px 6px rgba(0, 0, 0, 0.25), 0 0 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className="text-xs md:text-[17px] 2xl:text-lg text-white/95 max-w-2xl animate-hero-subtitle"
                style={{
                  textShadow:
                    "0 2px 4px rgba(0, 0, 0, 0.25), 0 0 12px rgba(0, 0, 0, 0.15)",
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/80" />
      </div>
    </section>
  );
};

export default Hero;
