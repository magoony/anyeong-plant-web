"use client";

import { useEffect } from "react";
import Section from "@/shared/ui/Section";
import PageHeader from "@/shared/ui/PageHeader";
import CTASection from "@/shared/ui/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/shadcn/accordion";
import Link from "next/link";
import Image from "next/image";
import { TREATMENTS } from "@/constants/treatments";
import { TREATMENTS_CTA } from "@/constants/cta";

export default function TreatmentsPage() {

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return; // 해시가 없으면 아무것도 하지 않음

    // 페이지가 완전히 렌더링된 후 스크롤
    const timer = setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="pt-20">
      <Section>
        <PageHeader
          title="Our Treatments"
          description="정밀함 속에 담긴 편안함"
          content="기능의 회복을 넘어, 자연스러운 아름다움을 추구합니다. 불필요한 과정을 줄이고 세밀한 계획으로 오래도록 편안한 결과를 만들어갑니다."
        />
      </Section>

      <Section background="card">
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

      <CTASection
        title={TREATMENTS_CTA.title}
        description={TREATMENTS_CTA.description}
        buttonText={TREATMENTS_CTA.buttonText}
        buttonLink={TREATMENTS_CTA.buttonLink}
      />
    </main>
  );
}
