// src/components/FaQCard.js (Versión alternativa con iconos +/-)
"use client";
import { useRef, useEffect, useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const FaQCard = ({ id, question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <li
      className={`bg-secondary-background rounded-lg shadow-md border-2 overflow-hidden transition-all duration-300 hover:shadow-lg ${
        isOpen ? "border-primary-blue" : "border-gray-200"
      }`}
    >
      {/* Botón de la pregunta */}
      <button
        onClick={onClick}
        className={`w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-opacity-50 transition-all duration-200 ${
          isOpen ? "bg-blue-50" : "hover:bg-gray-50"
        }`}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
      >
        <div className="flex items-center justify-between">
          <h3
            className={`text-xl font-semibold font-lato pr-4 transition-colors duration-200 ${
              isOpen ? "text-primary-blue" : "text-primary-text"
            }`}
          >
            {question}
          </h3>
          <div className="flex-shrink-0">
            {isOpen ? (
              <FaMinusCircle className="w-6 h-6 text-primary-blue transition-all duration-300" />
            ) : (
              <FaPlusCircle className="w-6 h-6 text-primary-blue transition-all duration-300" />
            )}
          </div>
        </div>
      </button>

      {/* Contenido de la respuesta */}
      <div
        ref={contentRef}
        id={`faq-answer-${id}`}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <div className="px-6 pb-5">
          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-700 leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FaQCard;
