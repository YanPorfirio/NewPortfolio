interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`mb-stack-xl text-left ${className}`}>
      <h2 className="font-heading text-heading-lg font-medium">{title}</h2>
      {subtitle ? (
        <p className="mt-stack-md max-w-section-copy text-subtitle leading-relaxed text-muted">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export default SectionTitle
