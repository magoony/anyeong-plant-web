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
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* 기존 전체 그라디언트 */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground/50" />
        {/* 상단 추가 그라디언트: 헤더 텍스트 가독성 확보 */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-balance text-white drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl mb-8 text-balance max-w-2xl mx-auto text-white/95 drop-shadow-md">
            {subtitle}
          </p>
        )}
        {cta && (
          <Link href={cta.link}>
            <Button size="lg" className="warm-glow">
              {cta.text}
            </Button>
          </Link>
        )}
      </div>
    </section>
  )
}

export default Hero;
