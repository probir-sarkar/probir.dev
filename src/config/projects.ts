export type Project = (typeof projects)[number];
export type Projects = Project[];
export const projects = [
  {
    name: "Taskify",
    description: "A simple todo app with realtime sync using Firebase.",
    stack: ["React", "TypeScript", "Firebase"],
    github: "https://github.com/probir-sarkar/to-do-app",
    live: "https://taskify.pages.dev/",
  },
  {
    name: "TV Maze",
    description: "This project simulates a TV show booking application",
    stack: ["React", "Vite", "SWR"],
    github: "https://github.com/probir-sarkar/tv-maze-project",
    live: "https://tv-maze.pages.dev/",
  },
  {
    name: "CalcPlus",
    description: "Calculators and conversion tools in one place",
    stack: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/probir-sarkar/calc-plus",
    live: "https://calc-plus.probir.dev/",
  },
  {
    name: "Personal Portfolio",
    description: "Personal website of Probir, built with Next.js.",
    stack: ["Next.js", "Tailwind CSS", "Next UI"],
    github: "https://github.com/probir-sarkar/probir-sarkar-nextjs",
    live: "https://probirsarkar.com/",
  },
  {
    name: "WarHistory",
    description: "Catalog of major wars and battles spanning 3500 years, organized by each year.",
    stack: ["Astro", "Tailwind CSS"],
    github: "https://github.com/probir-sarkar/war-history",
    live: "https://war-history.probir.dev/",
  },
  {
    name: "QuikEditor",
    description: "Real-time table editor for efficient editing in Next.js and Hono.js",
    stack: ["Next.js", "Hono.js", "Serverless"],
    github: "https://github.com/probir-sarkar/QuickEdit",
    live: "https://quick-edit.vercel.app/",
  },
];
