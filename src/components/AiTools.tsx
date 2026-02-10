type AiToolsProps = {
  tools: string[];
  longBio: string;
};

export function AiTools({ tools, longBio }: AiToolsProps) {
  return (
    <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
      <div className="rounded-3xl border border-(--border) bg-(--card) p-8 shadow-(--shadow)">
        <h2 className="font-display text-3xl text-white">
          Herramientas de IA usadas
        </h2>
        <ul className="mt-6 space-y-3 text-(--muted)">
          {tools.map((tool) => (
            <li key={tool} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-(--accent)" />
              <span>{tool}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl border border-(--border) bg-linear-to-br from-[#131d2b] to-[#0e1116] p-8 shadow-(--shadow)">
        <h2 className="font-display text-3xl text-white">
          Lo que construyo
        </h2>
        <p className="mt-5 text-(--muted)">{longBio}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full border border-(--border) px-4 py-2">
            Aplicaciones Web
          </span>
          <span className="rounded-full border border-(--border) px-4 py-2">
            Landing Pages
          </span>
          <span className="rounded-full border border-(--border) px-4 py-2">
            Integraciones con IA
          </span>
        </div>
      </div>
    </section>
  );
};
