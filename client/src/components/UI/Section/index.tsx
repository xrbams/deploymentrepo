interface ISectionProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}

function Section({ id, children, className = '' }: ISectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      {children}
    </section>
  );
}

export default Section;
