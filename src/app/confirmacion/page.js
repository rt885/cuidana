"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import { FaCheckCircle } from "react-icons/fa";

const ConfirmationPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-main-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <FaCheckCircle className="w-20 h-20 text-green-500" />
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-primary-text font-lato mb-4">
              ¡Solicitud Enviada Exitosamente!
            </h1>

            {/* Message */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Hemos recibido tu solicitud de servicio de enfermería. Nuestro
              equipo revisará la información y te contactaremos en los próximos
              <span className="font-semibold text-primary-text">
                {" "}
                15-30 minutos
              </span>
              para confirmar los detalles y programar el servicio.
            </p>

            {/* Next Steps */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-semibold text-primary-text mb-3">
                Próximos pasos:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold text-primary-blue mr-2">1.</span>
                  Recibirás una llamada de confirmación
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-primary-blue mr-2">2.</span>
                  Asignaremos una enfermera certificada
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-primary-blue mr-2">3.</span>
                  Te enviaremos los datos del profesional asignado
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-primary-blue mr-2">4.</span>
                  La enfermera llegará en el horario acordado
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-primary-text mb-3">
                ¿Necesitas hacer cambios o tienes dudas?
              </h3>
              <p className="text-gray-600 mb-3">
                Puedes contactarnos directamente:
              </p>
              <div className="space-y-2">
                <p className="text-primary-blue font-medium">
                  📞 +52 81 1901 6802
                </p>
                <p className="text-primary-blue font-medium">
                  📧 ruben@lumertic.com
                </p>
                <p className="text-primary-blue font-medium">
                  💬 WhatsApp: +52 81 1901 6802
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Link href="/">
                <Button className="w-full">Volver al Inicio</Button>
              </Link>

              <Link
                href="/solicitar-servicio"
                className="block w-full text-center px-6 py-3 border-2 border-primary-blue text-primary-blue hover:bg-blue-50 rounded-[28px] font-lato font-medium transition-colors"
              >
                Hacer Otra Solicitud
              </Link>
            </div>

            {/* Footer Message */}
            <p className="text-sm text-gray-500 mt-8">
              Número de solicitud: #CUID-
              {Math.random().toString(36).substr(2, 8).toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
