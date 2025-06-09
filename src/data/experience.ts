export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "TechInnovate Solutions",
    location: "San Francisco, CA",
    period: "Jan 2022 - Present",
    description: "Lead developer for multiple client projects, focusing on responsive design and performance optimization.",
    achievements: [
      "Reduced load time by 40% through code optimization and lazy loading strategies",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
      "Led the migration from Angular to React for the company's flagship product"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Digital Craft Studio",
    location: "Portland, OR",
    period: "Mar 2019 - Dec 2021",
    description: "Developed and maintained various client websites and web applications using modern JavaScript frameworks.",
    achievements: [
      "Built 15+ responsive websites for clients across different industries",
      "Implemented reusable component library reducing development time by 30%",
      "Collaborated with design team to create pixel-perfect implementations",
      "Integrated various third-party APIs including payment gateways and social media"
    ]
  },
  {
    title: "Web Developer Intern",
    company: "Creative Web Solutions",
    location: "Seattle, WA",
    period: "Jun 2018 - Feb 2019",
    description: "Assisted the development team in building and maintaining client websites.",
    achievements: [
      "Developed and maintained 5+ WordPress websites",
      "Created custom JavaScript plugins for specific client needs",
      "Collaborated with the design team to implement UI/UX improvements",
      "Participated in daily stand-ups and weekly sprints"
    ]
  }
];