// Used export because we will need it when making ProjectCard component
export type Project = {
  title: string;
  desc: string;
  tools: string[];
  href: string;
  year: number;
};

export const projects: Project[] = [
  {
    title: "This portfolio",
    desc: "My portfolio website created using Next.js",
    tools: ["Next.js", "Typescript", "Tailwind"],
    href: "https://github.com/mobsenpai/portfolio.git",
    year: 2026,
  },
];
