import type { Repo } from "../lib/types";

type IntegrationsProps = {
  loadingRepos: boolean;
  reposError?: string;
  repos: Repo[];
};

export function Integrations({ loadingRepos, reposError, repos }: IntegrationsProps) {
  return (
    <section className="mt-8 rounded-2xl border border-(--border) bg-black/30 p-6">
      <h3 className="text-lg text-white">Integracion API: GitHub</h3>
      <span className="text-xs uppercase tracking-[0.2em] text-(--muted)">
        Ultimos proyectos
      </span>
      {loadingRepos && (
        <p className="mt-4 text-sm text-(--muted)">
          Cargando repositorios...
        </p>
      )}
      {reposError && (
        <p className="mt-4 text-sm text-red-300">{reposError}</p>
      )}
      {!loadingRepos && !reposError && (
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {repos.length === 0 && (
            <p className="text-sm text-(--muted)">
              No hay repositorios para mostrar.
            </p>
          )}
          {repos.map((repo) => (
            <article
              key={repo.id}
              className="rounded-2xl border border-(--border) bg-black/30 p-4"
            >
              <h4 className="text-sm text-white">{repo.name}</h4>
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-(--muted)">
                <span>Language: {repo.language ?? "N/D"}</span>
              </div>
              <a
                className="mt-3 inline-flex text-xs text-(--accent-2)"
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
              >
                Ver repo →
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};
