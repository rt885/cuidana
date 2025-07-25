// src/components/home/Hero.js (Con Framer Motion)
'use client';
import Image from "next/image";
import Button from "../Button";
import { motion } from "framer-motion";

const Hero = () => {
  // Variantes de animación para el contenedor
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

  // Variantes para elementos que vienen desde la izquierda
  const slideInLeft = {
    hidden: { 
      opacity: 0, 
      x: -60,
      y: 20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  // Variantes para elementos que vienen desde la derecha
  const slideInRight = {
    hidden: { 
      opacity: 0, 
      x: 60,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  // Variantes para el botón con efecto de "bounce"
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
        delay: 0.8
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  // Animación del texto que se escribe
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3
      }
    }
  };

  return (
    <motion.main 
      className="flex flex-col lg:grid lg:grid-cols-2 lg:px-[120px] pt-6 px-5 md:pt-8 md:px-8 lg:pt-20 gap-y-10 lg:gap-x-8 overflow-hidden bg-main-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Contenido de texto */}
      <motion.div 
        className="flex flex-col gap-4"
        variants={slideInLeft}
      >
        <div className="flex flex-col gap-2.5">
          <motion.h1 
            className="text-primary-text leading-none text-4xl md:text-5xl font-lato font-bold"
            variants={titleVariants}
          >
            Cuidado de Enfermería en Casa: Bienestar para Pacientes,
            Tranquilidad para Familias
          </motion.h1>
          
          <motion.p
            variants={slideInLeft}
            transition={{ delay: 0.5 }}
          >
            Recibe atención médica experta y personalizada en la comodidad de tu
            hogar. Nuestros enfermeros certificados cuidan cada detalle de la
            salud y el día a día del paciente, mientras brindan apoyo y alivio a
            la familia. Disfruta de más calidad de vida, seguridad y
            acompañamiento profesional, sin listas de espera ni traslados.
          </motion.p>
        </div>
        
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Button>Solicita tu cuidado personalizado aquí</Button>
        </motion.div>
      </motion.div>

      {/* Imagen con efecto parallax y hover */}
      <motion.div 
        className="relative h-fit lg:h-auto"
        variants={slideInRight}
      >
        {/* Elemento decorativo de fondo */}
        <motion.div
          className="absolute -top-4 -right-4 w-full h-full bg-primary-blue opacity-10 rounded-2xl"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: -5 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
        
        {/* Imagen principal */}
        <motion.div
          whileHover={{ 
            scale: 1.02,
            rotate: 1,
            transition: { duration: 0.3 }
          }}
          className="relative z-10"
        >
          <Image
            src="/images/Home/enfermera-hero.webp"
            alt="Imagen de enfermera cuidando a un paciente"
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Elementos flotantes decorativos */}
        <motion.div
          className="absolute top-10 right-10 w-4 h-4 bg-primary-blue rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 2
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-10 w-3 h-3 bg-accent-background rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: 2.5
          }}
        />
      </motion.div>
    </motion.main>
  );
};

export default Hero;