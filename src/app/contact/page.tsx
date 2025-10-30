import Section from "@/shared/ui/Section";
import PageHeader from "@/shared/ui/PageHeader";
import { Card, CardContent } from "@/shared/ui/shadcn/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Metadata } from "next";
import ContactForm from "./_components/ContactForm";

export const metadata: Metadata = {
  title: "진료 문의 - 안녕플란트치과",
  description:
    "안녕플란트치과에 문의하세요. 진료 예약 및 상담을 도와드립니다. 서울특별시 강남구에 위치하고 있습니다.",
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
                    <p className="text-muted-foreground text-sm">
                      서울특별시 강남구 강남대로 123
                    </p>
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
                    <p className="text-muted-foreground text-sm">
                      02-1234-5678
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="soft-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">이메일</h3>
                    <p className="text-muted-foreground text-sm">
                      info@anyeongplant.com
                    </p>
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
        </div>
      </Section>

      <Section background="card">
        <div className="aspect-video w-full rounded-lg overflow-hidden soft-shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.2989645072817!2d127.02456631531567!3d37.49766597981037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a8b5a5c85%3A0x1d8f9c85d8f9c85!2sGangnam-gu%2C%20Seoul%2C%20South%20Korea!5e0!3m2!1sen!2sus!4v1234567890123"
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
