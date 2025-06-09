import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1000);
  };
  
  return (
    <PageTransition>
      <section className="section bg-gptbg">
        <div className="container-custom">
          <h1 className="section-title">Get in Touch</h1>
          <p className="text-center text-gptmuted max-w-2xl mx-auto mb-12">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you! 
            Fill out the form below or reach out to me directly using my contact information.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="card h-full">
                <h2 className="text-2xl font-semibold mb-6 text-gpttext">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
                      <Mail size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gpttext">Email</h3>
                      <a href="mailto:contact@alexwilder.dev" className="text-primary-600 hover:text-primary-500 transition-colors">
                        contact@alexwilder.dev
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
                      <Phone size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gpttext">Phone</h3>
                      <a href="tel:+15551234567" className="text-primary-600 hover:text-primary-500 transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
                      <MapPin size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gpttext">Location</h3>
                      <p className="text-gptmuted">
                        San Francisco, California
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gptborder">
                  <h3 className="font-medium mb-4 text-gpttext">Connect with me</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gptbg border border-gptborder flex items-center justify-center text-gptmuted hover:text-primary-500 hover:border-primary-500 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gptbg border border-gptborder flex items-center justify-center text-gptmuted hover:text-primary-500 hover:border-primary-500 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://twitter.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gptbg border border-gptborder flex items-center justify-center text-gptmuted hover:text-primary-500 hover:border-primary-500 transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-semibold mb-6 text-gpttext">Send me a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gpttext mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gptbg border border-gptborder rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-gpttext"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gpttext mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gptbg border border-gptborder rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-gpttext"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gpttext mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gptbg border border-gptborder rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-gpttext"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gpttext mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 bg-gptbg border border-gptborder rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-gpttext"
                      placeholder="Tell me about your project or inquiry..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth={4}
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  {formStatus === 'success' && (
                    <motion.div 
                      className="mt-4 p-3 bg-green-900/50 text-green-400 rounded-lg border border-green-700"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Your message has been sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                  
                  {formStatus === 'error' && (
                    <motion.div 
                      className="mt-4 p-3 bg-red-900/50 text-red-400 rounded-lg border border-red-700"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      There was an error sending your message. Please try again later.
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-gptcard">
        <div className="container-custom">
          <div className="bg-gptbg rounded-xl overflow-hidden h-[400px] relative border border-gptborder">
            {/* Placeholder for an actual map */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gptmuted">Map placeholder - Would integrate with Google Maps or Mapbox here</p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;