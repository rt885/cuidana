import { servicesData } from "../../../data/serviceCards/serviceCards";
import ServiceCard from "../ServiceCard";

const ServicesSection = () => {
  return (
    <section className="px-40 py-20">
      <div className="w-3/4 mx-auto flex flex-col gap-y-2.5">
        <h2 className="text-5xl text-center font-bold text-primary-text font-lato">
          Nuestros Servicios de Enfermería a Domicilio
        </h2>
        <p className="text-center">
          Atención integral y personalizada para tu bienestar en casa.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id} // La 'key' es esencial para React
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
