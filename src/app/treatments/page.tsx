"use client";

import { useEffect } from "react";
import Section from "@/shared/ui/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/shadcn/accordion";
import Link from "next/link";
import Image from "next/image";
import { TREATMENTS } from "@/constants/treatments";

export default function TreatmentsPage() {

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  return (
    <main className="pt-20">
      <Section>
        <div className="text-center mb-16">
          <h1 className="ty-h1 mb-4">
            Our Treatments
          </h1>
          <p className="ty-lead text-muted-foreground max-w-2xl mx-auto">
            Comprehensive dental care focused on your comfort and long-term
            health
          </p>
        </div>

        <div className="space-y-16">
          {TREATMENTS.map((treatment, index) => (
            <div
              key={treatment.id}
              id={treatment.id}
              className="scroll-mt-20"
            >
              <div
                className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-start ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`${
                    index % 2 === 1 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    width={800}
                    height={400}
                    className="rounded-lg soft-shadow w-full h-[400px] object-cover"
                  />
                </div>
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div>
                    <h2 className="ty-h2 mb-3">
                      {treatment.title}
                    </h2>
                    <p className="ty-lead text-muted-foreground">
                      {treatment.description}
                    </p>
                  </div>

                  <p className="ty-body text-foreground/90">
                    {treatment.details}
                  </p>

                  <div>
                    <h3 className="ty-h3 mb-4">
                      Frequently Asked Questions
                    </h3>
                    <Accordion type="single" collapsible className="w-full">
                      {treatment.faqs.map((faq, idx) => (
                        <AccordionItem key={idx} value={`item-${idx}`}>
                          <AccordionTrigger className="text-left">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
              {index < TREATMENTS.length - 1 && (
                <div className="mt-16 border-b border-border/50" />
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section background="card" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="ty-h2 mb-4">
            Not sure which treatment is right for you?
          </h2>
          <p className="ty-lead text-muted-foreground mb-8">
            Schedule a consultation and we&apos;ll help you find the best path
            forward
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:warm-glow transition-all"
          >
            Book Consultation
          </Link>
        </div>
      </Section>
    </main>
  );
}
