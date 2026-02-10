# Portafolio de Camilo Suárez

Este es el repositorio del portafolio personal de Camilo Suárez, una aplicación web moderna construida con **Next.js** y **Tailwind CSS**. El proyecto destaca mi experiencia profesional, proyectos y habilidades como Desarrollador Frontend.

## 🚀 Características Principales

- **Diseño Responsivo y Moderno**: Interfaz oscura con efectos de vidrio (glassmorphism), animaciones suaves y una tipografía limpia.
- **Sección Hero**: Introducción con información clave y enlaces a redes profesionales (LinkedIn, GitHub).
- **Herramientas e IA**: Lista de herramientas de Inteligencia Artificial utilizadas en mi flujo de trabajo creativo y de desarrollo.
- **Portafolio de Proyectos**: Muestra de proyectos destacados con descripciones, stack tecnológico y enlaces a demos.
- **Área Protegida**: Una sección exclusiva que requiere autenticación para acceder a:
  - Información de contacto detallada (Email, Teléfono).
  - Experiencia profesional completa.
  - Integración con la API de GitHub para mostrar repositorios recientes.
  - Login funcional con validación de credenciales.

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Lenguaje**: TypeScript
- **Iconos**: Lucide React
- **Fuentes**: Geist (Vercel)

## 📦 Instalación y Uso

1. **Clonar el repositorio:**

```bash
git clone https://github.com/Camilo-Suarez98/portafolio-camilo-suarez.git
cd portafolio-camilo-suarez
```

2. **Instalar dependencias:**

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Configurar variables de entorno:**

Crea un archivo `.env.local` en la raíz del proyecto y añade las credenciales para el área protegida:

```env
USER_CREDENTIALS=tu_usuario
PASSWORD_CREDENTIALS=tu_contraseña
```

4. **Correr el servidor de desarrollo:**

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 📄 Estructura del Proyecto

- `src/app`: Rutas y páginas de la aplicación (App Router).
- `src/components`: Componentes reutilizables (Hero, Projects, LoginForm, etc.).
- `src/data`: Datos estáticos como el perfil y la lista de proyectos.
- `src/lib`: Utilidades y tipos de TypeScript.

## 📞 Contacto

Si te interesa mi trabajo o quieres colaborar, puedes encontrarme en:

- [LinkedIn](https://www.linkedin.com/in/camilosc98/)
- [GitHub](https://github.com/Camilo-Suarez98)

---
