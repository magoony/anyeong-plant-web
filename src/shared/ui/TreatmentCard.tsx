import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface TreatmentCardProps {
  image: string
  title: string
  description: string
  link: string
}

const TreatmentCard = ({
  image,
  title,
  description,
  link,
}: TreatmentCardProps) => {
  return (
    <div className="group">
      <Link href={link} className="block">
        <div className="mb-6 overflow-hidden rounded-lg bg-card relative aspect-[2/1] md:aspect-auto md:h-80">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-all duration-500 group-hover:scale-105 md:grayscale md:group-hover:grayscale-0"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
          <div className="flex items-center justify-end text-sm text-foreground group-hover:text-primary transition-colors">
            <span className="mr-2">더보기</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TreatmentCard;
