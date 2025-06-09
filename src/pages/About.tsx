import React from 'react';
import PageTransition from '../components/PageTransition';
import { Calendar, Heart, Book, Code, Link } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Evolution of Frontend Development",
    excerpt: "Exploring how frontend development has changed over the past decade and what's coming next.",
    date: "June 15, 2025",
    category: "Web Development",
    imageUrl: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    excerpt: "A deep dive into React Hooks and how they revolutionized the way we build components.",
    date: "May 22, 2025",
    category: "React",
    imageUrl: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "The Power of TypeScript in Modern Web Development",
    excerpt: "Why TypeScript has become essential for building maintainable JavaScript applications.",
    date: "April 10, 2025",
    category: "TypeScript",
    imageUrl: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const About: React.FC = () => {
  return (
    <PageTransition>
      {/* About Hero */}
      <section className="py-16 md:py-24 bg-gptbg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gpttext">About Me</h1>
              <p className="text-xl text-gptmuted mb-6">
                I'm Alex Wilder, a passionate frontend developer with a love for creating beautiful, 
                functional, and user-friendly web experiences.
              </p>
              <p className="text-gptmuted mb-6">
                With over 5 years of experience in the industry, I've had the pleasure of working with 
                a variety of clients and projects, from startups to established companies. My goal is 
                always to deliver high-quality code that not only meets but exceeds client expectations.
              </p>
              <p className="text-gptmuted">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through blog posts and community engagement.
              </p>
            </div>
            
            <div className="order-first lg:order-last">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-300 rounded-lg blur opacity-30"></div>
                <img 
                  src="https://images.pexels.com/photos/1181267/pexels-photo-1181267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Alex Wilder" 
                  className="relative rounded-lg shadow-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* My Journey */}
      <section className="py-16 bg-gptcard">
        <div className="container-custom">
          <h2 className="section-title">My Journey</h2>
          
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="relative pl-10 pb-10 border-l-2 border-primary-200">
              <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary-500"></div>
              <h3 className="text-xl font-semibold mb-2 text-gpttext">The Beginning</h3>
              <div className="flex items-center text-gptmuted mb-4">
                <Calendar size={16} className="mr-2" />
                <span>2018</span>
              </div>
              <p className="text-gptmuted">
                My journey into web development began during my college years when I took my first 
                HTML and CSS course. I was immediately fascinated by the ability to create something 
                visual and interactive that others could experience. This sparked my passion for frontend 
                development, and I quickly expanded my skills to include JavaScript and various frameworks.
              </p>
            </div>
            
            <div className="relative pl-10 pb-10 border-l-2 border-primary-200">
              <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary-500"></div>
              <h3 className="text-xl font-semibold mb-2 text-gpttext">Professional Growth</h3>
              <div className="flex items-center text-gptmuted mb-4">
                <Calendar size={16} className="mr-2" />
                <span>2019 - 2021</span>
              </div>
              <p className="text-gptmuted">
                After graduating, I joined a digital agency where I had the opportunity to work on diverse 
                projects across different industries. This experience was invaluable as it exposed me to 
                various challenges and technologies. I refined my skills in React, learned TypeScript, 
                and became proficient in modern frontend development practices.
              </p>
            </div>
            
            <div className="relative pl-10 pb-10 border-l-2 border-primary-200">
              <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary-500"></div>
              <h3 className="text-xl font-semibold mb-2 text-gpttext">Where I Am Today</h3>
              <div className="flex items-center text-gptmuted mb-4">
                <Calendar size={16} className="mr-2" />
                <span>2022 - Present</span>
              </div>
              <p className="text-gptmuted">
                Currently, I work as a freelance frontend developer, collaborating with clients to bring 
                their visions to life. I specialize in creating responsive, accessible, and performant web 
                applications using modern technologies like React, TypeScript, and Tailwind CSS. I'm also 
                deeply interested in UI/UX design and strive to create experiences that are not only 
                functional but also aesthetically pleasing and intuitive.
              </p>
            </div>
            
            <div className="relative pl-10">
              <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary-500"></div>
              <h3 className="text-xl font-semibold mb-2 text-gpttext">What's Next</h3>
              <div className="flex items-center text-gptmuted mb-4">
                <Calendar size={16} className="mr-2" />
                <span>The Future</span>
              </div>
              <p className="text-gptmuted">
                I'm continuously learning and evolving as a developer. My goal is to stay at the forefront 
                of web development technologies and trends. I'm particularly excited about the potential of 
                AI in web development and how it can enhance user experiences. I'm also passionate about 
                sharing my knowledge with the community through writing, speaking, and mentoring.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* What I Love */}
      <section className="py-16 bg-gptbg">
        <div className="container-custom">
          <h2 className="section-title">What I Love</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mx-auto mb-6">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gpttext">Clean Code</h3>
              <p className="text-gptmuted">
                I'm passionate about writing clean, maintainable, and efficient code. I believe that good code 
                should be readable, scalable, and well-documented.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mx-auto mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gpttext">User Experience</h3>
              <p className="text-gptmuted">
                Creating intuitive and delightful user experiences is at the core of what I do. I focus on 
                accessibility, performance, and thoughtful interactions.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mx-auto mb-6">
                <Book size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gpttext">Continuous Learning</h3>
              <p className="text-gptmuted">
                The tech world evolves rapidly, and I embrace continuous learning. I stay updated with the 
                latest technologies, best practices, and industry trends.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="section bg-gptcard">
        <div className="container-custom">
          <h2 className="section-title">From My Blog</h2>
          <p className="text-center text-gptmuted max-w-2xl mx-auto mb-12">
            Thoughts, insights, and updates from my journey as a frontend developer.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-gptcard px-2 py-1 rounded text-xs font-medium text-gpttext border border-gptborder">
                    {post.category}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center text-gptmuted text-sm mb-2">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-gpttext">{post.title}</h3>
                  <p className="text-gptmuted mb-4">{post.excerpt}</p>
                </div>
                
                <a href="#" className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium">
                  Read More
                  <Link size={16} className="ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="btn-primary">
              View All Posts
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;