"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button";

const InitialForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const router = useRouter();

  // Variantes para el contenedor principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  // Variantes para el formulario
  const formVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
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

  // Variantes para el header
  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Variantes para los campos del formulario
  const fieldVariants = {
    hidden: { 
      opacity: 0, 
      x: -30
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Variantes para los errores
  const errorVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "backOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  // Variantes para el botón
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Por favor ingresa un correo electrónico válido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      // Simular un pequeño delay para mostrar la animación de carga
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Guardar datos en localStorage para usar en el formulario multi-step
      localStorage.setItem("cuidana_form_data", JSON.stringify(formData));

      // Redirigir al formulario multi-step
      router.push("/solicitar-servicio");
    }
    
    setIsSubmitting(false);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <motion.div
        className="absolute top-20 left-16 w-32 h-32 bg-primary-blue opacity-4 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.04, 0.1, 0.04],
          rotate: [0, 360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-16 right-20 w-24 h-24 bg-accent-background opacity-6 rounded-full"
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
        className="absolute top-1/3 right-1/4 w-40 h-40 border border-primary-blue opacity-3 rounded-full"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.03, 0.01, 0.03],
          rotate: [0, -360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Partículas flotantes */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1.5 h-1.5 bg-primary-blue opacity-20 rounded-full"
          style={{
            top: `${15 + index * 12}%`,
            left: `${8 + index * 15}%`
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 3 + index * 0.4,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="bg-secondary-background px-40 py-20 rounded-b-[56px] relative z-10">
        <motion.div 
          className="max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div 
            className="bg-main-background rounded-2xl shadow-lg p-8 relative overflow-hidden"
            variants={formVariants}
            whileHover={{
              boxShadow: "0 25px 60px rgba(0,0,0,0.12)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Efecto de brillo en el fondo del formulario */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-0"
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 4
              }}
            />

            <motion.div 
              className="text-center mb-8 relative z-10"
              variants={headerVariants}
            >
              <motion.h2 
                className="text-4xl font-bold text-primary-text font-lato mb-4"
                whileHover={{
                  scale: 1.02,
                  color: "#285ED1",
                  textShadow: "0 0 20px rgba(40, 94, 209, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                Comienza tu Solicitud
              </motion.h2>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Ingresa tus datos básicos para comenzar el proceso de solicitud
                de servicio
              </motion.p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Campo Nombre */}
              <motion.div variants={fieldVariants}>
                <motion.label
                  htmlFor="name"
                  className="block text-sm font-medium text-primary-text mb-2"
                  whileHover={{
                    color: "#285ED1",
                    transition: { duration: 0.2 }
                  }}
                >
                  ¿Cuál es tu nombre completo?
                </motion.label>
                
                <motion.div 
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300 ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Escribe tu nombre completo"
                    whileFocus={{
                      scale: 1.01,
                      boxShadow: "0 0 0 3px rgba(40, 94, 209, 0.1)"
                    }}
                  />
                  
                  {/* Efecto de focus */}
                  <AnimatePresence>
                    {focusedField === 'name' && (
                      <motion.div
                        className="absolute inset-0 border-2 border-primary-blue rounded-lg pointer-events-none"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>

                <AnimatePresence>
                  {errors.name && (
                    <motion.p 
                      className="mt-1 text-sm text-red-500 flex items-center"
                      variants={errorVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <motion.span
                        className="mr-1"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        ⚠️
                      </motion.span>
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Campo Email */}
              <motion.div variants={fieldVariants}>
                <motion.label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary-text mb-2"
                  whileHover={{
                    color: "#285ED1",
                    transition: { duration: 0.2 }
                  }}
                >
                  ¿Cuál es tu correo electrónico?
                </motion.label>
                
                <motion.div 
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="ejemplo@correo.com"
                    whileFocus={{
                      scale: 1.01,
                      boxShadow: "0 0 0 3px rgba(40, 94, 209, 0.1)"
                    }}
                  />
                  
                  {/* Efecto de focus */}
                  <AnimatePresence>
                    {focusedField === 'email' && (
                      <motion.div
                        className="absolute inset-0 border-2 border-primary-blue rounded-lg pointer-events-none"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>

                <AnimatePresence>
                  {errors.email && (
                    <motion.p 
                      className="mt-1 text-sm text-red-500 flex items-center"
                      variants={errorVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <motion.span
                        className="mr-1"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        ⚠️
                      </motion.span>
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Botón de Submit */}
              <motion.div 
                className="pt-4"
                variants={buttonVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className={`w-full text-lg py-4 relative overflow-hidden ${
                      isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                    disabled={isSubmitting}
                  >
                    {/* Efecto de ondas en el botón */}
                    <AnimatePresence>
                      {isSubmitting && (
                        <motion.div
                          className="absolute inset-0 bg-white rounded-[28px]"
                          initial={{ scale: 0, opacity: 0.3 }}
                          animate={{ 
                            scale: [0, 1.5, 2], 
                            opacity: [0.3, 0.1, 0],
                          }}
                          transition={{ 
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeOut"
                          }}
                        />
                      )}
                    </AnimatePresence>

                    <motion.span
                      className="relative z-10"
                      animate={isSubmitting ? { opacity: [1, 0.7, 1] } : {}}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      {isSubmitting ? "Procesando..." : "Solicitar Servicio"}
                    </motion.span>

                    {/* Indicador de carga */}
                    <AnimatePresence>
                      {isSubmitting && (
                        <motion.div
                          className="absolute right-4 top-1/2 transform -translate-y-1/2"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                        >
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ 
                              duration: 1, 
                              repeat: Infinity, 
                              ease: "linear" 
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Button>
                </motion.div>
              </motion.div>
            </form>

            {/* Elementos decorativos dentro del formulario */}
            <motion.div
              className="absolute top-4 right-4 w-3 h-3 bg-primary-blue rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="absolute bottom-4 left-4 w-2 h-2 bg-accent-background rounded-full opacity-30"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
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
      </div>

      {/* Efecto de brillo global */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-blue to-transparent opacity-2 pointer-events-none"
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

export default InitialForm;