// src/components/home/StatsBanner.js
'use client';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Componente para animar números
const AnimatedNumber = ({ value, suffix = "", duration = 2 }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const StatsBanner = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  // Variantes para el contenedor
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  // Variantes para cada stat
  const statVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  // Variantes para los números grandes
  const numberVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotateX: -90
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: "backOut",
        delay: 0.5
      }
    }
  };

  // Variantes para el texto descriptivo
  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8
      }
    }
  };

  const stats = [
    {
      number: "24/7",
      text: "Servicio Disponible",
      isAnimated: false, // Para 24/7 no usamos contador
      delay: 0
    },
    {
      number: 50,
      suffix: "+",
      text: "Profesionales de enfermería",
      isAnimated: true,
      delay: 0.3
    },
    {
      number: 100,
      suffix: "+",
      text: "Pacientes Atendidos",
      isAnimated: true,
      delay: 0.6
    }
  ];

  return (
    <motion.section 
      ref={containerRef}
      className="bg-accent-background text-white-text lg:px-[360px] py-6 px-5 md:py-8 md:px-24 lg:py-3 flex justify-between items-center gap-4 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Elementos decorativos de fondo */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-24 h-24 bg-white opacity-5 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {stats.map((stat, index) => (
        <motion.div 
          key={index}
          className="flex flex-col items-center relative"
          variants={statVariants}
          custom={index}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          {/* Efecto de brillo en hover */}
          <motion.div
            className="absolute inset-0 bg-white rounded-lg opacity-0"
            whileHover={{
              opacity: 0.1,
              transition: { duration: 0.2 }
            }}
          />

          {/* Número principal */}
          <motion.p 
            className="font-lato font-bold text-5xl md:text-[64px] relative z-10"
            variants={numberVariants}
            whileHover={{
              textShadow: "0 0 20px rgba(255,255,255,0.5)",
              transition: { duration: 0.2 }
            }}
          >
            {stat.isAnimated ? (
              <AnimatedNumber 
                value={stat.number} 
                suffix={stat.suffix || ""} 
                duration={2}
              />
            ) : (
              stat.number
            )}
          </motion.p>

          {/* Texto descriptivo */}
          <motion.span 
            className="text-sm md:text-base text-center px-2 leading-none"
            variants={textVariants}
          >
            {stat.text}
          </motion.span>

          {/* Línea decorativa debajo */}
          <motion.div
            className="w-12 h-0.5 bg-white mt-2 origin-center"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.5 + (index * 0.2),
              ease: "easeOut"
            }}
          />

          {/* Partículas flotantes */}
          {[...Array(3)].map((_, particleIndex) => (
            <motion.div
              key={particleIndex}
              className="absolute w-1 h-1 bg-white rounded-full opacity-40"
              style={{
                top: `${20 + particleIndex * 15}%`,
                left: `${10 + particleIndex * 20}%`
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2 + particleIndex * 0.5,
                repeat: Infinity,
                delay: 2 + index * 0.3 + particleIndex * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      ))}

      {/* Efecto de ondas de fondo */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white rounded-full opacity-10"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.05, 0.1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white rounded-full opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.03, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
    </motion.section>
  );
};

export default StatsBanner;