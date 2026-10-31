import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
}

function Section({ children, id, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative min-h-screen w-full py-section ${className}`}>
      {children}
    </section>
  )
}

export default Section
