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
  aiTools: [
    "ChatGPT para ideacion y redaccion",
    "GitHub Copilot para aceleracion de codigo",
    "Claude para variantes de copy y revisiones",
    "Figma AI para exploracion visual",
  ],
  projects: [
    {
      name: "Radar de Oportunidades",
      description:
        "Scraper + clasificador para detectar convocatorias y ordenarlas por relevancia.",
      stack: "Next.js, Python, SQLite, LangChain",
      link: "https://tu-proyecto.com",
    },
    {
      name: "Briefing Express",
      description:
        "Formulario inteligente que genera propuestas y presupuestos en minutos.",
      stack: "Next.js, Supabase, OpenAI API",
      link: "https://tu-proyecto.com",
    },
    {
      name: "Studio Kits",
      description: "Biblioteca de componentes y prompts para equipos creativos.",
      stack: "React, Tailwind, Notion API",
      link: "https://tu-proyecto.com",
    },
  ],
  demoCredentials: {
    user: "portafolio2026",
    password: "zona-protegida",
  },
};
