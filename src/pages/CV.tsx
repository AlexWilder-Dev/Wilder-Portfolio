import React from 'react';
import PageTransition from '../components/PageTransition';
import { ArrowDown as ArrowDownTray, Building, GraduationCap, Trophy } from 'lucide-react';
import { skills } from '../data/skills';
import { experiences } from '../data/experience';
import { education } from '../data/education';

const CV: React.FC = () => {
  return (
    <PageTransition>
      <section className="section bg-gptbg pb-12">
        <div className="container-custom">
          <h1 className="section-title">Curriculum Vitae</h1>
          
          <div className="max-w-4xl mx-auto card mb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gpttext">Alex Wilder</h2>
                <p className="text-xl text-primary-500">Frontend Developer</p>
              </div>
              <a 
                href="/resume.pdf" 
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowDownTray size={18} className="mr-2" />
                Download Resume
              </a>
            </div>
            
            {/* Profile Summary */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold border-b border-gptborder pb-2 mb-4 text-gpttext">Professional Summary</h3>
              <p className="text-gptmuted">
                Passionate and results-driven Frontend Developer with over 5 years of experience creating 
                responsive and user-friendly web applications. Specializing in React, TypeScript, and modern 
                frontend technologies, I deliver clean, maintainable code and exceptional user experiences. 
                Proven track record of collaborating effectively with cross-functional teams to deliver 
                projects on time and exceeding client expectations.
              </p>
            </div>
            
            {/* Skills */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold border-b border-gptborder pb-2 mb-6 text-gpttext">
                <Trophy size={20} className="inline-block mr-2 text-primary-500" />
                Skills & Expertise
              </h3>
              
              <div className="space-y-8">
                {skills.map((skillCategory, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-lg mb-3 text-gpttext">{skillCategory.category}</h4>
                    <div className="space-y-3">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium text-gpttext">{skill.name}</span>
                            <span className="text-sm text-gptmuted">
                              {skill.level === 5 ? 'Expert' : 
                               skill.level === 4 ? 'Advanced' : 
                               skill.level === 3 ? 'Intermediate' : 
                               skill.level === 2 ? 'Basic' : 'Beginner'}
                            </span>
                          </div>
                          <div className="w-full bg-gptbg rounded-full h-2">
                            <div 
                              className="bg-primary-500 h-2 rounded-full" 
                              style={{ width: `${skill.level * 20}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Work Experience */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold border-b border-gptborder pb-2 mb-6 text-gpttext">
                <Building size={20} className="inline-block mr-2 text-primary-500" />
                Work Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-gptborder">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                    <div>
                      <h4 className="font-semibold text-lg text-gpttext">{exp.title}</h4>
                      <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                        <p className="text-primary-600 font-medium">{exp.company}</p>
                        <p className="text-gptmuted">{exp.period}</p>
                      </div>
                      <p className="text-gptmuted mb-3">{exp.description}</p>
                      <ul className="list-disc list-inside space-y-1 text-gptmuted">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold border-b border-gptborder pb-2 mb-6 text-gpttext">
                <GraduationCap size={20} className="inline-block mr-2 text-primary-500" />
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-gptborder">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                    <div>
                      <h4 className="font-semibold text-lg text-gpttext">{edu.degree}</h4>
                      <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                        <p className="text-primary-600 font-medium">{edu.institution}</p>
                        <p className="text-gptmuted">{edu.period}</p>
                      </div>
                      {edu.description && (
                        <p className="text-gptmuted">{edu.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="/contact" className="btn-primary">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default CV;