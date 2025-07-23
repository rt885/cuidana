import Image from "next/image";
import Button from "../Button";

const Hero = () => {
  return (
    <main className="grid lg:grid-cols-2 lg:px-[120px] pt-20 gap-x-8">
      <div className="flex flex-col justify-center gap-4">
        <div className="flex flex-col gap-2.5">
          <h1 className="text-primary-text text-5xl font-lato font-bold">
            Cuidado de Enfermería en Casa: Bienestar para Pacientes,
            Tranquilidad para Familias
          </h1>
          <p>
            Recibe atención médica experta y personalizada en la comodidad de tu
            hogar. Nuestros enfermeros certificados cuidan cada detalle de la
            salud y el día a día del paciente, mientras brindan apoyo y alivio a
            la familia. Disfruta de más calidad de vida, seguridad y
            acompañamiento profesional, sin listas de espera ni traslados.
          </p>
        </div>
        <div>
          <Button>Solicita tu cuidado personalizado aquí</Button>
        </div>
      </div>
      <div>
        <Image
          src="/images/Home/enfermera-hero.webp"
          alt="Imagen de enfermera cuidando a un paciente"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>
    </main>
  );
};

export default Hero;
