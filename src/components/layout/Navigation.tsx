import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Car,
  Wrench,
  Info,
  Newspaper,
  Phone,
} from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (href: React.SetStateAction<string>) => {
    setActiveItem(href);
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Vehicles", href: "/vehicles", icon: Car },
    { label: "Services", href: "/services", icon: Wrench },
    { label: "About", href: "/about", icon: Info },
    { label: "News", href: "/news", icon: Newspaper },
    { label: "Contact", href: "/contact", icon: Phone },
  ];

  // Mobile menu overlay animation variants
  const menuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  // Mobile menu item animation variants
  const menuItemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Mobile menu toggle button animation
  const buttonVariants = {
    initial: { rotate: 0 },
    animate: { rotate: 180 },
  };

  return (
    <nav className="relative w-full">
      {/* Mobile Navigation - Full Screen Overlay */}
      <div className="lg:hidden">
        {/* Mobile Menu Toggle */}
        <motion.button
          onClick={toggleMenu}
          className="fixed top-4 right-4 z-50 p-2 bg-white shadow-md rounded-full"
          variants={buttonVariants}
          initial="initial"
          animate={isMenuOpen ? "animate" : "initial"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-white z-40 flex items-center justify-start p-8"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
            >
              <ul className="space-y-6 text-left w-full">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="text-2xl"
                    variants={menuItemVariants}
                  >
                    <motion.a
                      href={item.href}
                      className={`flex items-center space-x-3 py-2 ${
                        activeItem === item.href
                          ? "text-blue-600 font-semibold"
                          : "hover:text-blue-600 transition-colors"
                      }`}
                      onClick={() => handleItemClick(item.href)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <item.icon size={24} className="block" />
                      <span>{item.label}</span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tablet Navigation - Left Logo, Right Menu */}
      <div className="hidden lg:flex xl:hidden container mx-auto px-4 py-4 items-center">
        <div className="flex-1">
          <motion.a
            href="/"
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Wilderness Wheels
          </motion.a>
        </div>
        <ul className="flex space-x-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <motion.a
                href={item.href}
                className={`
                  ${
                    activeItem === item.href
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-600 transition-colors"
                  }
                `}
                onClick={() => handleItemClick(item.href)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.label}
              </motion.a>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Navigation - Centered Logo with Justified Content */}
      <div className="hidden xl:flex container mx-auto px-4 py-4 items-center justify-center">
        {/* Left Side Menu */}
        <ul className="flex space-x-4">
          {navItems.slice(0, 3).map((item, index) => (
            <li key={index}>
              <motion.a
                href={item.href}
                className={`
                  ${
                    activeItem === item.href
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-600 transition-colors"
                  }
                `}
                onClick={() => handleItemClick(item.href)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.label}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Centered Logo */}
        <div className="flex-shrink-0 mx-8">
          <motion.a
            href="/"
            className="text-3xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Wilderness Wheels
          </motion.a>
        </div>

        {/* Right Side Menu */}
        <ul className="flex space-x-4">
          {navItems.slice(3).map((item, index) => (
            <li key={index}>
              <motion.a
                href={item.href}
                className={`
                  ${
                    activeItem === item.href
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-600 transition-colors"
                  }
                `}
                onClick={() => handleItemClick(item.href)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.label}
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
