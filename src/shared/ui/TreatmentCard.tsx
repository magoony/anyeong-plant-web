import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

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
        <div className="mb-6 overflow-hidden rounded-lg bg-card">
          <img
            src={image}
            alt={title}
            className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
          <div className="flex items-center text-sm text-foreground group-hover:text-primary transition-colors">
            <span className="mr-2">MORE</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TreatmentCard;
