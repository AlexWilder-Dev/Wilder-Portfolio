export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Washington",
    location: "Seattle, WA",
    period: "2014 - 2018",
    description: "Specialized in Web Technologies and Human-Computer Interaction. Participated in the university's hackathon team and web development club."
  },
  {
    degree: "Full-Stack Web Development Bootcamp",
    institution: "Code Academy",
    location: "San Francisco, CA",
    period: "2018",
    description: "Intensive 12-week program focused on modern web development technologies including JavaScript, React, Node.js, and MongoDB."
  },
  {
    degree: "UI/UX Design Certificate",
    institution: "Design Institute",
    location: "Online",
    period: "2020",
    description: "Comprehensive course on user interface and experience design principles, wireframing, prototyping, and user testing."
  }
];