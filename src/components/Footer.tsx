import React from 'react';
import { NavLink } from 'react-router-dom';
import { Code, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gptcard border-t border-gptborder">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <Code className="text-white" size={24} />
              </div>
              <span className="font-bold text-xl text-gpttext">Alex Wilder</span>
            </div>
            <p className="text-gptmuted mb-4">
              Freelance front-end developer crafting beautiful, responsive, and user-friendly websites.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gptmuted hover:text-primary-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gptmuted hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gptmuted hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@alexwilder.dev" aria-label="Email" className="text-gptmuted hover:text-primary-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-gpttext">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gptmuted hover:text-primary-500 transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="text-gptmuted hover:text-primary-500 transition-colors">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/cv" className="text-gptmuted hover:text-primary-500 transition-colors">
                  CV
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gptmuted hover:text-primary-500 transition-colors">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gptmuted hover:text-primary-500 transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          
          {/* Technologies */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-gpttext">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <span className="tech-badge">HTML5</span>
              <span className="tech-badge">CSS3</span>
              <span className="tech-badge">JavaScript</span>
              <span className="tech-badge">TypeScript</span>
              <span className="tech-badge">React</span>
              <span className="tech-badge">Angular</span>
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Tailwind</span>
              <span className="tech-badge">Bootstrap</span>
              <span className="tech-badge">Git</span>
              <span className="tech-badge">AI LLMs</span>
            </div>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-gpttext">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gptmuted">
                <strong className="text-gpttext">Email:</strong> contact@alexwilder.dev
              </li>
              <li className="text-gptmuted">
                <strong className="text-gpttext">Location:</strong> San Francisco, CA
              </li>
              <li className="text-gptmuted">
                <strong className="text-gpttext">Availability:</strong> Open to freelance projects
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gptborder mt-12 pt-6 text-center text-gptmuted">
          <p>&copy; {currentYear} Alex Wilder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;