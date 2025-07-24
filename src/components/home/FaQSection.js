// src/components/home/FaQSection.js
'use client';
import { useState } from 'react';
import { faQ } from "../../../data/faQ/faQ";
import FaQCard from "../FaQCard";

const FaQSection = () => {
  // Estado para controlar cuál FAQ está abierto (solo uno a la vez)
  const [openFAQ, setOpenFAQ] = useState(null);

  // Función para manejar el clic en una FAQ
  const handleFAQClick = (faqId) => {
    // Si el FAQ clickeado ya está abierto, lo cerramos. Si no, abrimos el nuevo
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <div className="bg-secondary-background px-40 py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-primary-text font-lato mb-8">
          Preguntas Frecuentes
        </h2>
        <ul className="space-y-4">
          {faQ.map((FaQMap) => (
            <FaQCard
              key={FaQMap.id}
              id={FaQMap.id}
              question={FaQMap.question}
              answer={FaQMap.answer}
              isOpen={openFAQ === FaQMap.id}
              onClick={() => handleFAQClick(FaQMap.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FaQSection;