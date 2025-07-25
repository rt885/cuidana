'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../Button';
import Logo from '../Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Para evitar hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Cerrar menú al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Variantes para el menú móvil
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  // Variantes para el botón hamburguesa
  const hamburgerVariants = {
    closed: {
      rotate: 0
    },
    open: {
      rotate: 180,
      transition: {
        duration: 0.3
      }
    }
  };

  const menuItems = [
    { href: '/', label: 'Inicio', isMain: true },
    { href: '/', label: 'Servicios', isMain: false },
    { href: '/', label: 'Quienes Somos', isMain: false },
    { href: '/', label: 'Testimonios', isMain: false },
    { href: '/', label: 'FaQ', isMain: false },
    { href: '/', label: 'Contacto', isMain: false }
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <nav className='flex items-center justify-between px-4 md:px-8 lg:px-16 py-4 lg:py-6 bg-main-background text-white relative z-50'>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Logo />
        </motion.div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex space-x-6'>
          {menuItems.map((item, index) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link 
                href={item.href} 
                className={`transition-colors duration-200 hover:text-primary-blue ${
                  item.isMain 
                    ? "font-semibold text-primary-text" 
                    : "font-medium text-primary-text"
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className='hidden lg:block'>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <Link href="/solicitar-servicio">
              <Button className="relative overflow-hidden">
                {/* Efecto de brillo en hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                  whileHover={{
                    opacity: 0.2,
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    opacity: { duration: 0.3 },
                    x: { duration: 0.6, ease: "easeInOut" }
                  }}
                />
                <span className="relative z-10">Solicitar Servicio</span>
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className='lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none'
          onClick={toggleMenu}
          variants={hamburgerVariants}
          animate={isMenuOpen ? 'open' : 'closed'}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className={`block w-6 h-0.5 bg-primary-text transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <motion.span
            className={`block w-6 h-0.5 bg-primary-text transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <motion.span
            className={`block w-6 h-0.5 bg-primary-text transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </motion.button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-sm bg-main-background shadow-2xl z-50 lg:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col h-full">
                {/* Header del menú móvil */}
                <motion.div 
                  className="flex items-center justify-between p-6 border-b border-gray-200"
                  variants={menuItemVariants}
                >
                  <Logo />
                  <motion.button
                    onClick={closeMenu}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-6 h-6 text-primary-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </motion.div>

                {/* Menu Items */}
                <div className="flex-1 py-6">
                  <nav className="space-y-1">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        variants={menuItemVariants}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className={`block px-6 py-4 text-lg transition-all duration-200 hover:bg-blue-50 hover:text-primary-blue border-l-4 border-transparent hover:border-primary-blue ${
                            item.isMain 
                              ? "font-semibold text-primary-text" 
                              : "font-medium text-gray-700"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* CTA Button en móvil */}
                <motion.div 
                  className="p-6 border-t border-gray-200"
                  variants={menuItemVariants}
                >
                  <Link href="/solicitar-servicio" onClick={closeMenu}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full text-center relative overflow-hidden">
                        {/* Efecto de ondas en móvil */}
                        <motion.div
                          className="absolute inset-0 bg-white rounded-[28px]"
                          initial={{ scale: 0, opacity: 0 }}
                          whileTap={{
                            scale: 2,
                            opacity: 0.2,
                            transition: { duration: 0.4 }
                          }}
                        />
                        <span className="relative z-10">Solicitar Servicio</span>
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Footer del menú móvil */}
                <motion.div 
                  className="p-6 bg-gray-50 text-center"
                  variants={menuItemVariants}
                >
                  <p className="text-sm text-gray-600">
                    ¿Necesitas ayuda?
                  </p>
                  <Link 
                    href="tel:+5281190116802" 
                    className="text-primary-blue font-medium hover:underline"
                    onClick={closeMenu}
                  >
                    +52 81 1901 6802
                  </Link>
                </motion.div>
              </div>

              {/* Elementos decorativos en el menú móvil */}
              <motion.div
                className="absolute top-1/4 right-4 w-2 h-2 bg-primary-blue rounded-full opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute bottom-1/4 right-8 w-1.5 h-1.5 bg-accent-background rounded-full opacity-40"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;