"use client";

import { useEffect } from "react";
import Section from "@/shared/ui/Section";
import PageHeader from "@/shared/ui/PageHeader";
import Image from "next/image";
import { DOCTORS } from "@/constants/doctors";

export default function DoctorPage() {
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
    <main className="pt-16 md:pt-20">
      <Section background="accent">
        <PageHeader
          title="Our Doctors"
          description="정직함과 세심함이 만나는 진료"
          content="안녕플란트치과의 의료진은 환자의 이야기에 귀 기울이며, 정확한 진단과 진심 어린 치료로 신뢰를 쌓아갑니다. 결과보다 과정을 소중히 생각하는 마음으로, 늘 편안한 진료를 약속합니다."
        />
      </Section>

      {DOCTORS.map((doctor, index) => (
        <Section
          key={doctor.id}
          background={index % 2 === 0 ? "card" : "accent"}
          id={doctor.id}
        >
          {/* Mobile layout: Name -> Title -> Image -> Rest */}
          <div className="md:hidden space-y-6">
            <div>
              <h1 className="ty-h1 mb-4">{doctor.name}</h1>
              <p className="ty-lead text-muted-foreground">{doctor.title}</p>
            </div>

            <Image
              src={doctor.image}
              alt={doctor.name}
              width={600}
              height={600}
              className="rounded-lg soft-shadow w-full aspect-square object-cover object-[center_20%]"
            />

            <div className="space-y-8">
              <div>
                <h2 className="ty-h3 mb-4 text-secondary-foreground">
                  진료 철학
                </h2>
                <p className="ty-lead text-muted-foreground mb-4">
                  &ldquo;{doctor.philosophy}&rdquo;
                </p>
                <p className="ty-body text-muted-foreground">
                  {doctor.description}
                </p>
              </div>

              <div>
                <h2 className="ty-h3 mb-4 text-secondary-foreground">
                  학력 및 경력
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  {doctor.education?.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3" />
                      <span className="ty-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="ty-h3 mb-4 text-secondary-foreground">
                  임상 경험
                </h2>
                <p className="ty-body text-muted-foreground">
                  {doctor.experience}
                </p>
              </div>

              <div>
                <h2 className="ty-h3 mb-4 text-secondary-foreground">
                  진료 목표
                </h2>
                <p className="ty-body text-muted-foreground">
                  {doctor.mission}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop layout: Image (left) | Name+Content (right) */}
          <div className="hidden md:grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={600}
                height={800}
                className="rounded-lg soft-shadow w-full sticky top-24"
              />
            </div>

            <div className="md:col-span-3 space-y-12">
              <div>
                <h1 className="ty-h1 mb-4">{doctor.name}</h1>
                <p className="ty-lead text-muted-foreground">{doctor.title}</p>
              </div>

              <div>
                <h2 className="ty-h3 mb-4 text-secondary-foreground">
                  진료 철학
                </h2>
                <p className="ty-lead text-muted-foreground mb-4">
                  &ldquo;{doctor.philosophy}&rdquo;
                </p>
                <p className="ty-body text-muted-foreground">
                  {doctor.description}
                </p>
              </div>

              <div>
                <h2 className="ty-h3 mb-4 text-secondary-foreground">
                  학력 및 경력
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  {doctor.education?.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3" />
                      <span className="ty-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="ty-h3 mb-4 text-secondary-foreground">
                  임상 경험
                </h2>
                <p className="ty-body text-muted-foreground">
                  {doctor.experience}
                </p>
              </div>

              <div>
                <h2 className="ty-h3 mb-4 text-secondary-foreground">
                  진료 목표
                </h2>
                <p className="ty-body text-muted-foreground">
                  {doctor.mission}
                </p>
              </div>
            </div>
          </div>
        </Section>
      ))}
    </main>
  );
}
