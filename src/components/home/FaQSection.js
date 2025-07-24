// src/components/home/FaQSection.js
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { faQ } from "../../../data/faQ/faQ";
import FaQCard from "../FaQCard";

const FaQSection = () => {
  // Estado para controlar cuál FAQ está abierto (solo uno a la vez)
  const [openFAQ, setOpenFAQ] = useState(null);

  // Función para manejar el clic en una FAQ
  const handleFAQClick = (faqId) => {
    // Si el FAQ clickeado ya está abierto, lo cerramos. Si no, abrimos el nuevo
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

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

  // Variantes para el contenedor interno
  const innerContainerVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Variantes para el título
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  // Variantes para la lista de FAQs
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="bg-main-background px-40 py-20 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <motion.div
        className="absolute top-16 right-20 w-32 h-32 bg-primary-blue opacity-3 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.03, 0.08, 0.03],
          rotate: [0, 360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-24 left-16 w-24 h-24 bg-accent-background opacity-5 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.4, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute top-1/3 left-1/4 w-40 h-40 border border-primary-blue opacity-4 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.04, 0.01, 0.04],
          rotate: [0, -360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Ondas de preguntas - efecto visual */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-2 h-2 bg-primary-blue rounded-full opacity-20"
        animate={{
          scale: [1, 3, 1],
          opacity: [0.2, 0, 0.2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-accent-background rounded-full opacity-25"
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.25, 0, 0.25]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeOut",
          delay: 1
        }}
      />

      {/* Partículas flotantes */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1.5 h-1.5 bg-primary-blue opacity-15 rounded-full"
          style={{
            top: `${20 + index * 10}%`,
            right: `${10 + index * 12}%`
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.15, 0.4, 0.15],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4 + index * 0.3,
            repeat: Infinity,
            delay: index * 0.6,
            ease: "easeInOut"
          }}
        />
      ))}

      <motion.div 
        className="w-full mx-auto px-48 bg-secondary-background rounded-[56px] py-12 shadow-lg relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Efecto de brillo en el contenedor */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-0 rounded-[56px] pointer-events-none"
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.2, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 6
          }}
        />

        {/* Elementos decorativos internos */}
        <motion.div
          className="absolute top-6 right-8 w-3 h-3 bg-primary-blue rounded-full opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-6 left-8 w-2 h-2 bg-accent-background rounded-full opacity-25"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.25, 0.5, 0.25]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />

        <motion.div 
          className="relative z-20"
          variants={innerContainerVariants}
        >
          <motion.h2 
            className="text-5xl font-bold text-primary-text font-lato mb-8 text-center"
            variants={titleVariants}
            whileHover={{
              scale: 1.02,
              color: "#285ED1",
              textShadow: "0 0 20px rgba(40, 94, 209, 0.3)",
              transition: { duration: 0.3 }
            }}
          >
            Preguntas Frecuentes
          </motion.h2>

          <motion.ul 
            className="space-y-4"
            variants={listVariants}
          >
            {faQ.map((FaQMap, index) => (
              <motion.div
                key={FaQMap.id}
                custom={index}
                whileHover={{
                  y: -2,
                  transition: { duration: 0.2 }
                }}
              >
                <FaQCard
                  id={FaQMap.id}
                  question={FaQMap.question}
                  answer={FaQMap.answer}
                  isOpen={openFAQ === FaQMap.id}
                  onClick={() => handleFAQClick(FaQMap.id)}
                />
              </motion.div>
            ))}
          </motion.ul>

          {/* Estadística interactiva */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.p 
              className="text-sm text-gray-600"
              whileHover={{
                color: "#285ED1",
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              ¿No encuentras lo que buscas? 
              <motion.span 
                className="text-primary-blue font-medium ml-1 cursor-pointer"
                whileHover={{
                  textDecoration: "underline",
                  transition: { duration: 0.2 }
                }}
              >
                Contáctanos directamente
              </motion.span>
            </motion.p>

            {/* Contador de FAQs */}
            <motion.div
              className="mt-4 flex items-center justify-center space-x-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.div
                className="bg-primary-blue text-white px-3 py-1 rounded-full text-sm font-medium"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {faQ.length} preguntas respondidas
              </motion.div>

              <motion.div
                className="bg-accent-background text-white px-3 py-1 rounded-full text-sm font-medium"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                {openFAQ ? "1 activa" : "Todas cerradas"}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Líneas decorativas conectoras */}
        <motion.div
          className="absolute left-20 top-1/4 w-px h-20 bg-gradient-to-b from-primary-blue to-transparent opacity-20"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
        />

        <motion.div
          className="absolute right-20 bottom-1/4 w-px h-16 bg-gradient-to-t from-accent-background to-transparent opacity-25"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2 }}
        />
      </motion.div>

      {/* Efecto de brillo global */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-blue to-transparent opacity-2 pointer-events-none"
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 12
        }}
      />
    </div>
  );
};

export default FaQSection;