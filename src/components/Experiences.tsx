import type { Experience } from "../lib/types";

type ExperiencesProps = {
  experiences: Experience[];
};

export function Experiences({ experiences }: ExperiencesProps) {
  return (
    <section className="mt-8 rounded-2xl border border-(--border) bg-black/30 p-6">
      <h3 className="text-lg text-white">Experiencia profesional</h3>
      <div className="mt-6 space-y-6">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.period}`}
            className="rounded-2xl border border-(--border) bg-[#0f141d] p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h4 className="text-base text-white">
                  {experience.role} · {experience.company}
                </h4>
                <p className="text-xs uppercase tracking-[0.2em] text-(--muted)">
                  {experience.period}
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-(--muted)">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-(--accent)" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}