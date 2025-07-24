import Image from "next/image";
import Link from "next/link";

const HowItWorks = () => {
  return (
    <section className="bg-secondary-background">
      <div className="bg-main-background px-40 py-20 grid lg:grid-cols-2 gap-x-20 rounded-b-[56px]">
      <div className="flex flex-col gap-y-10 my-auto">
        <div className="flex flex-col gap-y-2.5">
          <h2 className="text-primary-text font-lato text-4xl font-bold">
            ¿Cómo Funciona? Atención de Enfermería en Casa en 3 Pasos Sencillos
          </h2>
          <p className="leading-tight">
            Descubre lo sencillo que es recibir atención profesional y
            personalizada en casa. Nuestro proceso digital, seguro y
            transparente te acompaña desde la solicitud hasta el seguimiento,
            garantizando tranquilidad en cada etapa.
          </p>
        </div>
        <div>
          <Image
            src="/images/Home/como-funciona.png"
            alt="Cómo funciona Cuidana"
            width={500}
            height={300}
            className="rounded-2xl w-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-3 py-2.5">
          <div className="h-fit w-fit bg-secondary-background rounded-full flex items-center justify-center">
            <p className="font-lato text-primary-blue text-4xl p-2.5 font-bold">01</p>
          </div>
          <div className="">
            <h4 className="font-lato font-bold text-primary-text text-2xl">Solicita en Línea</h4>
            <p className="leading-tight">Completa nuestro formulario digital o contáctanos por WhatsApp en minutos, sin complicaciones.</p>
          </div>
        </div>

        <div className="flex flex-col gap-y-3 py-2.5">
          <div className="h-fit w-fit bg-secondary-background rounded-full flex items-center justify-center">
            <p className="font-lato text-primary-blue text-4xl p-2.5 font-bold">02</p>
          </div>
          <div className="">
            <h4 className="font-lato font-bold text-primary-text text-2xl">Elige los Servicios que Necesitas</h4>
            <p className="leading-tight">Selecciona el tipo de atención y horario que mejor se adapte a ti o a tu familiar.</p>
          </div>
        </div>

        <div className="flex flex-col gap-y-3 py-2.5">
          <div className="h-fit w-fit bg-secondary-background rounded-full flex items-center justify-center">
            <p className="font-lato text-primary-blue text-4xl p-2.5 font-bold">03</p>
          </div>
          <div className="">
            <h4 className="font-lato font-bold text-primary-text text-2xl">Validación y Asignación de Personal Certificado</h4>
            <p className="leading-tight">Validamos tu solicitud y asignamos una enfermera profesional, verificada y con experiencia.</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HowItWorks;
