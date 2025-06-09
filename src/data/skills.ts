export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: number; // 1-5
}

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", level: 5 },
      { name: "CSS3", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "React.js", level: 5 },
      { name: "Angular", level: 4 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Bootstrap", level: 4 },
      { name: "Responsive Design", level: 5 },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 4 },
      { name: "Express.js", level: 3 },
      { name: "RESTful APIs", level: 4 },
      { name: "GraphQL", level: 3 },
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: 5 },
      { name: "Webpack", level: 3 },
      { name: "Vite", level: 4 },
      { name: "Jest", level: 3 },
      { name: "CI/CD", level: 3 },
      { name: "Figma", level: 4 },
      { name: "AI LLMs", level: 5 },
    ]
  }
];