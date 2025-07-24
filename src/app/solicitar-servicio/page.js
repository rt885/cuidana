"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
    patientAge: "",
    serviceLocation: "",
    urgencyLevel: "",
    duration: "",
    startDate: "",
    specialRequirements: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const totalSteps = 8;

  useEffect(() => {
    // Cargar datos del localStorage
    const savedData = localStorage.getItem("cuidana_form_data");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData((prev) => ({
        ...prev,
        ...parsedData,
      }));
    }
  }, []);

  const handleInputChange = (value) => {
    const currentField = getCurrentField();
    setFormData((prev) => ({
      ...prev,
      [currentField]: value,
    }));
  };

  const getCurrentField = () => {
    const fields = [
      "serviceType",
      "patientAge",
      "serviceLocation",
      "urgencyLevel",
      "duration",
      "startDate",
      "specialRequirements",
      "phone",
    ];
    return fields[currentStep - 1];
  };

  const getCurrentValue = () => {
    const field = getCurrentField();
    return formData[field];
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    // Simular envío de datos
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Limpiar localStorage
      localStorage.removeItem("cuidana_form_data");

      // Redirigir a página de confirmación
      router.push("/confirmacion");
    } catch (error) {
      console.error("Error al enviar formulario:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary-text font-lato text-center mb-8">
              ¿Qué tipo de servicio de enfermería necesitas?
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Administración de medicamentos",
                "Monitoreo de signos vitales",
                "Cuidado y curación de heridas",
                "Cuidados de recién nacidos",
                "Asistencia en movilización",
                "Atención post-operatoria",
                "Cuidado paliativo",
                "Otro",
              ].map((service) => (
                <button
                  key={service}
                  onClick={() => handleInputChange(service)}
                  className={`p-4 text-left border-2 rounded-lg transition-all hover:border-primary-blue ${
                    getCurrentValue() === service
                      ? "border-primary-blue bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <span className="font-medium">{service}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary-text font-lato text-center mb-8">
              ¿Cuál es la edad del paciente?
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Recién nacido (0-1 mes)",
                "Bebé (1-12 meses)",
                "Niño (1-12 años)",
                "Adolescente (13-17 años)",
                "Adulto joven (18-39 años)",
                "Adulto (40-64 años)",
                "Adulto mayor (65+ años)",
              ].map((age) => (
                <button
                  key={age}
                  onClick={() => handleInputChange(age)}
                  className={`p-4 text-center border-2 rounded-lg transition-all hover:border-primary-blue ${
                    getCurrentValue() === age
                      ? "border-primary-blue bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <span className="font-medium">{age}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary-text font-lato text-center mb-8">
              ¿Dónde se brindará el servicio?
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                value={getCurrentValue()}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Ingresa la dirección completa"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent text-lg"
              />
              <p className="text-sm text-gray-600 text-center">
                Por ejemplo: Calle 123, Colonia Centro, Monterrey, N.L.
              </p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary-text font-lato text-center mb-8">
              ¿Qué tan urgente es el servicio?
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { level: "Inmediato", desc: "Necesito atención ahora mismo" },
                {
                  level: "Urgente",
                  desc: "Necesito atención en las próximas 2-4 horas",
                },
                { level: "Mismo día", desc: "Necesito atención hoy" },
                { level: "Programado", desc: "Puedo programar para otro día" },
              ].map((item) => (
                <button
                  key={item.level}
                  onClick={() => handleInputChange(item.level)}
                  className={`p-4 text-left border-2 rounded-lg transition-all hover:border-primary-blue ${
                    getCurrentValue() === item.level
                      ? "border-primary-blue bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <div className="font-medium text-lg">{item.level}</div>
                  <div className="text-gray-600">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary-text font-lato text-center mb-8">
              ¿Por cuánto tiempo necesitas el servicio?
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Una sola vez",
                "2-3 horas",
                "4-6 horas",
                "8-12 horas",
                "24 horas",
                "Varios días",
                "Una semana",
                "Más de una semana",
              ].map((duration) => (
                <button
                  key={duration}
                  onClick={() => handleInputChange(duration)}
                  className={`p-4 text-center border-2 rounded-lg transition-all hover:border-primary-blue ${
                    getCurrentValue() === duration
                      ? "border-primary-blue bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <span className="font-medium">{duration}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary-text font-lato text-center mb-8">
              ¿Cuándo necesitas que comience el servicio?
            </h2>
            <div className="space-y-4">
              <input
                type="datetime-local"
                value={getCurrentValue()}
                onChange={(e) => handleInputChange(e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent text-lg"
                min={new Date().toISOString().slice(0, 16)}
              />
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary-text font-lato text-center mb-8">
              ¿Hay algún requerimiento especial que debamos saber?
            </h2>
            <div className="space-y-4">
              <textarea
                value={getCurrentValue()}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Describe cualquier condición médica especial, alergias, medicamentos actuales, o cualquier otra información importante..."
                rows={6}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent text-lg resize-none"
              />
              <p className="text-sm text-gray-600">
                Esta información nos ayuda a asignar el personal más adecuado
                para tu caso.
              </p>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary-text font-lato text-center mb-8">
              ¿Cuál es tu número de teléfono?
            </h2>
            <div className="space-y-4">
              <input
                type="tel"
                value={getCurrentValue()}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="+52 81 1234 5678"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent text-lg text-center"
              />
              <p className="text-sm text-gray-600 text-center">
                Nos comunicaremos contigo para confirmar los detalles del
                servicio
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const isStepValid = () => {
    const currentValue = getCurrentValue();
    return currentValue && currentValue.toString().trim() !== "";
  };

  return (
    <div className="min-h-screen bg-main-background">
      <div className="container mx-auto px-4 py-12">
        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-primary-text">
              Paso {currentStep} de {totalSteps}
            </span>
            <span className="text-sm text-gray-600">
              {Math.round((currentStep / totalSteps) * 100)}% completado
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-blue h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Content */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[400px]">
            {renderStep()}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-primary-blue hover:bg-blue-50"
              }`}
            >
              <FaChevronLeft className="w-5 h-5" />
              <span>Anterior</span>
            </button>

            {currentStep === totalSteps ? (
              <Button
                onClick={handleSubmit}
                disabled={!isStepValid() || isLoading}
                className={`${
                  !isStepValid() ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Enviando..." : "Enviar Solicitud"}
              </Button>
            ) : (
              <Button
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`flex items-center space-x-2 ${
                  !isStepValid() ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <span>Siguiente</span>
                <FaChevronRight className="w-5 h-5" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
