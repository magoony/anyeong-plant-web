import Section from "@/shared/ui/Section";
import PageHeader from "@/shared/ui/PageHeader";
import { Card, CardContent } from "@/shared/ui/shadcn/card";
import { MapPin, Phone, Clock, Info, MessageCircle } from "lucide-react";
import FacilitiesInfo from "@/shared/ui/FacilitiesInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "진료 문의 - 안녕플란트치과",
  description:
    "안녕플란트치과에 문의하세요. 진료 예약 및 상담을 도와드립니다. 충청남도 당진시에 위치하고 있습니다.",
};

export default function ContactPage() {
  return (
    <main className="pt-16 md:pt-20">
      <Section background="accent">
        <PageHeader
          title="진료 문의"
          description="당신의 안녕이 시작되는 순간"
          content="상담부터 치료까지, 언제나 열린 마음으로 함께합니다. 궁금한 점이 있다면 편하게 문의해주세요. 당신의 이야기를 듣는 것에서 우리의 진료는 시작됩니다."
        />
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto flex flex-col gap-6 ">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="soft-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">위치</h3>
                    <a
                      href="https://naver.me/GVADXmwO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors inline-block"
                    >
                      충남 당진시 밤절로 132-99
                      <br />
                      나우프라자빌딩 2층 204-206호
                    </a>
                    <div className="flex items-start gap-2 text-muted-foreground/80 mt-3">
                      <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <span className="text-xs">
                        신터미널 농협 주차장 맞은편 주차빌딩 2층입니다.
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="soft-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">진료 시간</h3>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <p>월 - 금: 오전 9시 - 오후 6시</p>
                      <p>토요일: 오전 9시 - 오후 2시</p>
                      <p>일요일: 휴진</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-6">
            <a href="tel:05071331961" className="block">
              <Card className="soft-shadow hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/50 h-full">
                <CardContent className="pt-4 md:pt-6 px-2 md:px-6">
                  <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xs md:text-base font-medium mb-1">전화 문의</h3>
                      <p className="text-muted-foreground text-[10px] md:text-xs">
                        0507-1331-9617
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a
              href="http://pf.kakao.com/_NxlMhG/friend"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="soft-shadow hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-yellow-400/50 bg-gradient-to-br from-yellow-50 to-yellow-100/50 dark:from-yellow-950/20 dark:to-yellow-900/10 h-full">
                <CardContent className="pt-4 md:pt-6 px-2 md:px-6">
                  <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-yellow-900" />
                    </div>
                    <div>
                      <h3 className="text-xs md:text-base font-medium mb-1">카카오톡 문의</h3>
                      <p className="text-muted-foreground text-[10px] md:text-xs">
                        빠른 상담 및 예약
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://booking.naver.com/booking/13/bizes/733466?theme=place&lang=ko&area=pll"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="soft-shadow hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-green-500/50 bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/20 dark:to-green-900/10 h-full">
                <CardContent className="pt-4 md:pt-6 px-2 md:px-6">
                  <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xs md:text-base font-medium mb-1">네이버 예약 문의</h3>
                      <p className="text-muted-foreground text-[10px] md:text-xs">
                        네이버로 간편 예약
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>

          <div className="aspect-video rounded-lg overflow-hidden soft-shadow">
            <iframe
              src="https://maps.google.com/maps?q=36.9010819,126.6461048&hl=ko&z=18&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anyeong Plant Dental Clinic Location"
            />
          </div>

        </div>
      </Section>

      <Section background="accent">
        <div className="max-w-4xl mx-auto">
          <h2 className="ty-h2 text-center mb-12">시설 안내</h2>
          <FacilitiesInfo />
        </div>
      </Section>
    </main>
  );
}
