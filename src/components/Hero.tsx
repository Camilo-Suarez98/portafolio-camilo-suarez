type HeroProps = {
  name: string;
  city: string;
  role: string;
  about: string;
  github: string;
  linkedin: string;
};

export function Hero({
  name,
  city,
  role,
  about,
  github,
  linkedin,
}: HeroProps) {
  return (
    <header className="flex flex-col gap-8">
      <nav className="flex flex-wrap items-center justify-between gap-6 text-sm uppercase tracking-[0.28em] text-(--muted)">
        <span>Portafolio 2026</span>
        <div className="flex gap-4">
          <a
            className="transition hover:text-white"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="transition hover:text-white"
            href={linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="flex flex-col gap-6">
          <p className="text-sm uppercase tracking-[0.24em] text-accent">
            {city}
          </p>
          <h1 className="font-display text-4xl leading-tight text-white sm:text-6xl">
            {name}
          </h1>
          <p className="max-w-xl text-lg text-(--muted)">{about}</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-(--border) px-4 py-2">
              {role}
            </span>
            <span className="rounded-full border border-(--border) px-4 py-2">
              React
            </span>
            <span className="rounded-full border border-(--border) px-4 py-2">
              Next.js
            </span>
            <span className="rounded-full border border-(--border) px-4 py-2">
              TypeScript
            </span>
            <span className="rounded-full border border-(--border) px-4 py-2">
              Tailwind CSS
            </span>
            <span className="rounded-full border border-(--border) px-4 py-2">
              Wordpress
            </span>
          </div>
        </div>
        <div className="rounded-3xl border border-(--border) bg-(--card) p-6 shadow-(--shadow)">
          <h2 className="text-sm uppercase tracking-[0.24em] text-(--muted)">
            Perfil publico
          </h2>
          <div className="mt-6 space-y-3 text-sm text-(--muted)">
            <p>
              GitHub:{" "}
              <a
                className="text-white underline decoration-(--accent-2) decoration-2 underline-offset-4"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                {github}
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                className="text-white underline decoration-(--accent-2) decoration-2 underline-offset-4"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {linkedin}
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
