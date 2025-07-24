'use client';
import { motion } from 'framer-motion';
import Button from "./Button";

const CloseBanner = () => {
  // Variantes para el contenedor principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  // Variantes para el overlay
  const overlayVariants = {
    hidden: { 
      opacity: 0,
      scale: 1.1
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  // Variantes para el contenido
  const contentVariants = {
    hidden: { 
      opacity: 0,
      y: 80,
      scale: 0.8
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

  // Variantes para el botón
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
        delay: 0.3
      }
    }
  };

  return (
    <motion.section 
      className="bg-[url(/images/close-banner.png)] h-[480px] bg-cover bg-center flex items-center justify-center relative rounded-t-[56px] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Elementos decorativos flotantes */}
      <motion.div
        className="absolute top-16 left-16 w-6 h-6 bg-white rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-32 right-20 w-4 h-4 bg-white rounded-full opacity-30"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-5 h-5 bg-white rounded-full opacity-25"
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.4, 1],
          opacity: [0.25, 0.5, 0.25]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Partículas más pequeñas */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-white rounded-full opacity-15"
          style={{
            top: `${20 + index * 8}%`,
            left: `${10 + index * 11}%`
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.15, 0.4, 0.15],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3 + index * 0.2,
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Ondas de luz */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-32 h-32 border border-white rounded-full opacity-10"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.1, 0, 0.1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-white rounded-full opacity-15"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.15, 0, 0.15]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
          delay: 1.5
        }}
      />

      {/* Overlay principal animado */}
      <motion.div 
        className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-[56px] relative"
        variants={overlayVariants}
      >
        {/* Efecto de brillo que cruza el banner */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 pointer-events-none"
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 4
          }}
        />

        {/* Elementos de resplandor en las esquinas */}
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-white to-transparent opacity-0"
          animate={{
            opacity: [0, 0.1, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-radial from-white to-transparent opacity-0"
          animate={{
            opacity: [0, 0.08, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Contenido principal */}
        <motion.div 
          className="flex flex-col items-center justify-center h-full text-center lg:w-3/4 xl:w-2/3 relative z-10"
          variants={contentVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-lato font-bold mb-4 text-main-background relative"
            variants={titleVariants}
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 30px rgba(255,255,255,0.8)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Efecto de escritura animada */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.5 }}
            >
              Atención inmediata,
            </motion.span>
            {" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.8 }}
            >
              sin mínimos
            </motion.span>
            {" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.1 }}
            >
              ni complicaciones.
            </motion.span>

            {/* Subrayado animado */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
            />

            {/* Partículas que emanan del texto */}
            {[...Array(4)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${20 + index * 20}%`,
                  left: `${80 + index * 5}%`
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 2 + index * 0.2,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.h2>

          {/* Botón con efectos avanzados */}
          <motion.div
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative"
              whileHover={{
                filter: "drop-shadow(0 10px 30px rgba(255,255,255,0.3))",
                transition: { duration: 0.3 }
              }}
            >
              {/* Efecto de pulso en el botón */}
              <motion.div
                className="absolute inset-0 bg-white rounded-[28px] opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Ondas que emanan del botón */}
              <motion.div
                className="absolute inset-0 border-2 border-white rounded-[28px] opacity-30"
                animate={{
                  scale: [1, 1.3, 1.6],
                  opacity: [0.3, 0.1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />

              <motion.div
                className="absolute inset-0 border-2 border-white rounded-[28px] opacity-20"
                animate={{
                  scale: [1, 1.5, 2],
                  opacity: [0.2, 0.05, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5
                }}
              />

              <Button
                href="/contacto"
                className="font-lato text-2xl relative z-10 overflow-hidden"
              >
                {/* Efecto de brillo interno del botón */}
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
                <span className="relative z-10">Contáctanos</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Elementos decorativos alrededor del contenido */}
          <motion.div
            className="absolute -top-8 -left-8 w-3 h-3 bg-white rounded-full opacity-40"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <motion.div
            className="absolute -bottom-6 -right-6 w-2 h-2 bg-white rounded-full opacity-50"
            animate={{
              rotate: [360, 0],
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        {/* Rayos de luz desde el centro */}
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-px bg-gradient-to-t from-transparent via-white to-transparent opacity-10"
            style={{
              height: '60%',
              top: '20%',
              left: '50%',
              transformOrigin: 'bottom center',
              transform: `rotate(${index * 60}deg)`
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleY: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2
            }}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default CloseBanner;