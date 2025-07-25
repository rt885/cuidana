// src/components/FaQCard.js
"use client";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const FaQCard = ({ id, question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  // Variantes para la tarjeta completa
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Variantes para el icono
  const iconVariants = {
    closed: { 
      rotate: 0,
      scale: 1
    },
    open: { 
      rotate: 180,
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Variantes para el contenido
  const contentVariants = {
    closed: {
      opacity: 0,
      y: -10
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.1,
        ease: "easeOut"
      }
    }
  };

  // Variantes para el texto de la pregunta
  const questionVariants = {
    closed: {
      color: "#023579" // primary-text
    },
    open: {
      color: "#285ED1", // primary-blue
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.li
      className={`bg-secondary-background rounded-lg shadow-md border-2 overflow-hidden relative ${
        isOpen ? "border-primary-blue" : "border-gray-200"
      }`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.01,
        boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
        borderColor: isOpen ? "#285ED1" : "#CBD5E0",
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.99 }}
      layout
    >
      {/* Efecto de brillo en hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-0 pointer-events-none"
        whileHover={{
          opacity: 0.3,
          x: ['-100%', '100%']
        }}
        transition={{
          opacity: { duration: 0.3 },
          x: { duration: 0.8, ease: "easeInOut" }
        }}
      />

      {/* Indicador lateral animado */}
      <motion.div
        className="absolute left-0 top-0 w-1 bg-primary-blue h-full"
        initial={{ scaleY: 0 }}
        animate={{ 
          scaleY: isOpen ? 1 : 0,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        style={{ originY: 0 }}
      />

      {/* Botón de la pregunta responsive */}
      <motion.button
        onClick={onClick}
        className={`w-full px-4 sm:px-6 py-4 sm:py-5 text-left focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-opacity-50 relative z-10 ${
          isOpen ? "bg-blue-50" : ""
        }`}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        whileHover={{ backgroundColor: isOpen ? "#dbeafe" : "#f9fafb" }}
        whileFocus={{
          backgroundColor: "#dbeafe",
          transition: { duration: 0.2 }
        }}
      >
        <div className="flex items-start sm:items-center justify-between gap-3 sm:gap-4">
          <motion.h3
            className="text-lg sm:text-xl font-semibold font-lato leading-tight flex-1"
            variants={questionVariants}
            animate={isOpen ? "open" : "closed"}
            whileHover={{
              x: 5,
              transition: { duration: 0.2 }
            }}
          >
            {question}
          </motion.h3>
          
          <motion.div 
            className="flex-shrink-0 relative mt-1 sm:mt-0"
            variants={iconVariants}
            animate={isOpen ? "open" : "closed"}
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
          >
            {/* Efecto de pulso detrás del icono */}
            <motion.div
              className="absolute inset-0 bg-primary-blue rounded-full"
              animate={{
                scale: isOpen ? [1, 1.3, 1] : [1, 1.1, 1],
                opacity: [0, 0.1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="minus"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaMinusCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-blue relative z-10" />
                </motion.div>
              ) : (
                <motion.div
                  key="plus"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaPlusCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-blue relative z-10" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Partículas decorativas responsive */}
        {isOpen && [...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-primary-blue rounded-full opacity-40"
            style={{
              top: `${30 + index * 20}%`,
              right: `${15 + index * 10}%`
            }}
            animate={{
              y: [0, -8, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.button>

      {/* Contenido de la respuesta responsive */}
      <motion.div
        ref={contentRef}
        id={`faq-answer-${id}`}
        className="overflow-hidden"
        initial={false}
        animate={{
          height: height,
          transition: {
            duration: 0.4,
            ease: [0.4, 0.0, 0.2, 1]
          }
        }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="px-4 sm:px-6 pb-4 sm:pb-5"
              variants={contentVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div 
                className="border-t border-gray-200 pt-3 sm:pt-4 relative"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                style={{ originX: 0 }}
              >
                <motion.p 
                  className="text-gray-700 leading-relaxed relative z-10 text-sm sm:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  whileHover={{
                    x: 3,
                    transition: { duration: 0.2 }
                  }}
                >
                  {answer}
                </motion.p>

                {/* Elementos decorativos en el contenido responsive */}
                <motion.div
                  className="absolute -left-1 sm:-left-2 top-1 sm:top-2 w-1 sm:w-2 h-1 sm:h-2 bg-primary-blue rounded-full opacity-30"
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
                  className="absolute -right-0.5 sm:-right-1 bottom-1 sm:bottom-2 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-accent-background rounded-full opacity-40"
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Línea de progreso en la parte inferior */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-primary-blue"
        initial={{ width: 0 }}
        animate={{ 
          width: isOpen ? "100%" : "0%",
          transition: { duration: 0.4, ease: "easeOut" }
        }}
      />
    </motion.li>
  );
};

export default FaQCard;