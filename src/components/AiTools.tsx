type AiToolsProps = {
  tools: string[];
  longBio: string;
};

export function AiTools({ tools, longBio }: AiToolsProps) {
  return (
    <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
      <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 shadow-[var(--shadow)]">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-white">
          Herramientas de IA usadas
        </h2>
        <ul className="mt-6 space-y-3 text-[color:var(--muted)]">
          {tools.map((tool) => (
            <li key={tool} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              <span>{tool}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl border border-[color:var(--border)] bg-gradient-to-br from-[#131d2b] to-[#0e1116] p-8 shadow-[var(--shadow)]">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-white">
          Lo que construyo
        </h2>
        <p className="mt-5 text-[color:var(--muted)]">{longBio}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full border border-[color:var(--border)] px-4 py-2">
            Automatizaciones
          </span>
          <span className="rounded-full border border-[color:var(--border)] px-4 py-2">
            Dashboards
          </span>
          <span className="rounded-full border border-[color:var(--border)] px-4 py-2">
            Asistentes IA
          </span>
        </div>
      </div>
    </section>
  );
}
