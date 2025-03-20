interface SectionProps {
    title?: string;
    children?: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">
          {title}
        </h2>
        {children}
      </section>
    )
  }