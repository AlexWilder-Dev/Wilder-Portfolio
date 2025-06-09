export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'website' | 'app' | 'misc';
}

export const projects: Project[] = [
  // Websites
  {
    id: 1,
    title: "EcoSmart Home",
    description: "A responsive website for a smart home company with beautiful animations and interactive elements.",
    imageUrl: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    category: "website"
  },
  {
    id: 2,
    title: "TravelBuddy",
    description: "A travel planning platform with interactive maps and destination guides.",
    imageUrl: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "MongoDB", "Mapbox API"],
    liveUrl: "#",
    githubUrl: "#",
    category: "website"
  },
  {
    id: 3,
    title: "FitnessPro",
    description: "A fitness coaching website with workout plans and nutrition guides.",
    imageUrl: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
    category: "website"
  },
  
  // Apps
  {
    id: 4,
    title: "TaskFlow",
    description: "A productivity app for managing tasks and projects with team collaboration features.",
    imageUrl: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Redux", "Firebase", "Styled Components"],
    liveUrl: "#",
    githubUrl: "#",
    category: "app"
  },
  {
    id: 5,
    title: "WeatherNow",
    description: "A weather forecast app with beautiful visualizations and location-based services.",
    imageUrl: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React Native", "TypeScript", "OpenWeather API"],
    liveUrl: "#",
    githubUrl: "#",
    category: "app"
  },
  {
    id: 6,
    title: "BudgetTracker",
    description: "A personal finance app for tracking expenses and managing budgets.",
    imageUrl: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Angular", "TypeScript", "Chart.js", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
    category: "app"
  },
  
  // Misc
  {
    id: 7,
    title: "CodeSnippets",
    description: "A collection of reusable code snippets and UI components for developers.",
    imageUrl: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "TypeScript", "Storybook", "Jest"],
    liveUrl: "#",
    githubUrl: "#",
    category: "misc"
  },
  {
    id: 8,
    title: "AIChat Assistant",
    description: "A conversational AI assistant that helps with programming questions and debugging.",
    imageUrl: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Node.js", "Express", "OpenAI API", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    category: "misc"
  },
  {
    id: 9,
    title: "DevToolbox",
    description: "A collection of developer tools and utilities for web development workflows.",
    imageUrl: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["JavaScript", "Electron", "React", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    category: "misc"
  }
];