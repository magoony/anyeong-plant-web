import { Button } from '@/shared/ui/shadcn/button'
import Link from 'next/link'

interface HeroProps {
  image: string
  title: string
  subtitle?: string
  cta?: {
    text: string
    link: string
  }
  height?: string
}

const Hero = ({
  image,
  title,
  subtitle,
  cta,
  height = 'h-[600px]',
}: HeroProps) => {
  return (
    <section
      className={`relative ${height} flex items-center justify-center overflow-hidden`}
    >
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover animate-hero-zoom" />
        {/* 기존 전체 그라디언트 */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground/50" />
        {/* 상단 추가 그라디언트: 헤더 텍스트 가독성 확보 */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black/40 to-transparent" />
        {/* 왼쪽 그라디언트: 타이틀/디스크립션 가독성 확보 */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="container-custom w-full h-full flex items-center">
          <div className="text-left -mt-[60px]">
            <h1 className="text-3xl md:text-5xl font-medium tracking-normal mb-6 text-white whitespace-pre-line animate-hero-title" style={{ lineHeight: '1.3', textShadow: '0 2px 6px rgba(0, 0, 0, 0.25), 0 0 15px rgba(0, 0, 0, 0.2)' }}>
              {title}
            </h1>
            {subtitle && (
              <p className="text-base md:text-lg text-white/95 max-w-2xl animate-hero-subtitle" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.25), 0 0 12px rgba(0, 0, 0, 0.15)' }}>
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
