import type { Profile } from "../lib/types";

export const profile: Profile = {
  name: "Camilo Suárez",
  city: "Floridablanca, Colombia",
  role: "Desarrollador Frontend",
  github: "https://github.com/Camilo-Suarez98",
  linkedin: "https://www.linkedin.com/in/camilosc98/",
  email: "camilo.suarez85@gmail.com",
  phone: "+57 320 318 9088",
  about:
    "Desarrollo aplicaciones web con enfoque en la experiencia de usuario y la calidad del codigo.",
  longBio:
    "Me gusta crear soluciones digitales que sean faciles de usar y que resuelvan problemas reales. He trabajado con equipos pequenos y clientes que necesitan resultados concretos en poco tiempo.",
  experienceDetail:
    "Soy desarrollador frontend con experiencia en la creacion de aplicaciones web modernas y eficientes. Me especializo en React y Next.js, y disfruto construir interfaces intuitivas y optimizadas. He trabajado en proyectos que requieren integraciones con APIs, manejo de datos en tiempo real y soluciones escalables. Mi enfoque se centra en la calidad del codigo, la experiencia del usuario y la entrega de resultados tangibles que aporten valor al negocio.",
  experiences: [
    {
      role: "Desarrollador Frontend",
      company: "Mocion Experience Tech",
      period: "Julio 2025 - Diciembre 2025",
      bullets: [
        "Desarrollo de plataforma SAAS para creacion de eventos de organizaciones utilizando React, TypeScript y Redux para el frontend y PostgreSQL para la base de datos.",
        "Colaboracion en el area de Marketing para editar el sitio web de la empresa, aplicando animaciones y correccion de errores.",
      ],
    },
    {
      role: "Desarrollador Frontend",
      company: "Freelance",
      period: "Enero 2023 - Actualidad",
      bullets: [
        "He desarrollado sitios web y landing pages para varias empresas con sede en EE.UU. utilizando diferentes tecnologias, mejorando su presencia en linea y mostrando experiencia en tecnologias web y tendencias de diseno.",
        "Colaboro estrechamente con un desarrollador frontend senior en una importante empresa estadounidense, desempenando un papel clave en la identificacion y resolucion de errores en proyectos web y contribuyendo a la creacion de nuevas interfaces, ampliando la experiencia en desarrollo frontend.",
      ],
    },
    {
      role: "Desarrollador Frontend",
      company: "Genco S.A",
      period: "Julio 2022 - Diciembre 2022",
      bullets: [
        "Desarrolle interfaces sensibles y faciles de usar utilizando HTML, CSS, JavaScript y React para mejorar la funcionalidad del sitio web y la experiencia del usuario.",
        "Creacion de landing pages para campanas de marketing.",
      ],
    },
  ],
  aiTools: [
    "ChatGPT para ideacion y redaccion",
    "Antigravity con Codex como editor de codigo",
    "Claude Code para variantes de copy y revisiones",
    "v0 para exploracion visual",
    "Freepik para imágenes",
  ],
  projects: [
    {
      name: "Speakify",
      description:
        "Proyecto para aprender idiomas utilizando IA como asistente basado en el nivel actual del dominio del usuario y el idioma que desea aprender.",
      stack: "Next.js, NextAuth, Tailwind, OpenAI API",
      link: "https://speakify-five.vercel.app/",
    },
    {
      name: "AI Resume Viewer",
      description:
        "Proyecto para ver y analizar CVs con IA, recibir un puntaje y sugerencias para mejorar.",
      stack: "Next.js, Tailwind, OpenAI API",
      link: "https://ai-resume-viewer.vercel.app/",
    },
    {
      name: "Cine Explorer",
      description: "Proyecto para buscar películas usando la API de TMDB y con IA recibir sugerencias en base a las películas favoritas del usuario.",
      stack: "Next.js, NextAuth, Tailwind, TMDB API, OpenAI API",
      link: "https://cine-explorer.vercel.app/",
    }
  ],
  demoCredentials: {
    user: "portafolio2026",
    password: "zona-protegida",
  },
};
