import { AiTools } from "../components/AiTools";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { ProtectedArea } from "../components/ProtectedArea";
import { profile } from "../data/profile";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden px-6 pb-24 pt-10 text-[15px] sm:px-12">
      <div className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-[#1d2b53] opacity-40 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 top-36 h-72 w-72 rounded-full bg-[#ffb703] opacity-30 blur-[140px]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        <Hero
          name={profile.name}
          city={profile.city}
          role={profile.role}
          about={profile.about}
          github={profile.github}
          linkedin={profile.linkedin}
        />

        <AiTools tools={profile.aiTools} longBio={profile.longBio} />

        <Projects projects={profile.projects} />

        <ProtectedArea
          email={profile.email}
          phone={profile.phone}
          experienceDetail={profile.experienceDetail}
          github={profile.github}
          credentials={profile.demoCredentials}
        />
      </div>
    </div>
  );
}
