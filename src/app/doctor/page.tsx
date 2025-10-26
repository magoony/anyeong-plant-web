"use client";

import { useEffect } from "react";
import Section from "@/shared/ui/Section";
import Image from "next/image";
import { DOCTORS } from "@/constants/doctors";

export default function DoctorPage() {

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
      {DOCTORS.map((doctor, index) => (
        <Section
          key={doctor.id}
          background={index % 2 === 0 ? "default" : "accent"}
          id={doctor.id}
        >
          <div className="grid md:grid-cols-5 gap-12 items-start">
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
                <h1 className="ty-h1 mb-4">
                  {doctor.name}
                </h1>
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
