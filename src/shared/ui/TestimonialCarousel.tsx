"use client";

import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/shared/ui/shadcn/button";

interface Testimonial {
  name: string;
  treatment: string;
  rating: number;
  comment: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 후기를 2번 반복해서 무한 루프 효과 만들기 (데스크탑용)
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Mobile: Manual carousel with buttons */}
      <div className="md:hidden relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <TestimonialCard
                  name={testimonial.name}
                  treatment={testimonial.treatment}
                  rating={testimonial.rating}
                  comment={testimonial.comment}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Desktop: Auto-scroll animation */}
      <div className="hidden md:block relative overflow-hidden">
        <div className="flex gap-6 animate-scroll-testimonials hover:pause-animation">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-[45vw] lg:w-[30vw] max-w-md">
              <TestimonialCard
                name={testimonial.name}
                treatment={testimonial.treatment}
                rating={testimonial.rating}
                comment={testimonial.comment}
              />
            </div>
          ))}
        </div>

        {/* 좌우 그라데이션 오버레이 */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </>
  );
};

export default TestimonialCarousel;
