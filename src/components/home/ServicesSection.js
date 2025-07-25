"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { servicesData } from "../../../data/serviceCards/serviceCards";
import ServiceCard from "../ServiceCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
    <section className="bg-accent-background overflow-hidden">
      <motion.div
        className="py-10 px-5 md:py-16 md:px-8 lg:px-40 lg:py-20 bg-secondary-background rounded-b-4xl md:rounded-b-[56px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="flex flex-col gap-y-5 md:gap-y-10">
          {/* Header animado */}
          <motion.div
            className="md:w-3/4 mx-auto flex flex-col gap-y-2.5"
            variants={headerVariants}
          >
            <motion.h2
              className="text-4xl lg:text-5xl text-center leading-none font-bold text-primary-text font-lato"
              variants={headerVariants}
            >
              Nuestros Servicios de Enfermería a Domicilio
            </motion.h2>
            <motion.p className="text-center" variants={headerVariants}>
              Atención integral y personalizada para tu bienestar en casa.
            </motion.p>
          </motion.div>

          {/* Mobile: Slider animado */}
          <motion.div className="block lg:hidden" variants={sliderVariants}>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                480: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  centeredSlides: false,
                },
              }}
              className="services-mobile-swiper"
            >
              {servicesData.map((service, index) => (
                <SwiperSlide key={service.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 },
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
          </motion.div>

          {/* Desktop: Grid Layout animado */}
          <motion.div
            className="hidden lg:grid grid-cols-4 gap-x-5 gap-y-5"
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
    </section>
  );
};

export default ServicesSlider;
