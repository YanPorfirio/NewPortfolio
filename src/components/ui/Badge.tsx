import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`rounded-tag border border-border bg-surface-card px-badge-x py-badge-y text-caption font-medium text-muted ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
