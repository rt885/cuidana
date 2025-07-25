'use client';
import { motion } from 'framer-motion';
import { RiShieldUserLine } from "react-icons/ri";
import { IoAlarmOutline } from "react-icons/io5";
import { RxLightningBolt } from "react-icons/rx";
import { MdOutlineAttachMoney } from "react-icons/md";
import { GiClick } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";

const Benefits = () => {
  // Variantes para el contenedor principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  };

  // Variantes para el título
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
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

  // Variantes para las tarjetas del grid
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  // Variantes para los iconos
  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
        delay: 0.3
      }
    }
  };

  // Variantes para el texto
  const textVariants = {
    hidden: { 
      opacity: 0,
      x: -30
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.4
      }
    }
  };

  // Array de beneficios reorganizado para responsive
  const benefits = [
    {
      id: 1,
      icon: RiShieldUserLine,
      title: "Atención 100% Segura",
      description: "Solo personal de enfermería certificado y validada",
      // Clases responsive: mobile -> tablet -> desktop
      gridClass: "col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col sm:flex-row lg:flex-row gap-x-0 sm:gap-x-5 lg:gap-x-5 gap-y-4 sm:gap-y-0 lg:gap-y-0 bg-secondary-background p-4 sm:p-6 lg:p-6 rounded-2xl",
      iconClass: "h-16 w-16 sm:h-20 sm:w-20 lg:h-28 lg:w-28 text-primary-blue",
      titleClass: "text-primary-text font-lato text-xl sm:text-2xl lg:text-4xl font-bold text-center sm:text-left lg:text-left",
      descClass: "text-base sm:text-lg lg:text-xl leading-tight text-center sm:text-left lg:text-left",
      isHighlight: true
    },
    {
      id: 2,
      icon: IoAlarmOutline,
      title: "Flexibilidad Total",
      description: "Sin mínimos de días, tú eliges cuándo y cuánto",
      gridClass: "col-span-1 row-span-1 sm:row-span-1 lg:row-span-2 lg:col-start-3 flex flex-col justify-center gap-y-3 sm:gap-y-4 lg:gap-y-5 bg-secondary-background p-4 sm:p-5 lg:p-6 rounded-2xl",
      iconClass: "h-16 w-16 sm:h-20 sm:w-20 lg:h-28 lg:w-28 text-primary-blue",
      titleClass: "text-primary-text font-lato text-xl sm:text-2xl lg:text-4xl font-bold text-center",
      descClass: "text-base sm:text-lg lg:text-xl leading-tight text-center",
      isVertical: true
    },
   {
      id: 3,
      icon: RxLightningBolt,
      title: "Atención Inmediata",
      description: "Disponibilidad rápida cuando más lo necesitas",
      gridClass: "col-span-1 sm:col-span-1 lg:row-start-2 flex flex-col md:justify-center md:items-center lg:flex-row gap-x-0 sm:gap-x-2.5 md:gap-y-3 lg:gap-x-2.5 gap-y-3 sm:gap-y-0 lg:gap-y-0 bg-secondary-background p-3 sm:p-3 lg:p-3 rounded-2xl",
      iconClass: "h-16 w-16 sm:h-20 sm:w-20 lg:h-28 lg:w-28 text-primary-blue",
      titleClass: "text-primary-text font-lato text-lg sm:text-2xl lg:text-4xl font-bold text-center sm:text-left md:text-center lg:text-left",
      descClass: "leading-tight text-sm sm:text-lg lg:text-base text-center sm:text-left md:text-center lg:text-left"
    },
    {
      id: 4,
      icon: MdOutlineAttachMoney,
      title: "Precios Claros",
      description: "Conoce el costo de cada servicio desde el principio, sin cargos ocultos.",
      gridClass: "col-span-1 sm:col-span-1 lg:row-start-2 flex flex-col sm:flex-row lg:flex-row gap-x-0 sm:gap-x-2.5 lg:gap-x-2.5 gap-y-3 sm:gap-y-0 lg:gap-y-0 bg-secondary-background p-3 sm:p-3 lg:p-3 rounded-2xl",
      iconClass: "h-14 w-14 sm:h-16 sm:w-16 lg:h-28 lg:w-28 text-primary-blue",
      titleClass: "text-primary-text font-lato text-lg sm:text-xl lg:text-4xl font-bold text-center sm:text-left lg:text-left",
      descClass: "leading-tight text-sm sm:text-base lg:text-base text-center sm:text-left lg:text-left"
    },
    {
      id: 5,
      icon: BiSupport,
      title: "Consulta Directa",
      description: "Seguimiento y soporte personalizado",
      gridClass: "col-span-1 sm:col-span-1 lg:row-start-3 flex flex-col sm:flex-row lg:flex-row gap-x-0 sm:gap-x-2.5 lg:gap-x-2.5 gap-y-3 sm:gap-y-0 lg:gap-y-0 bg-secondary-background p-3 sm:p-3 lg:p-3 rounded-2xl",
      iconClass: "h-14 w-14 sm:h-16 sm:w-16 lg:h-28 lg:w-28 text-primary-blue",
      titleClass: "text-primary-text font-lato text-lg sm:text-xl lg:text-4xl font-bold text-center sm:text-left lg:text-left",
      descClass: "leading-tight text-sm sm:text-base lg:text-base text-center sm:text-left lg:text-left"
    },
    {
      id: 6,
      icon: GiClick,
      title: "Solicitud Digital Fácil y Rápida",
      description: "Pide tu enfermera a domicilio en pocos pasos, sin complicaciones.",
      gridClass: "col-span-1 sm:col-span-2 lg:col-span-2 lg:row-start-3 flex flex-col sm:flex-row lg:flex-row gap-x-0 sm:gap-x-5 lg:gap-x-5 gap-y-4 sm:gap-y-0 lg:gap-y-0 bg-secondary-background p-4 sm:p-6 lg:p-6 rounded-2xl",
      iconClass: "h-16 w-16 sm:h-20 sm:w-20 lg:h-28 lg:w-28 text-primary-blue",
      titleClass: "text-primary-text font-lato text-xl sm:text-2xl lg:text-4xl font-bold text-center sm:text-left lg:text-left",
      descClass: "text-base sm:text-lg lg:text-xl leading-tight text-center sm:text-left lg:text-left",
      isHighlight: true
    }
  ];

  return (
    <section className="bg-main-background px-4 sm:px-8 md:px-16 lg:px-40 py-12 sm:py-16 lg:py-20 flex flex-col gap-y-8 lg:gap-y-10 relative overflow-hidden">
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
        className="absolute bottom-32 left-16 w-24 h-24 bg-accent-background opacity-5 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.4, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute top-1/2 left-10 w-40 h-40 border border-primary-blue opacity-4 rounded-full"
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

      {/* Partículas flotantes */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-primary-blue opacity-15 rounded-full"
          style={{
            top: `${20 + index * 15}%`,
            right: `${10 + index * 18}%`
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.15, 0.4, 0.15],
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
        className="flex flex-col w-full lg:w-3/4 mx-auto justify-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 
          className="font-lato text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-primary-text leading-tight"
          variants={titleVariants}
          whileHover={{
            scale: 1.02,
            textShadow: "0 0 20px rgba(2, 53, 121, 0.3)",
            transition: { duration: 0.3 }
          }}
        >
          Beneficios exclusivos para tu tranquilidad y bienestar en casa
        </motion.h2>
      </motion.div>

      {/* Grid responsivo */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-3 sm:gap-4 lg:gap-2.5 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {benefits.map((benefit, index) => (
          <motion.div 
            key={benefit.id}
            className={benefit.gridClass}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className={`bg-[#E6F5FC] rounded-full flex items-center justify-center p-3 sm:p-4 lg:p-4 h-fit w-fit ${
                benefit.isVertical || benefit.isHighlight ? 'mx-auto sm:mx-auto lg:mx-auto' : 'mx-auto sm:mx-0 lg:my-auto'
              } relative overflow-hidden`}
              variants={iconVariants}
              whileHover={{
                scale: 1.1,
                rotate: index % 2 === 0 ? 5 : -5,
                boxShadow: "0 8px 25px rgba(40, 94, 209, 0.2)"
              }}
            >
              {/* Efecto de pulso en el icono */}
              <motion.div
                className="absolute inset-0 bg-primary-blue rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0, 0.1, 0]
                }}
                transition={{
                  duration: 2 + index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              />
              <benefit.icon className={benefit.iconClass + " relative z-10"} />
            </motion.div>
            
            <motion.div 
              className={`flex flex-col justify-center gap-y-2 sm:gap-y-2.5 lg:gap-y-2.5 ${
                benefit.isVertical ? 'items-center' : ''
              }`}
              variants={textVariants}
            >
              <motion.h4 
                className={benefit.titleClass}
                whileHover={{
                  color: "#285ED1",
                  transition: { duration: 0.2 }
                }}
              >
                {benefit.title}
              </motion.h4>
              <motion.p 
                className={benefit.descClass}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
              >
                {benefit.description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Efecto de brillo global */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-blue to-transparent opacity-2 pointer-events-none"
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 8
        }}
      />
    </section>
  );
};

export default Benefits;