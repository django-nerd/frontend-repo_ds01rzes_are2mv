import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Search, Users, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/50 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollTo('top')}
            className="group inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-gray-900 transition-colors hover:text-red-600"
          >
            <Rocket className="h-5 w-5 text-red-600 transition-transform group-hover:rotate-6" />
            <span className="font-semibold tracking-tight">SwayMatch</span>
          </button>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <button onClick={() => scrollTo('discover')} className="hover:text-gray-900 flex items-center gap-1">
              <Search className="h-4 w-4" /> Discover
            </button>
            <button onClick={() => scrollTo('onboarding')} className="hover:text-gray-900 flex items-center gap-1">
              <Users className="h-4 w-4" /> Onboard
            </button>
            <button onClick={() => scrollTo('contact')} className="hover:text-gray-900 flex items-center gap-1">
              <MessageSquare className="h-4 w-4" /> Contact
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('discover')}
              className="hidden sm:inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
