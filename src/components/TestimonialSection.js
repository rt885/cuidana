// src/components/TestimonialSection.js
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      location: "Monterrey, N.L.",
      rating: 5,
      comment:
        "Excelente servicio. La enfermera llegó puntual y fue muy profesional. Mi madre se sintió muy cómoda y bien atendida.",
      avatar: "/images/testimonials/maria.jpg",
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      location: "San Pedro, N.L.",
      rating: 5,
      comment:
        "Necesitaba cuidados post-operatorios y el servicio fue excepcional. Personal altamente capacitado y muy humano.",
      avatar: "/images/testimonials/carlos.jpg",
    },
    {
      id: 3,
      name: "Ana Martínez",
      location: "Santa Catarina, N.L.",
      rating: 5,
      comment:
        "Para el cuidado de mi recién nacido, no pude haber elegido mejor. Profesionales y muy atentas. Súper recomendado.",
      avatar: "/images/testimonials/ana.jpg",
    },
    {
      id: 4,
      name: "Roberto Silva",
      location: "Guadalupe, N.L.",
      rating: 5,
      comment:
        "Mi padre requería administración de medicamentos y seguimiento. El servicio fue impecable y nos dieron mucha tranquilidad.",
      avatar: "/images/testimonials/roberto.jpg",
    },
  ];

  // Variantes de animación para el contenedor principal
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

  // Variantes para el título
  const titleVariants = {
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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Variantes para el slider
  const sliderVariants = {
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
        delay: 0.3,
      },
    },
  };

  // Variantes para los botones de navegación
  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
        delay: 0.6,
      },
    },
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <motion.span
        key={index}
        className={`text-xl ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.8 + index * 0.1,
          ease: "backOut",
        }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.2 },
        }}
      >
        ★
      </motion.span>
    ));
  };

  return (
    <section className="bg-main-background relative overflow-hidden">
      {/* Elementos de fondo animados */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-white opacity-5 rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.05, 0.15, 0.05],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-32 right-16 w-16 h-16 bg-white opacity-8 rounded-full"
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-20 h-20 bg-white opacity-6 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.06, 0.12, 0.06],
          rotate: [360, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Ondas de fondo */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-80 h-80 border border-white rounded-full opacity-4"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.04, 0.01, 0.04],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="bg-accent-background py-16 rounded-b-4xl md:rounded-b-[56px] relative z-10">
        {/* Partículas flotantes dentro del contenedor */}
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1.5 h-1.5 bg-white opacity-20 rounded-full"
            style={{
              top: `${10 + index * 10}%`,
              left: `${5 + index * 11}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 4 + index * 0.3,
              repeat: Infinity,
              delay: index * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}

        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-lato font-bold text-center mb-12 text-white-text"
            variants={titleVariants}
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 30px rgba(255,255,255,0.3)",
              transition: { duration: 0.3 },
            }}
          >
            Lo que opinan nuestros usuarios
          </motion.h2>

          <motion.div variants={sliderVariants}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              loop={true}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={testimonial.id}>
                  <motion.div
                    className="bg-secondary-background rounded-2xl p-6 shadow-lg h-full relative overflow-hidden"
                    initial={{ opacity: 0, y: 50, rotateX: -10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    {/* Efecto de brillo en hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-0"
                      whileHover={{
                        opacity: 0.3,
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        opacity: { duration: 0.3 },
                        x: { duration: 0.6, ease: "easeInOut" },
                      }}
                    />

                    {/* Header con avatar y info */}
                    <motion.div
                      className="flex items-center mb-4 relative z-10"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <motion.div
                        className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-lg"
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          boxShadow: "0 5px 15px rgba(40, 94, 209, 0.4)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {testimonial.name.charAt(0)}
                      </motion.div>
                      <div className="ml-4">
                        <motion.h4
                          className="font-semibold text-primary-text"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.4 + index * 0.1,
                          }}
                        >
                          {testimonial.name}
                        </motion.h4>
                        <motion.p
                          className="text-sm text-gray-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.5 + index * 0.1,
                          }}
                        >
                          {testimonial.location}
                        </motion.p>
                      </div>
                    </motion.div>

                    {/* Rating */}
                    <motion.div
                      className="flex mb-4 relative z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      {renderStars(testimonial.rating)}
                    </motion.div>

                    {/* Comment */}
                    <motion.blockquote
                      className="text-gray-700 italic relative z-10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    >
                      {testimonial.comment}
                    </motion.blockquote>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Custom Navigation Buttons */}
          <motion.div
            className="flex justify-center items-center mt-8 space-x-4"
            variants={buttonVariants}
          >
            <motion.button
              className="swiper-button-prev-custom bg-secondary-background hover:bg-gray-300 text-primary-blue p-3 rounded-full shadow-lg transition-colors relative overflow-hidden"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Efecto de ondas en click */}
              <motion.div
                className="absolute inset-0 bg-primary-blue rounded-full"
                initial={{ scale: 0, opacity: 0.3 }}
                whileTap={{
                  scale: 2,
                  opacity: 0,
                  transition: { duration: 0.4 },
                }}
              />
              <svg
                className="w-6 h-6 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <motion.button
              className="swiper-button-next-custom bg-secondary-background hover:bg-gray-300 text-primary-blue p-3 rounded-full shadow-lg transition-colors relative overflow-hidden"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Efecto de ondas en click */}
              <motion.div
                className="absolute inset-0 bg-primary-blue rounded-full"
                initial={{ scale: 0, opacity: 0.3 }}
                whileTap={{
                  scale: 2,
                  opacity: 0,
                  transition: { duration: 0.4 },
                }}
              />
              <svg
                className="w-6 h-6 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Efecto de brillo sutil de fondo */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-3 pointer-events-none"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 5,
          }}
        />
      </div>
    </section>
  );
};

export default TestimonialSlider;
