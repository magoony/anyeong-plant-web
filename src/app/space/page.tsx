"use client";

import React from "react";
import Section from "@/shared/ui/Section";
import PageHeader from "@/shared/ui/PageHeader";
import CTASection from "@/shared/ui/CTASection";
import Map from "@/shared/ui/Map";
import Link from "next/link";
import { Car, X, ChevronLeft, ChevronRight } from "lucide-react";
import { FACILITIES, PARKING_INFO } from "@/constants/facilities";
import { SPACE_CTA } from "@/constants/cta";

export default function SpacePage() {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

  const images = [
    {
      src: "/images/space/front-desk.png",
      title: "프론트 데스크",
      description: "따뜻한 조명과 정돈된 공간에서 편안한 첫 인사를 나눕니다",
    },
    {
      src: "/images/space/private-treatment-room.png",
      title: "개인 진료실",
      description: "프라이버시가 보장되는 독립된 공간에서 집중된 진료가 이루어집니다",
    },
    {
      src: "/images/space/clinic-hallway.png",
      title: "복도",
      description: "깔끔한 동선과 차분한 분위기 속에서 편안하게 이동합니다",
    },
    {
      src: "/images/space/waiting-lounge.png",
      title: "대기 라운지",
      description: "자연스러운 빛과 여유로운 공기가 흐르는 휴식 공간",
    },
    {
      src: "/images/space/brushing-room.png",
      title: "구강 케어룸",
      description: "진료 전후 편안하게 구강 케어를 할 수 있는 공간",
    },
  ];

  return (
    <main className="pt-20">
      <Section>
        <PageHeader
          title="Our Space"
          description="편안함과 배려가 머무는 공간"
          content="환자의 시선과 동선을 따라 설계된 공간 속에서 따뜻한 조명과 자연스러운 질감이 어우러집니다. 치료의 긴장을 내려놓고, 차분한 마음으로 머무를 수 있는 안녕플란트치과만의 분위기를 느껴보세요."
        />
      </Section>

      <Section background="card">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="ty-h3 mb-4">Privacy & Comfort</h2>
            <p className="ty-body text-muted-foreground">
              각 진료실은 독립적으로 설계되어 주변의 시선과 소음으로부터 완전히 분리됩니다. 조용한 공간에서 오롯이 나에게 집중할 수 있습니다.
            </p>
          </div>
          <div>
            <h2 className="ty-h3 mb-4">Natural Light & Open Space</h2>
            <p className="ty-body text-muted-foreground">
              넓은 창으로 들어오는 자연빛이 공간을 밝히며 답답함 없는 개방감을 선사합니다. 부드러운 빛의 흐름 속에서 마음까지 환하게 밝혀집니다.
            </p>
          </div>
          <div>
            <h2 className="ty-h3 mb-4">Warm Lighting & Balance</h2>
            <p className="ty-body text-muted-foreground">
              차분한 빛의 온도와 정돈된 선의 흐름이 어우러져 긴장을 완화하고 안정감을 더합니다. 빛이 공간을 감싸며 진료의 순간까지 부드럽게 이어집니다.
            </p>
          </div>
          <div>
            <h2 className="ty-h3 mb-4">Clean, Minimal Design</h2>
            <p className="ty-body text-muted-foreground">
              불필요한 장식을 덜어내고, 담백한 색감과 질감으로 편안함을 완성했습니다. 깔끔함 속에서 따뜻함이 느껴집니다.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="ty-h2 mb-12 text-center">공간 둘러보기</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((image, index) => (
            <div key={image.title} className="break-inside-avoid space-y-4">
              <img
                src={image.src}
                alt={image.title}
                className="w-full rounded-lg soft-shadow cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(index)}
              />
              <div>
                <h3 className="ty-h3 mb-2">{image.title}</h3>
                <p className="ty-caption text-muted-foreground">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Viewer Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 text-white/80 hover:text-white p-2 disabled:opacity-30"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
              }}
              disabled={selectedImage === 0}
            >
              <ChevronLeft size={48} />
            </button>

            <button
              className="absolute right-4 text-white/80 hover:text-white p-2 disabled:opacity-30"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
              }}
              disabled={selectedImage === images.length - 1}
            >
              <ChevronRight size={48} />
            </button>

            <div className="max-w-7xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-6 text-center text-white">
                <h3 className="text-2xl font-medium mb-2">{images[selectedImage].title}</h3>
                <p className="text-white/80">{images[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </Section>

      <Section background="card">
        <h2 className="ty-h2 mb-12 text-center">
          위치 및 시설 안내
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Map />
          </div>

          <div>
            <h3 className="ty-h3 mb-6">시설 정보</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FACILITIES.map((facility, index) => {
                const Icon = facility.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{facility.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/10">
              <div className="flex items-start gap-3">
                <Car className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-2">{PARKING_INFO.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {PARKING_INFO.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        title={SPACE_CTA.title}
        description={SPACE_CTA.description}
        buttonText={SPACE_CTA.buttonText}
        buttonLink={SPACE_CTA.buttonLink}
        background="default"
      />
    </main>
  );
}
