import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Car, Wrench, Info, Newspaper, Phone, CalendarRange } from 'lucide-react';
import Button from '../ui/Button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const leftMenuItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Vehicles', href: '/vehicles', icon: Car },
    { label: 'Services', href: '/services', icon: Wrench },
  ];

  const rightMenuItems = [
    { label: 'About', href: '/about', icon: Info },
    { label: 'News', href: '/news', icon: Newspaper },
    { label: 'Contact', href: '/contact', icon: Phone },
  ];

  const allMenuItems = [...leftMenuItems, ...rightMenuItems];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left Menu Items (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {leftMenuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-slate-600 hover:text-emerald-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Centered Logo */}
          <Link to="/" className="text-2xl font-bold text-emerald-600 absolute left-1/2 transform -translate-x-1/2 hidden md:block">
            Wilderness Wheels
          </Link>

          {/* Mobile Logo (Left-aligned) */}
          <Link to="/" className="text-2xl font-bold text-emerald-600 md:hidden">
            Wilderness Wheels
          </Link>

          {/* Right Menu Items (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {rightMenuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-slate-600 hover:text-emerald-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button>
              <CalendarRange className="w-4 h-4 mr-2" />
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-slate-900" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-50 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col min-h-screen">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-200">
                <Link 
                  to="/" 
                  className="text-2xl font-bold text-emerald-600"
                  onClick={() => setIsOpen(false)}
                >
                  Wilderness Wheels
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-slate-900" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-grow overflow-y-auto py-8 px-4">
                <div className="flex flex-col space-y-4">
                  {allMenuItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="flex items-center space-x-4 text-lg text-slate-900 hover:text-emerald-600 transition-colors p-4 rounded-lg hover:bg-slate-50"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-6 h-6" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-slate-200">
                <Button className="w-full">
                  <CalendarRange className="w-5 h-5 mr-2" />
                  Book Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;

