import type { ReactNode } from 'react'

type CardVariant = 'about' | 'project'

interface CardProps {
  children: ReactNode
  variant: CardVariant
  className?: string
}

const variantClasses: Record<CardVariant, string> = {
  about:
    'min-h-about-card-min min-w-about-card-min rounded-card p-card hover:-translate-y-card-lift hover:bg-surface-card-hover hover:shadow-card',
  project:
    'min-h-project-card-min max-w-project-card-max overflow-hidden rounded-project-card hover:-translate-y-project-card-lift hover:bg-surface-card-hover hover:shadow-card-lg',
}

function Card({ children, variant, className = '' }: CardProps) {
  return (
    <article
      className={`flex w-full flex-col border border-border bg-surface-card transition ${variantClasses[variant]} ${className}`}
    >
      {children}
    </article>
  )
}

export default Card
