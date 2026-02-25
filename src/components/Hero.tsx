import { NavLink } from "./ui/NavLink";
import { SocialLink } from "./ui/SocialLink";

type HeroProps = {
  name: string;
  city: string;
  role: string;
  about: string;
  github: string;
  linkedin: string;
  techStack: string[];
};

export function Hero({
  name,
  city,
  role,
  about,
  github,
  linkedin,
  techStack,
}: HeroProps) {
  return (
    <header className="flex flex-col gap-8">
      <nav className="flex flex-wrap items-center justify-between gap-6 text-sm uppercase tracking-[0.28em] text-(--muted)">
        <span>Portafolio 2026</span>
        <div className="flex gap-4">
          <NavLink link={github} name="GitHub" />
          <NavLink link={linkedin} name="LinkedIn" />
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
            {techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-(--border) px-4 py-2">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-(--border) bg-(--card) p-6 shadow-(--shadow)">
          <h2 className="text-sm uppercase tracking-[0.24em] text-(--muted)">
            Perfil publico
          </h2>
          <div className="mt-6 space-y-3 text-sm text-(--muted)">
            <SocialLink link={github} name="GitHub" />
            <SocialLink link={linkedin} name="LinkedIn" />
          </div>
        </div>
      </div>
    </header>
  );
}
