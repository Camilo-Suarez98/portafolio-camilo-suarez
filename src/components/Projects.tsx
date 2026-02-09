import type { Project } from "../lib/types";

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 shadow-[var(--shadow)]">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-white">
          Portafolio de proyectos
        </h2>
        <span className="text-xs uppercase tracking-[0.26em] text-[color:var(--muted)]">
          Seleccion 2024-2026
        </span>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex h-full flex-col justify-between rounded-2xl border border-[color:var(--border)] bg-black/30 p-5"
          >
            <div>
              <h3 className="text-lg text-white">{project.name}</h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                {project.description}
              </p>
            </div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
              {project.stack}
            </div>
            <a
              className="mt-4 inline-flex items-center text-sm text-[color:var(--accent-2)]"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              Ver detalle →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
