export default function SectionHeading({ 
  subtitle, 
  title, 
  centered = false 
}: { 
  subtitle?: string, 
  title: string,
  centered?: boolean
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && <h4 className="text-[var(--pb-accent)] text-lg mb-2">{subtitle}</h4>}
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <div className={`wavy-line ${centered ? 'wavy-line-center' : ''}`}>
        <svg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,10 Q10,0 20,10 T40,10 T60,10 T80,10 T100,10" fill="none" stroke="var(--pb-accent)" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  );
}
