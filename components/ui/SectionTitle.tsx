interface SectionTitleProps {
  children: React.ReactNode
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2
      style={{
        fontFamily: 'var(--serif)',
        fontSize: 'clamp(36px, 4vw, 56px)',
        fontWeight: 300,
        lineHeight: 1.1,
        color: 'var(--grey-900)',
      }}
    >
      {children}
    </h2>
  )
}
