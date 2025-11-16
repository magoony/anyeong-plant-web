"use client";

import { MessageCircle, Calendar, BookOpen, Phone } from "lucide-react";
import Link from "next/link";

const FloatingActionBar = () => {
  const actions = [
    {
      icon: Phone,
      label: "전화문의",
      href: "tel:05071331961",
      color: "from-primary/90 to-primary",
    },
    {
      icon: Calendar,
      label: "네이버 예약",
      href: "https://booking.naver.com/booking/13/bizes/733466?theme=place&lang=ko&area=pll",
      color: "from-green-500 to-green-600",
      badge: "N",
    },
    {
      icon: Calendar,
      label: "카카오 예약",
      href: "http://pf.kakao.com/_NxlMhG/friend",
      color: "from-yellow-400 to-yellow-500",
      badge: "K",
    },
    {
      icon: BookOpen,
      label: "블로그",
      href: "https://blog.naver.com/doctor_anyeong",
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <>
      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden pb-safe">
        <div className="bg-black/50 backdrop-blur-md border-t border-white/10 shadow-2xl">
          <div className="flex justify-around items-center px-4 py-3 gap-2">
            {actions.map((action, index) => {
              const Icon = action.icon;
              const isExternal = action.href.startsWith("http");

              if (isExternal) {
                return (
                  <a
                    key={index}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex-1"
                  >
                    <div
                      className={`
                      relative h-14 rounded-xl bg-gradient-to-br ${action.color}
                      shadow-md active:shadow-sm transition-all duration-200
                      flex flex-col items-center justify-center gap-0.5
                      active:scale-95
                    `}
                    >
                      <Icon
                        className="w-5 h-5 text-white relative z-10"
                        strokeWidth={1.5}
                      />
                      <span className="text-[9px] text-white font-medium relative z-10 leading-tight">
                        {action.label}
                      </span>

                      {action.badge && (
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-foreground text-[8px] font-bold rounded-full flex items-center justify-center shadow-md z-20">
                          {action.badge}
                        </span>
                      )}
                    </div>
                  </a>
                );
              }

              return (
                <Link key={index} href={action.href} className="group relative flex-1">
                  <div
                    className={`
                    relative h-14 rounded-xl bg-gradient-to-br ${action.color}
                    shadow-md active:shadow-sm transition-all duration-200
                    flex flex-col items-center justify-center gap-0.5
                    active:scale-95
                  `}
                  >
                    <Icon
                      className="w-5 h-5 text-white relative z-10"
                      strokeWidth={1.5}
                    />
                    <span className="text-[9px] text-white font-medium relative z-10 leading-tight">
                      {action.label}
                    </span>

                    {action.badge && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-foreground text-[8px] font-bold rounded-full flex items-center justify-center shadow-md z-20">
                        {action.badge}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Desktop Side Bar */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-black/50 backdrop-blur-md rounded-3xl p-4 shadow-2xl border border-white/10">
          <div className="flex flex-col gap-3">
          {actions.map((action, index) => {
            const Icon = action.icon;
            const isExternal = action.href.startsWith("http");

            if (isExternal) {
              return (
                <a
                  key={index}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div
                    className={`
                    relative w-20 h-20 rounded-2xl bg-gradient-to-br ${action.color}
                    shadow-lg hover:shadow-xl transition-all duration-300
                    flex flex-col items-center justify-center gap-1
                    hover:scale-110 hover:-translate-x-1
                    before:absolute before:inset-0 before:rounded-2xl before:bg-white/20 before:opacity-0
                    hover:before:opacity-100 before:transition-opacity
                  `}
                  >
                    <Icon
                      className="w-6 h-6 text-white relative z-10"
                      strokeWidth={1.5}
                    />
                    <span className="text-[10px] text-white font-medium relative z-10 leading-tight text-center px-1">
                      {action.label}
                    </span>

                    {action.badge && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-foreground text-[10px] font-bold rounded-full flex items-center justify-center shadow-md z-20">
                        {action.badge}
                      </span>
                    )}
                  </div>
                </a>
              );
            }

            return (
              <Link key={index} href={action.href} className="group relative">
                <div
                  className={`
                  relative w-20 h-20 rounded-2xl bg-gradient-to-br ${action.color}
                  shadow-lg hover:shadow-xl transition-all duration-300
                  flex flex-col items-center justify-center gap-1
                  hover:scale-110 hover:-translate-x-1
                  before:absolute before:inset-0 before:rounded-2xl before:bg-white/20 before:opacity-0
                  hover:before:opacity-100 before:transition-opacity
                `}
                >
                  <Icon
                    className="w-6 h-6 text-white relative z-10"
                    strokeWidth={1.5}
                  />
                  <span className="text-[10px] text-white font-medium relative z-10 leading-tight text-center px-1">
                    {action.label}
                  </span>

                  {action.badge && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-foreground text-[10px] font-bold rounded-full flex items-center justify-center shadow-md z-20">
                      {action.badge}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      </div>
    </>
  );
};

export default FloatingActionBar;
