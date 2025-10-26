import TestimonialCard from "./TestimonialCard";

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
  // 후기를 2번 반복해서 무한 루프 효과 만들기
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-6 animate-scroll-testimonials hover:pause-animation">
        {duplicatedTestimonials.map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 w-[90vw] md:w-[45vw] lg:w-[30vw] max-w-md">
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
  );
};

export default TestimonialCarousel;
