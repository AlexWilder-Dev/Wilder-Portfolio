import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { Code, Laptop, ScrollText, User, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Home: React.FC = () => {
  // Featured projects (one from each category)
  const featuredProjects = [
    projects.find(p => p.category === 'website'),
    projects.find(p => p.category === 'app'),
    projects.find(p => p.category === 'misc')
  ].filter(Boolean);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gptbg to-dark-900 py-20 md:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gpttext">
                Front-End Developer
                <span className="text-primary-500 block">Crafting Digital Experiences</span>
              </h1>
              <p className="text-xl text-gptmuted mb-8">
                Hi, I'm Alex Wilder, a freelance front-end developer specializing in building beautiful, responsive, and user-friendly websites and applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/portfolio" className="btn-primary">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Me
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-300 rounded-lg blur opacity-30"></div>
                <div className="relative bg-gptcard p-6 rounded-lg shadow-gpt border border-gptborder">
                  <div className="flex mb-4 items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <pre className="bg-dark-900 rounded-lg p-4 text-sm font-mono overflow-x-auto">
                    <code className="text-gpttext">
                      <span className="text-primary-500">const</span> <span className="text-purple-400">developer</span> = {`{`}
                      <br />  <span className="text-blue-400">name</span>: <span className="text-green-400">'Alex Wilder'</span>,
                      <br />  <span className="text-blue-400">skills</span>: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'TypeScript'</span>, <span className="text-green-400">'Tailwind'</span>],
                      <br />  <span className="text-blue-400">passion</span>: <span className="text-green-400">'Creating beautiful UIs'</span>,
                      <br />  <span className="text-purple-400">code</span>: <span className="text-primary-500">() =&gt;</span> {`{`}
                      <br />    <span className="text-primary-500">return</span> <span className="text-green-400">'Pixel perfect!'</span>;
                      <br />  {`}`}
                      <br />{`}`};
                    </code>
                  </pre>
                </div>
              </div>
              
              {/* Floating tech badges */}
              <motion.div 
                className="absolute -top-4 -right-4 tech-badge"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                React
              </motion.div>
              <motion.div 
                className="absolute top-1/2 -right-8 tech-badge"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              >
                TypeScript
              </motion.div>
              <motion.div 
                className="absolute bottom-0 -left-4 tech-badge"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
              >
                Tailwind
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="section bg-gptbg">
        <div className="container-custom">
          <h2 className="section-title">My Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend */}
            <div className="card hover:border-primary-500 transition-all">
              <div className="mb-4 text-primary-500">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gpttext">Frontend Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-gptmuted">HTML5, CSS3, JavaScript</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-gptmuted">React.js, TypeScript</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-gptmuted">Angular, Vue.js</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-gptmuted">Responsive Web Design</span>
                </li>
              </ul>
            </div>
            
            {/* Styling */}
            <div className="card hover:border-primary-500 transition-all">
              <div className="mb-4 text-primary-500">
                <Laptop size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gpttext">Styling & UI</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-gptmuted">Tailwind CSS</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-gptmuted">Bootstrap</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-gptmuted">SASS/SCSS</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-gptmuted">UI/UX Principles</span>
                </li>
              </ul>
            </div>
            
            {/* Back-end */}
            <div className="card hover:border-primary-500 transition-all">
              <div className="mb-4 text-primary-500">
                <ScrollText size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gpttext">Back-end Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-gptmuted">Node.js</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-gptmuted">RESTful APIs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-gptmuted">API Integration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-gptmuted">Database Basics</span>
                </li>
              </ul>
            </div>
            
            {/* Other */}
            <div className="card hover:border-primary-500 transition-all">
              <div className="mb-4 text-primary-500">
                <User size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gpttext">Other Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-gptmuted">Git & Version Control</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-gptmuted">AI & LLM Integration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-gptmuted">Agile Methodology</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2" />
                  <span className="text-gptmuted">Performance Optimization</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/cv" className="btn-secondary">
              View My Full CV
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="section bg-gptcard">
        <div className="container-custom">
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              project && (
                <div key={project.id} className="card group overflow-hidden">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-lg h-48 mb-4">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-2 text-gpttext">{project.title}</h3>
                  <p className="text-gptmuted mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-badge">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              )
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-primary">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
    </PageTransition>
  );
};

export default Home;