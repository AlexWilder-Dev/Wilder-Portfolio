import React, { useState, useRef, useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import { projects } from '../data/projects';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, MousePointer2, Code, Layout, Boxes } from 'lucide-react';

type CategoryFilter = 'all' | 'website' | 'app' | 'misc';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  const filteredProjects = filter === 'all' 
    ? projects
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const categoryIcons = {
    all: <Boxes className="w-5 h-5" />,
    website: <Layout className="w-5 h-5" />,
    app: <Code className="w-5 h-5" />,
    misc: <MousePointer2 className="w-5 h-5" />
  };
    
  return (
    <PageTransition>
      {/* Tech-themed Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gptbg"
        style={{ opacity }}
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-4">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className="border border-primary-500/10 rounded-lg"
                style={{
                  transform: `scale(${
                    1 + Math.abs(Math.cos((i % 12) * 0.5) * Math.sin((Math.floor(i / 12)) * 0.5)) * 0.2
                  })`,
                  opacity: Math.random() * 0.3 + 0.1
                }}
              />
            ))}
          </div>
        </div>

        {/* Interactive Glow Effect */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(42, 167, 156, 0.3) 0%, transparent 50%)`
          }}
        />

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-block p-2 rounded-lg bg-primary-500/10 border border-primary-500/20 mb-4">
                <Code className="w-8 h-8 text-primary-400" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-200 bg-clip-text text-transparent">
                Portfolio
              </h1>
              <p className="text-xl text-gptmuted max-w-2xl mx-auto">
                Explore my latest projects and technical achievements. Each project represents 
                a unique challenge solved through code and creativity.
              </p>
            </motion.div>

            {/* Tech Stack Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {['React', 'TypeScript', 'Node.js', 'Tailwind', 'Next.js'].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-gptcard/50 text-primary-400 border border-primary-500/20
                    shadow-glow hover:shadow-neon transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Decorative Code Lines */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gptbg to-transparent" />
      </motion.section>

      {/* Projects Section */}
      <section className="py-16 bg-gptbg">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gptcard/50 rounded-xl shadow-glow p-2 flex gap-2 border border-gptborder">
              {(['all', 'website', 'app', 'misc'] as const).map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    filter === category 
                      ? 'bg-primary-500 text-white shadow-neon' 
                      : 'text-primary-400 hover:bg-gptcard/50'
                  }`}
                >
                  {categoryIcons[category]}
                  <span className="capitalize">{category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="card overflow-hidden">
                  {/* Image Container */}
                  <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gptbg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`
                        px-3 py-1 rounded-full text-xs font-medium uppercase
                        ${project.category === 'website' ? 'bg-blue-500 text-white' : ''}
                        ${project.category === 'app' ? 'bg-purple-500 text-white' : ''}
                        ${project.category === 'misc' ? 'bg-amber-500 text-white' : ''}
                      `}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 text-primary-400 group-hover:text-primary-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gptmuted mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-primary-500/20">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors ml-auto"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gptmuted text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default Portfolio;