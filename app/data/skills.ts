export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Backend & BaaS",
    items: ["Firebase Auth", "Firestore", "Cloud Functions"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "Vite", "Vercel", "Figma", "Mobile-First Design"],
  },
];

export const skillLogos: Record<string, string> = {
  React: "/skills/react.svg",
  "Next.js": "/skills/next.svg",
  TypeScript: "/skills/typescript.svg",
  JavaScript: "/skills/javascript.svg",
  "Tailwind CSS": "/skills/tailwind-css.svg",
  HTML: "/skills/html.svg",
  CSS: "/skills/css.svg",

  "Firebase Auth": "/skills/firebase.svg",
  Firestore: "/skills/firebase.svg",
  "Cloud Functions": "/skills/firebase.svg",

  Git: "/skills/git.svg",
  Vercel: "/skills/vercel.png",
  Figma: "/skills/figma.svg",
  "Mobile-First Design": "/skills/responsive.svg.png",
  Vite: "/skills/vite.svg",
};
