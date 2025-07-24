'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../Button";

const InitialForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Guardar datos en localStorage para usar en el formulario multi-step
      localStorage.setItem("cuidana_form_data", JSON.stringify(formData));

      // Redirigir al formulario multi-step
      router.push("/solicitar-servicio");
    }
  };

  return (
    <section className="bg-main-background px-40 py-20">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-primary-text font-lato mb-4">
              Comienza tu Solicitud
            </h2>
            <p className="text-gray-600">
              Ingresa tus datos básicos para comenzar el proceso de solicitud de
              servicio
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-primary-text mb-2"
              >
                ¿Cuál es tu nombre completo?
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Escribe tu nombre completo"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-primary-text mb-2"
              >
                ¿Cuál es tu correo electrónico?
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="ejemplo@correo.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full text-lg py-4">
                Solicitar Servicio
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InitialForm;
