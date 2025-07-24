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

  // Array de beneficios para mapear fácilmente
  const benefits = [
    {
      id: 1,
      icon: RiShieldUserLine,
      title: "Atención 100% Segura",
      description: "Solo personal de enfermería certificado y validada",
      gridClass: "col-span-2 flex gap-x-5 bg-secondary-background p-6 rounded-2xl",
      iconClass: "h-28 w-28 text-primary-blue",
      titleClass: "text-primary-text font-lato text-4xl font-bold",
      descClass: "text-xl leading-tight"
    },
    {
      id: 2,
      icon: IoAlarmOutline,
      title: "Flexibilidad Total",
      description: "Sin mínimos de días, tú eliges cuándo y cuánto",
      gridClass: "row-span-2 col-start-3 flex flex-col justify-center gap-y-5 bg-secondary-background p-6 rounded-2xl",
      iconClass: "h-28 w-28 text-primary-blue",
      titleClass: "text-primary-text font-lato text-4xl font-bold text-center",
      descClass: "text-xl leading-tight text-center"
    },
    {
      id: 3,
      icon: RxLightningBolt,
      title: "Atención Inmediata",
      description: "Disponibilidad rápida cuando más lo necesitas",
      gridClass: "row-start-2 flex gap-x-2.5 bg-secondary-background p-3 rounded-2xl",
      iconClass: "h-28 w-28 text-primary-blue",
      titleClass: "text-primary-text font-lato text-4xl font-bold",
      descClass: "leading-tight"
    },
    {
      id: 4,
      icon: MdOutlineAttachMoney,
      title: "Precios Claros",
      description: "Conoce el costo de cada servicio desde el principio, sin cargos ocultos.",
      gridClass: "row-start-2 flex gap-x-2.5 bg-secondary-background p-3 rounded-2xl",
      iconClass: "h-28 w-28 text-primary-blue",
      titleClass: "text-primary-text font-lato text-4xl font-bold",
      descClass: "leading-tight"
    },
    {
      id: 5,
      icon: BiSupport,
      title: "Consulta Directa",
      description: "Seguimiento y soporte personalizado",
      gridClass: "row-start-3 flex gap-x-2.5 bg-secondary-background p-3 rounded-2xl",
      iconClass: "h-28 w-28 text-primary-blue",
      titleClass: "text-primary-text font-lato text-4xl font-bold",
      descClass: "leading-tight"
    },
    {
      id: 6,
      icon: GiClick,
      title: "Solicitud Digital Fácil y Rápida",
      description: "Pide tu enfermera a domicilio en pocos pasos, sin complicaciones.",
      gridClass: "col-span-2 row-start-3 flex gap-x-5 bg-secondary-background p-6 rounded-2xl",
      iconClass: "h-28 w-28 text-primary-blue",
      titleClass: "text-primary-text font-lato text-4xl font-bold",
      descClass: "text-xl leading-tight"
    }
  ];

  return (
    <section className="bg-main-background px-40 py-20 flex flex-col gap-y-10 relative overflow-hidden">
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
        className="flex flex-col w-3/4 mx-auto justify-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 
          className="font-lato text-5xl font-bold text-center text-primary-text"
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

      <motion.div 
        className="grid grid-cols-3 grid-rows-3 gap-2.5 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Tarjeta 1: Atención 100% Segura */}
        <motion.div 
          className={benefits[0].gridClass}
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
            className="bg-[#E6F5FC] rounded-full flex items-center justify-center p-4 h-fit w-fit my-auto relative overflow-hidden"
            variants={iconVariants}
            whileHover={{
              scale: 1.1,
              rotate: 5,
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
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <RiShieldUserLine className={benefits[0].iconClass + " relative z-10"} />
          </motion.div>
          <motion.div 
            className="flex flex-col justify-center gap-y-2.5"
            variants={textVariants}
          >
            <motion.h4 
              className={benefits[0].titleClass}
              whileHover={{
                color: "#285ED1",
                transition: { duration: 0.2 }
              }}
            >
              {benefits[0].title}
            </motion.h4>
            <motion.p 
              className={benefits[0].descClass}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {benefits[0].description}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Tarjeta 2: Flexibilidad Total */}
        <motion.div 
          className={benefits[1].gridClass}
          variants={cardVariants}
          whileHover={{ 
            scale: 1.02,
            y: -8,
            boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div 
            className="bg-[#E6F5FC] rounded-full flex items-center justify-center p-4 w-fit mx-auto relative overflow-hidden"
            variants={iconVariants}
            whileHover={{
              scale: 1.15,
              rotate: -5,
              boxShadow: "0 10px 30px rgba(40, 94, 209, 0.25)"
            }}
          >
            <motion.div
              className="absolute inset-0 bg-primary-blue rounded-full"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0, 0.08, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <IoAlarmOutline className={benefits[1].iconClass + " relative z-10"} />
          </motion.div>
          <motion.div 
            className="flex flex-col items-center gap-y-2.5"
            variants={textVariants}
          >
            <motion.h4 
              className={benefits[1].titleClass}
              whileHover={{
                color: "#285ED1",
                transition: { duration: 0.2 }
              }}
            >
              {benefits[1].title}
            </motion.h4>
            <motion.p 
              className={benefits[1].descClass}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {benefits[1].description}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Tarjetas 3 y 4: Fila del medio */}
        {benefits.slice(2, 4).map((benefit, index) => (
          <motion.div 
            key={benefit.id}
            className={benefit.gridClass}
            variants={cardVariants}
            custom={index}
            whileHover={{ 
              scale: 1.03,
              y: -6,
              boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div 
              className="bg-[#E6F5FC] rounded-full flex items-center justify-center p-4 h-fit w-fit my-auto relative overflow-hidden"
              variants={iconVariants}
              whileHover={{
                scale: 1.1,
                rotate: index % 2 === 0 ? 8 : -8,
                boxShadow: "0 6px 20px rgba(40, 94, 209, 0.15)"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-primary-blue rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.06, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.7
                }}
              />
              <benefit.icon className={benefit.iconClass + " relative z-10"} />
            </motion.div>
            <motion.div 
              className="flex flex-col justify-center gap-y-2.5"
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

        {/* Tarjetas 5 y 6: Fila inferior */}
        {benefits.slice(4).map((benefit, index) => (
          <motion.div 
            key={benefit.id}
            className={benefit.gridClass}
            variants={cardVariants}
            custom={index + 4}
            whileHover={{ 
              scale: benefit.id === 6 ? 1.02 : 1.03,
              y: -5,
              boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="bg-[#E6F5FC] rounded-full flex items-center justify-center p-4 h-fit w-fit my-auto relative overflow-hidden"
              variants={iconVariants}
              whileHover={{
                scale: 1.1,
                rotate: index % 2 === 0 ? -5 : 5,
                boxShadow: "0 8px 25px rgba(40, 94, 209, 0.2)"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-primary-blue rounded-full w-fit h-fit"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0, 0.08, 0]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (index + 2) * 0.4
                }}
              />
              <benefit.icon className={benefit.iconClass + " relative z-10"} />
            </motion.div>
            <motion.div 
              className="flex flex-col justify-center gap-y-2.5"
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
                transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
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