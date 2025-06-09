import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { ArrowLeft, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <section className="min-h-[70vh] flex items-center justify-center bg-gptbg">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-6 text-gpttext">Page Not Found</h2>
            <p className="text-xl text-gptmuted max-w-md mx-auto mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" className="btn-primary">
                <Home size={18} className="mr-2" />
                Back to Home
              </Link>
              <button 
                onClick={() => window.history.back()} 
                className="btn-secondary"
              >
                <ArrowLeft size={18} className="mr-2" />
                Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default NotFound;