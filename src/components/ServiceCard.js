"use client";
import { motion } from "framer-motion";

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-[#E1EEFF] h-full bg-white relative overflow-hidden flex flex-col"
      whileHover={{
        y: -5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Efecto de brillo en hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-0 pointer-events-none"
        whileHover={{
          opacity: 0.4,
          x: ["-100%", "100%"],
        }}
        transition={{
          opacity: { duration: 0.3 },
          x: { duration: 0.8, ease: "easeInOut" },
        }}
      />

      {/* Elementos decorativos */}
      <motion.div
        className="absolute top-3 right-3 w-2 h-2 bg-primary-blue rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-accent-background rounded-full opacity-25"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Contenedor del icono */}
        <motion.div
          className="mb-4 w-fit h-fit bg-[#E6F5FC] rounded-full p-3 md:p-4 text-primary-text mx-auto md:mx-0 relative overflow-hidden"
          whileHover={{
            scale: 1.1,
            rotate: 5,
            boxShadow: "0 8px 25px rgba(40, 94, 209, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Efecto de pulso en el icono */}
          <motion.div
            className="absolute inset-0 bg-primary-blue rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0, 0.1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Renderizamos el componente Icon y le damos estilo */}
          {Icon && <Icon size={40} className="w-12 h-12 relative z-10" />}
        </motion.div>

        {/* Título - altura fija */}
        <motion.h3
          className="text-xl md:text-2xl font-bold mb-3 text-primary-text font-lato text-center md:text-left leading-tight min-h-[3.5rem] md:min-h-[4rem] flex items-center justify-center md:justify-start"
          whileHover={{
            color: "#285ED1",
            transition: { duration: 0.2 },
          }}
        >
          {title}
        </motion.h3>

        {/* Descripción - flex-grow para ocupar espacio restante */}
        <motion.p
          className="text-gray-600 font-lato text-center md:text-left leading-relaxed flex-grow text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {description}
        </motion.p>

        {/* Línea decorativa inferior */}
        <motion.div
          className="mt-4 w-full h-0.5 bg-gradient-to-r from-primary-blue to-transparent opacity-0"
          whileHover={{
            opacity: 0.5,
            scaleX: 1,
            transition: { duration: 0.3 },
          }}
          initial={{ scaleX: 0 }}
          style={{ originX: 0 }}
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
