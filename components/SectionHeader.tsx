import ScrollReveal from "./ScrollReveal";

export default function SectionHeader({ id, num, name, sub }: { id: string; num: string; name: string; sub?: string }) {
  return (
    <header id={id} className="mb-8 scroll-mt-24">
      <ScrollReveal>
        <h2 className="font-mono text-2xl font-bold">
          <span className="text-emerald">#{num}</span> <span className="text-muted">—</span> {name}
        </h2>
        {sub && <p className="cmt mt-2">{`// ${sub}`}</p>}
      </ScrollReveal>
    </header>
  );
}
