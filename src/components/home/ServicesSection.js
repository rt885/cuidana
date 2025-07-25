"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import { servicesData } from "../../../data/serviceCards/serviceCards";
import ServiceCard from "../ServiceCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const ServicesSlider = () => {
  // Variantes de animación para el contenedor
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  // Variantes para los elementos del header
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Variantes para las tarjetas en desktop
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Variantes para el slider móvil
  const sliderVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-accent-background overflow-hidden relative">
      {/* Elementos decorativos de fondo */}
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 bg-white opacity-5 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
          rotate: [0, 360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-16 left-16 w-16 h-16 bg-white opacity-8 rounded-full"
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          scale: [1, 1.4, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="py-10 px-5 md:py-16 md:px-8 lg:px-40 lg:py-20 bg-secondary-background rounded-b-4xl md:rounded-b-[56px] relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="flex flex-col gap-y-8 md:gap-y-10">
          {/* Header animado */}
          <motion.div
            className="md:w-3/4 mx-auto flex flex-col gap-y-2.5"
            variants={headerVariants}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl text-center leading-tight font-bold text-primary-text font-lato"
              variants={headerVariants}
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 20px rgba(2, 53, 121, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              Nuestros Servicios de Enfermería a Domicilio
            </motion.h2>
            <motion.p 
              className="text-center text-gray-600 text-lg" 
              variants={headerVariants}
            >
              Atención integral y personalizada para tu bienestar en casa.
            </motion.p>
          </motion.div>

          {/* Mobile y Tablet: Slider personalizado */}
          <motion.div className="block lg:hidden" variants={sliderVariants}>
            <div className="relative">
              {/* Gradientes en los bordes para efecto de desvanecimiento */}
              <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-secondary-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-secondary-background to-transparent z-10 pointer-events-none" />
              
              <Swiper
                modules={[Autoplay, Pagination, EffectCoverflow]}
                spaceBetween={16}
                slidesPerView={1.1}
                centeredSlides={true}
                loop={true}
                grabCursor={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                  dynamicMainBullets: 3,
                }}
                effect="coverflow"
                coverflowEffect={{
                  rotate: 15,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                breakpoints={{
                  480: {
                    slidesPerView: 1.3,
                    spaceBetween: 20,
                    effect: "slide",
                  },
                  640: {
                    slidesPerView: 1.8,
                    spaceBetween: 24,
                    centeredSlides: false,
                    effect: "slide",
                  },
                  768: {
                    slidesPerView: 2.2,
                    spaceBetween: 24,
                    centeredSlides: false,
                    effect: "slide",
                  },
                }}
                className="services-custom-swiper !pb-16"
                style={{
                  '--swiper-pagination-color': '#285ED1',
                  '--swiper-pagination-bullet-inactive-color': '#CBD5E0',
                  '--swiper-pagination-bullet-inactive-opacity': '0.4',
                  '--swiper-pagination-bullet-size': '12px',
                  '--swiper-pagination-bullet-horizontal-gap': '6px',
                }}
              >
                {servicesData.map((service, index) => (
                  <SwiperSlide key={service.id} className="!h-auto">
                    <motion.div
                      className="h-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      <ServiceCard
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                      />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Indicadores de navegación personalizados */}
              <motion.div
                className="flex justify-center mt-6 space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.div
                  className="text-center text-sm text-gray-500"
                  whileHover={{
                    color: "#285ED1",
                    transition: { duration: 0.2 }
                  }}
                >
                  Desliza para ver más servicios
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Desktop: Grid Layout animado */}
          <motion.div
            className="hidden lg:grid grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                whileTap={{
                  scale: 0.98,
                }}
                custom={index}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Efecto de brillo global */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-2 pointer-events-none"
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 8
        }}
      />
    </section>
  );
};

export default ServicesSlider;