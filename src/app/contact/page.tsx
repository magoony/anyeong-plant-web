import Section from "@/shared/ui/Section";
import PageHeader from "@/shared/ui/PageHeader";
import { Card, CardContent } from "@/shared/ui/shadcn/card";
import { MapPin, Phone, Clock, Info, MessageCircle } from "lucide-react";
import { Metadata } from "next";
import ContactForm from "./_components/ContactForm";

export const metadata: Metadata = {
  title: "진료 문의 - 안녕플란트치과",
  description:
    "안녕플란트치과에 문의하세요. 진료 예약 및 상담을 도와드립니다. 충청남도 당진시에 위치하고 있습니다.",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <Section>
        <PageHeader
          title="진료 문의"
          description="당신의 안녕이 시작되는 순간"
          content="상담부터 치료까지, 언제나 열린 마음으로 함께합니다. 궁금한 점이 있다면 편하게 문의해주세요. 당신의 이야기를 듣는 것에서 우리의 진료는 시작됩니다."
        />
      </Section>

      <Section background="card">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-6">
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
                      충남 당진시 밤절로 132-99<br />
                      나우프라자빌딩 2층 204-206호
                    </a>
                    <div className="flex items-start gap-2 text-muted-foreground/80 mt-3">
                      <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <span className="text-xs">신터미널 농협 주차장 맞은편 주차빌딩 2층입니다.</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="soft-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">전화</h3>
                    <a
                      href="tel:05071331961"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      0507-1331-9617
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <a
              href="http://pf.kakao.com/_NxlMhG/friend"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="soft-shadow hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-yellow-400/50 bg-gradient-to-br from-yellow-50 to-yellow-100/50 dark:from-yellow-950/20 dark:to-yellow-900/10">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-yellow-900" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">카카오톡 문의</h3>
                        <p className="text-muted-foreground text-xs">
                          빠른 상담 및 예약
                        </p>
                      </div>
                    </div>
                    <div className="text-yellow-600 dark:text-yellow-400 font-bold text-sm">
                      →
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
              <Card className="soft-shadow hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-green-500/50 bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/20 dark:to-green-900/10">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">네이버 예약 문의</h3>
                        <p className="text-muted-foreground text-xs">
                          네이버로 간편 예약
                        </p>
                      </div>
                    </div>
                    <div className="text-green-600 dark:text-green-400 font-bold text-sm">
                      →
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>

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
        </div>
      </Section>

      <Section background="card">
        <div className="aspect-video w-full rounded-lg overflow-hidden soft-shadow">
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
      </Section>
    </main>
  );
}
