"use client";

import { useEffect, useState } from "react";
import type { Repo } from "../lib/types";

type ProtectedAreaProps = {
  email: string;
  phone: string;
  experienceDetail: string;
  github: string;
  credentials: {
    user: string;
    password: string;
  };
};

export function ProtectedArea({
  email,
  phone,
  experienceDetail,
  github,
  credentials,
}: ProtectedAreaProps) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [reposError, setReposError] = useState<string | null>(null);
  const [loadingRepos, setLoadingRepos] = useState(false);

  useEffect(() => {
    if (!accessGranted) return;
    const loadRepos = async () => {
      setLoadingRepos(true);
      setReposError(null);
      try {
        const response = await fetch(
          `/api/github?user=${encodeURIComponent(
            github.split("github.com/")[1] ?? "tu-usuario"
          )}`
        );
        if (!response.ok) {
          throw new Error("No fue posible cargar repositorios.");
        }
        const data = (await response.json()) as Repo[];
        setRepos(data);
      } catch (error) {
        setReposError(
          error instanceof Error ? error.message : "Error desconocido."
        );
      } finally {
        setLoadingRepos(false);
      }
    };
    loadRepos();
  }, [accessGranted, github]);

  const handleLogin = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (
      user.trim() === credentials.user &&
      password.trim() === credentials.password
    ) {
      setAccessGranted(true);
    }
  };

  return (
    <section className="rounded-3xl border border-(--border) bg-(--card) p-8 shadow-(--shadow)">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="font-(--font-display) text-3xl text-white">
            Zona protegida
          </h2>
          <p className="mt-3 text-(--muted)">
            Inicia sesion para ver datos de contacto, CV, integraciones y
            documentacion tecnica.
          </p>
        </div>
        {!accessGranted && (
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-3 rounded-2xl border border-(--border) bg-black/30 p-4"
          >
            <label
              htmlFor="user"
              className="text-xs uppercase tracking-[0.2em] text-(--muted)"
            >
              Credenciales demo para enviar por correo
            </label>
            <input
              name="user"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              className="h-11 rounded-xl border border-(--border) bg-transparent px-4 text-white placeholder:text-(--muted) focus:outline-none focus:ring-2 focus:ring-(--accent-2)"
              placeholder="Usuario"
              type="text"
            />
            <input
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="h-11 rounded-xl border border-(--border) bg-transparent px-4 text-white placeholder:text-(--muted) focus:outline-none focus:ring-2 focus:ring-(--accent-2)"
              placeholder="Contrasena"
              type="password"
            />
            <button
              type="submit"
              className="h-11 rounded-xl bg-(--accent) text-sm font-semibold text-black transition hover:brightness-110"
            >
              Entrar
            </button>
            <div className="rounded-xl border border-(--border) bg-[#10141c] p-3 text-xs text-(--muted)">
              Usuario: <span className="text-white">{credentials.user}</span>
              <br />
              Clave: <span className="text-white">{credentials.password}</span>
            </div>
          </form>
        )}
      </div>

      {accessGranted && (
        <div className="mt-10 ">
          <div className="rounded-2xl border border-(--border) bg-black/30 p-6">
            <h3 className="text-lg text-white">Contacto directo</h3>
            <p className="mt-4 text-(--muted)">
              Email: <span className="text-white">{email}</span>
            </p>
            <p className="mt-2 text-(--muted)">
              WhatsApp: <span className="text-white">{phone}</span>
            </p>
            <p className="mt-2 text-(--muted)">
              <a href="/cv.pdf" target="_blank" rel="noreferrer">
                CV: <span className="text-white">Ver CV</span>
              </a>
            </p>
            <div className="mt-6 rounded-xl border border-(--border) bg-[#10141c] p-4 text-sm text-(--muted)">
              CV PDF:{" "}
              <a href="/cv.pdf" target="_blank" rel="noreferrer">
                <span className="text-white">public/cv.pdf</span> y enlazalo desde
                aqui.
              </a>
            </div>
          </div>
        </div>
      )}

      {accessGranted && (
        <div className="mt-8 rounded-2xl border border-(--border) bg-[#10141c] p-6">
          <div className="grid gap-6">
            <div>
              <h3 className="text-lg text-white">Experiencia y formacion</h3>
              <p className="mt-4 text-sm text-(--muted)">
                {experienceDetail}
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-lg text-white">Integracion API: GitHub</h3>
            <span className="text-xs uppercase tracking-[0.2em] text-(--muted)">
              Actualizacion automatica
            </span>
          </div>
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
                  <p className="mt-2 text-xs text-(--muted)">
                    {repo.description ?? "Sin descripcion."}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-(--muted)">
                    <span>{repo.language ?? "N/D"}</span>
                    <span>★ {repo.stargazers_count}</span>
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
        </div>
      )}
    </section>
  );
};
