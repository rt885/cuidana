'use client';
import { motion } from 'framer-motion';
import Link from "next/link";
import Logo from "../Logo";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  // Variantes para el contenedor principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  // Variantes para las secciones
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Variantes para los enlaces
  const linkVariants = {
    hidden: { 
      opacity: 0, 
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const menuItems = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/nosotros", label: "Quiénes Somos" },
    { href: "/testimonios", label: "Testimonios" },
    { href: "/faq", label: "FAQ" },
    { href: "/contacto", label: "Contacto" }
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      href: "mailto:ruben@lumertic.com",
      text: "ruben@lumertic.com",
      label: "Email"
    },
    {
      icon: FaPhone,
      href: "tel:+5281190116802",
      text: "+52 81 1901 6802",
      label: "Teléfono"
    },
    {
      icon: FaMapMarkerAlt,
      href: "#",
      text: "Monterrey, Nuevo León",
      label: "Ubicación"
    }
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-main-background relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <motion.div
        className="absolute top-10 right-16 w-24 h-24 bg-primary-blue opacity-5 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
          rotate: [0, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 bg-accent-background opacity-3 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Partículas flotantes */}
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1.5 h-1.5 bg-primary-blue opacity-20 rounded-full"
          style={{
            top: `${20 + index * 20}%`,
            right: `${15 + index * 15}%`
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4 + index * 0.5,
            repeat: Infinity,
            delay: index * 0.8,
            ease: "easeInOut"
          }}
        />
      ))}

      <motion.div
        className="px-4 sm:px-8 lg:px-28 py-12 lg:py-16 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
          
          {/* Logo y descripción */}
          <motion.div 
            className="col-span-1 md:col-span-2 lg:col-span-1 space-y-4"
            variants={sectionVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Logo width={60} height={60} />
            </motion.div>
            
            <motion.p 
              className="text-gray-600 text-sm leading-relaxed max-w-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Cuidado de enfermería profesional en la comodidad de tu hogar. 
              Bienestar para pacientes, tranquilidad para familias.
            </motion.p>

            {/* Redes sociales */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-secondary-background rounded-full flex items-center justify-center text-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-300 group"
                  whileHover={{ 
                    scale: 1.1,
                    y: -2,
                    boxShadow: "0 8px 25px rgba(40, 94, 209, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.7 + (index * 0.1), 
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Menú de navegación */}
          <motion.div 
            className="space-y-4"
            variants={sectionVariants}
          >
            <motion.h3 
              className="text-primary-text font-semibold text-lg font-lato"
              whileHover={{
                color: "#285ED1",
                transition: { duration: 0.2 }
              }}
            >
              Navegación
            </motion.h3>
            
            <motion.ul className="space-y-3">
              {menuItems.map((item, index) => (
                <motion.li 
                  key={item.label}
                  variants={linkVariants}
                  custom={index}
                >
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary-blue transition-all duration-200 text-sm group flex items-center"
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-primary-blue mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"
                    />
                    <motion.span
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Información de contacto */}
          <motion.div 
            className="space-y-4"
            variants={sectionVariants}
          >
            <motion.h3 
              className="text-primary-text font-semibold text-lg font-lato"
              whileHover={{
                color: "#285ED1",
                transition: { duration: 0.2 }
              }}
            >
              Contacto
            </motion.h3>
            
            <motion.ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.li 
                  key={contact.label}
                  variants={linkVariants}
                  custom={index}
                >
                  <Link
                    href={contact.href}
                    className="text-gray-600 hover:text-primary-blue transition-all duration-200 text-sm group flex items-center space-x-3"
                  >
                    <motion.div
                      className="w-8 h-8 bg-secondary-background rounded-lg flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all duration-300"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                    >
                      <contact.icon className="w-4 h-4" />
                    </motion.div>
                    <motion.span
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {contact.text}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            className="space-y-4"
            variants={sectionVariants}
          >
            <motion.h3 
              className="text-primary-text font-semibold text-lg font-lato"
              whileHover={{
                color: "#285ED1",
                transition: { duration: 0.2 }
              }}
            >
              Mantente informado
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Recibe las últimas novedades sobre nuestros servicios de enfermería.
            </motion.p>

            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent text-sm transition-all duration-200"
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 0 3px rgba(40, 94, 209, 0.1)"
                }}
              />
              <motion.button
                className="w-full bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 text-sm font-medium relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 4px 15px rgba(40, 94, 209, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Efecto de brillo */}
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
                <span className="relative z-10">Suscribirse</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Línea divisora animada */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        {/* Footer bottom */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.p 
            className="text-xs text-gray-500 text-center sm:text-left"
            whileHover={{
              color: "#285ED1",
              transition: { duration: 0.2 }
            }}
          >
            © 2025 Cuidana. Todos los derechos reservados.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href="https://lumertic.com/es/" 
                className="text-xs text-gray-500 hover:text-primary-blue transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Desarrollado por <span className="font-medium">Lumertic</span>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href="/privacy-policy" 
                className="text-xs text-gray-500 hover:text-primary-blue transition-colors duration-200"
              >
                Política de privacidad
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Efecto de brillo global */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-blue to-transparent opacity-1 pointer-events-none"
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 15
        }}
      />
    </footer>
  );
};

export default Footer