'use client';
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

const HowItWorks = () => {
  // Variantes para el contenedor principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  // Variantes para la sección izquierda (texto e imagen)
  const leftSectionVariants = {
    hidden: { 
      opacity: 0, 
      x: -60
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Variantes para la sección derecha (pasos)
  const rightSectionVariants = {
    hidden: { 
      opacity: 0, 
      x: 60
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  // Variantes para cada paso
  const stepVariants = {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Variantes para los números
  const numberVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: "backOut"
      }
    }
  };

  // Variantes para el texto del título
  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2
      }
    }
  };

  // Variantes para la descripción
  const descriptionVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  };

  // Variantes para la imagen
  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  // Array de pasos para mapear fácilmente
  const steps = [
    {
      number: "01",
      title: "Solicita en Línea",
      description: "Completa nuestro formulario digital o contáctanos por WhatsApp en minutos, sin complicaciones."
    },
    {
      number: "02", 
      title: "Elige los Servicios que Necesitas",
      description: "Selecciona el tipo de atención y horario que mejor se adapte a ti o a tu familiar."
    },
    {
      number: "03",
      title: "Validación y Asignación de Personal Certificado",
      description: "Validamos tu solicitud y asignamos una enfermera profesional, verificada y con experiencia."
    }
  ];

  return (
    <section className="bg-secondary-background relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <motion.div
        className="absolute top-20 left-16 w-28 h-28 bg-primary-blue opacity-4 rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.04, 0.12, 0.04],
          rotate: [0, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-32 right-20 w-20 h-20 bg-accent-background opacity-6 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/4 w-36 h-36 border border-primary-blue opacity-3 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.03, 0.01, 0.03],
          rotate: [0, -360]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Líneas conectoras animadas */}
      <motion.div
        className="absolute top-1/4 left-1/2 w-px h-32 bg-gradient-to-b from-primary-blue to-transparent opacity-20"
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.5 }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-24 h-px bg-gradient-to-r from-primary-blue to-transparent opacity-20"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
      />

      <div className="bg-main-background px-40 py-20 grid lg:grid-cols-2 gap-x-20 rounded-b-[56px] relative z-10">
        <motion.div 
          className="flex flex-col gap-y-10 my-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={leftSectionVariants}
        >
          <motion.div 
            className="flex flex-col gap-y-2.5"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-primary-text font-lato text-4xl font-bold"
              variants={titleVariants}
              whileHover={{
                scale: 1.02,
                color: "#285ED1",
                textShadow: "0 0 20px rgba(40, 94, 209, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              ¿Cómo Funciona? Atención de Enfermería en Casa en 3 Pasos Sencillos
            </motion.h2>
            <motion.p 
              className="leading-tight"
              variants={descriptionVariants}
            >
              Descubre lo sencillo que es recibir atención profesional y
              personalizada en casa. Nuestro proceso digital, seguro y
              transparente te acompaña desde la solicitud hasta el seguimiento,
              garantizando tranquilidad en cada etapa.
            </motion.p>
          </motion.div>

          <motion.div 
            className="relative"
            variants={imageVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            {/* Efecto de brillo en la imagen */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 rounded-2xl"
              whileHover={{
                opacity: 0.2,
                x: ['-100%', '100%']
              }}
              transition={{
                opacity: { duration: 0.3 },
                x: { duration: 0.8, ease: "easeInOut" }
              }}
            />
            
            {/* Sombra animada */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              whileHover={{
                boxShadow: "0 20px 60px rgba(40, 94, 209, 0.15)",
                transition: { duration: 0.3 }
              }}
            />

            <Image
              src="/images/Home/como-funciona.png"
              alt="Cómo funciona Cuidana"
              width={500}
              height={300}
              className="rounded-2xl w-full relative z-10"
            />

            {/* Elementos decorativos alrededor de la imagen */}
            <motion.div
              className="absolute -top-3 -right-3 w-6 h-6 bg-primary-blue rounded-full opacity-60"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent-background rounded-full opacity-40"
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

        <motion.div 
          className="flex flex-col gap-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={rightSectionVariants}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              className="flex flex-col gap-y-3 py-2.5 relative"
              variants={stepVariants}
              whileHover={{
                scale: 1.02,
                x: 5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Línea conectora entre pasos */}
              {index < steps.length - 1 && (
                <motion.div
                  className="absolute left-6 top-20 w-px h-16 bg-gradient-to-b from-primary-blue to-transparent opacity-30"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + (index * 0.2) 
                  }}
                />
              )}

              <motion.div 
                className="h-fit w-fit bg-secondary-background rounded-full flex items-center justify-center relative overflow-hidden"
                variants={numberVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 8px 25px rgba(40, 94, 209, 0.2)"
                }}
              >
                {/* Efecto de pulso en el número */}
                <motion.div
                  className="absolute inset-0 bg-primary-blue rounded-full"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0, 0.1, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />

                <motion.p 
                  className="font-lato text-primary-blue text-4xl p-2.5 font-bold relative z-10"
                  whileHover={{
                    color: "#023579",
                    transition: { duration: 0.2 }
                  }}
                >
                  {step.number}
                </motion.p>
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + (index * 0.2) 
                }}
              >
                <motion.h4 
                  className="font-lato font-bold text-primary-text text-2xl"
                  whileHover={{
                    color: "#285ED1",
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {step.title}
                </motion.h4>
                <motion.p 
                  className="leading-tight"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + (index * 0.2) 
                  }}
                >
                  {step.description}
                </motion.p>
              </motion.div>

              {/* Elementos decorativos para cada paso */}
              <motion.div
                className="absolute -right-4 top-1/2 w-2 h-2 bg-primary-blue rounded-full opacity-30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.8
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Efecto de brillo global */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-blue to-transparent opacity-2 pointer-events-none"
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 10
        }}
      />
    </section>
  );
};

export default HowItWorks;