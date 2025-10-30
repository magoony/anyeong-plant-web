import Hero from "@/shared/ui/Hero";
import Section from "@/shared/ui/Section";
import CTASection from "@/shared/ui/CTASection";
import TreatmentCard from "@/shared/ui/TreatmentCard";
import DoctorCard from "@/shared/ui/DoctorCard";
import TestimonialCarousel from "@/shared/ui/TestimonialCarousel";
import { Button } from "@/shared/ui/shadcn/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  CORE_TREATMENTS,
  HERO,
  ABOUT,
  DOCTORS_SECTION,
  TREATMENTS_SECTION,
  PHILOSOPHY,
  SPACE_SECTION,
  TESTIMONIALS_SECTION,
} from "@/constants/home";
import { DOCTORS } from "@/constants/doctors";
import { TESTIMONIALS } from "@/constants/testimonials";
import { HOME_CTA } from "@/constants/cta";

export default function HomePage() {

  return (
    <main>
      <Hero
        image={HERO.image}
        title={HERO.title}
        subtitle={HERO.subtitle}
        cta={HERO.cta}
        height="h-[80vh]"
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <Image
              src={ABOUT.image}
              alt="Anyeong Plant Dental Clinic Team"
              width={800}
              height={500}
              className="rounded-lg soft-shadow w-full h-[500px] object-cover"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="ty-h2 whitespace-pre-line">
              {ABOUT.title}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              {ABOUT.paragraphs.map((paragraph, index) => (
                <p key={index} className="ty-body">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section background="accent">
        <div className="text-center mb-16">
          <h2 className="ty-h2 mb-4">
            {DOCTORS_SECTION.title}
          </h2>
          <p className="ty-lead text-muted-foreground max-w-2xl mx-auto">
            {DOCTORS_SECTION.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {DOCTORS.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              id={doctor.id}
              image={doctor.image}
              name={doctor.name}
              title={doctor.title}
              quote={doctor.quote}
            />
          ))}
        </div>
      </Section>

      <Section background="card">
        <div className="text-center mb-16">
          <h2 className="ty-h2 mb-4">
            {TREATMENTS_SECTION.title}
          </h2>
          <p className="ty-lead text-muted-foreground max-w-2xl mx-auto">
            {TREATMENTS_SECTION.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {CORE_TREATMENTS.map((treatment) => (
            <TreatmentCard
              key={treatment.title}
              image={treatment.image}
              title={treatment.title}
              description={treatment.description}
              link={treatment.link}
            />
          ))}
        </div>
      </Section>

      <Section background="accent">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Image
              src={PHILOSOPHY.image}
              alt="Dr. Kim"
              width={800}
              height={500}
              className="rounded-lg soft-shadow w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <h2 className="ty-h2 mb-6">
              {PHILOSOPHY.title}
            </h2>
            {PHILOSOPHY.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="ty-body text-muted-foreground mb-6"
              >
                {paragraph}
              </p>
            ))}
            <Link
              href={PHILOSOPHY.link.href}
              className="text-primary hover:underline inline-flex items-center"
            >
              {PHILOSOPHY.link.text}
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="ty-h2 mb-6">
              {SPACE_SECTION.title}
            </h2>
            {SPACE_SECTION.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="ty-body text-muted-foreground mb-6"
              >
                {paragraph}
              </p>
            ))}
            <Link
              href={SPACE_SECTION.link.href}
              className="text-primary hover:underline inline-flex items-center"
            >
              {SPACE_SECTION.link.text}
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src={SPACE_SECTION.image}
              alt="Our space"
              width={800}
              height={400}
              className="rounded-lg soft-shadow w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-16">
          <h2 className="ty-h2 mb-4">
            {TESTIMONIALS_SECTION.title}
          </h2>
          <p className="ty-lead text-muted-foreground max-w-2xl mx-auto">
            {TESTIMONIALS_SECTION.description}
          </p>
        </div>

        <TestimonialCarousel testimonials={TESTIMONIALS} />
      </Section>

      <CTASection
        title={HOME_CTA.title}
        description={HOME_CTA.description}
        buttonText={HOME_CTA.buttonText}
        buttonLink={HOME_CTA.buttonLink}
      />
    </main>
  );
}
