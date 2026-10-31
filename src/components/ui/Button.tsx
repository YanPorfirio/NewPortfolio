import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  href?: string
  target?: '_blank'
  className?: string
  onClick?: () => void
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border-primary bg-primary px-button-primary-x py-button-primary-y text-caption text-surface font-semibold shadow-button hover:-translate-y-button-lift hover:border-muted hover:bg-muted hover:shadow-button-hover active:translate-y-0',
  secondary:
    'border-border bg-surface-raised px-button-secondary-x py-button-secondary-y text-button text-text hover:scale-button-hover hover:bg-primary hover:text-surface',
}

function Button({
  children,
  variant = 'primary',
  href,
  target,
  className = '',
  onClick,
}: ButtonProps) {
  const classes = `inline-block cursor-pointer rounded-pill border text-center transition ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
