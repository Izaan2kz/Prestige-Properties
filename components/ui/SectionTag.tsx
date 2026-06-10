interface SectionTagProps {
  children: React.ReactNode
}

export default function SectionTag({ children }: SectionTagProps) {
  return (
    <div
      className="section-tag"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '10px',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: 'var(--gold)',
        marginBottom: '16px',
        fontWeight: 500,
      }}
    >
      {children}
    </div>
  )
}
