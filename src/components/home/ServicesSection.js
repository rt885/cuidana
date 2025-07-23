import { servicesData } from "../../../data/serviceCards/serviceCards";
import ServiceCard from "../ServiceCard";

const ServicesSection = () => {
  return (
    <section className="bg-accent-background">
      <div className="px-40 py-20 bg-secondary-background rounded-b-[56px]">
        <div className="flex flex-col gap-y-10">
          <div className="w-3/4 mx-auto flex flex-col gap-y-2.5">
            <h2 className="text-5xl text-center font-bold text-primary-text font-lato">
              Nuestros Servicios de Enfermería a Domicilio
            </h2>
            <p className="text-center">
              Atención integral y personalizada para tu bienestar en casa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-5">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
