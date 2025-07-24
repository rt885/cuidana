import { RiShieldUserLine } from "react-icons/ri";
import { IoAlarmOutline } from "react-icons/io5";
import { RxLightningBolt } from "react-icons/rx";
import { MdOutlineAttachMoney } from "react-icons/md";
import { GiClick } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";

const Benefits = () => {
  return (
    <section className="bg-main-background px-40 py-20 flex flex-col gap-y-10">
      <div className="flex flex-col w-3/4 mx-auto justify-center">
        <h2 className="font-lato text-5xl font-bold text-center text-primary-text">
          Beneficios exclusivos para tu tranquilidad y bienestar en casa
        </h2>
      </div>

      <div className="grid grid-cols-3 grid-rows-3 gap-2.5">
        <div className="col-span-2 flex gap-x-5 bg-secondary-background p-6 rounded-2xl">
          <div className="bg-[#E6F5FC] rounded-full flex items-center justify-center p-4 h-fit w-fit my-auto">
            <RiShieldUserLine className="h-28 w-28 text-primary-blue" />
          </div>
          <div className="flex flex-col justify-center gap-y-2.5">
            <h4 className="text-primary-text font-lato text-4xl font-bold">
              Atención 100% Segura
            </h4>
            <p className="text-xl">
              Solo personal de enfermería certificado y validada
            </p>
          </div>
        </div>

        <div className="row-span-2 col-start-3 flex flex-col justify-center gap-y-5 bg-secondary-background p-6 rounded-2xl">
          <div className="bg-[#E6F5FC] rounded-full flex items-center justify-center p-4 w-fit mx-auto">
            <IoAlarmOutline className="h-28 w-28 text-primary-blue" />
          </div>
          <div className="flex flex-col items-center gap-y-2.5">
            <h4 className="text-primary-text font-lato text-4xl font-bold text-center">
              Flexibilidad Total
            </h4>
            <p className="text-xl text-center">
              Sin mínimos de días, tú eliges cuándo y cuánto
            </p>
          </div>
        </div>

        <div className="row-start-2 flex gap-x-2.5 bg-secondary-background p-3 rounded-2xl">
          <div className="bg-[#E6F5FC] rounded-full flex items-center justify-center p-4 h-fit w-fit my-auto">
            <RxLightningBolt className="h-28 w-28 text-primary-blue" />
          </div>
          <div className="flex flex-col justify-center gap-y-2.5">
            <h4 className="text-primary-text font-lato text-4xl font-bold">
              Atención Inmediata
            </h4>
            <p>Disponibilidad rápida cuando más lo necesitas</p>
          </div>
        </div>

        <div className="row-start-2 flex gap-x-2.5 bg-secondary-background p-3 rounded-2xl">
          <div className="bg-[#E6F5FC] rounded-full flex items-center justify-center p-4 h-fit w-fit my-auto">
            <MdOutlineAttachMoney className="h-28 w-28 text-primary-blue" />
          </div>
          <div className="flex flex-col justify-center gap-y-2.5">
            <h4 className="text-primary-text font-lato text-4xl font-bold">
              Precios Claros
            </h4>
            <p>
              Conoce el costo de cada servicio desde el principio, sin cargos
              ocultos.
            </p>
          </div>
        </div>

        <div className="row-start-3 flex gap-x-2.5 bg-secondary-background p-3 rounded-2xl">
          <div className="bg-[#E6F5FC] rounded-full flex items-center justify-center p-4 h-fit w-fit my-auto">
            <BiSupport className="h-28 w-28 text-primary-blue" />
          </div>
          <div className="flex flex-col justify-center gap-y-2.5">
            <h4 className="text-primary-text font-lato text-4xl font-bold">
              Consulta Directa
            </h4>
            <p>Seguimiento y soporte personalizado</p>
          </div>
        </div>

        <div className="col-span-2 row-start-3 flex gap-x-5 bg-secondary-background p-6 rounded-2xl">
          <div className="bg-[#E6F5FC] rounded-full flex items-center justify-center p-4 h-fit w-fit my-auto">
            <GiClick className="h-28 w-28 text-primary-blue" />
          </div>
          <div className="flex flex-col justify-center gap-y-2.5">
            <h4 className="text-primary-text font-lato text-4xl font-bold">
              Solicitud Digital Fácil y Rápida
            </h4>
            <p className="text-xl">
              Pide tu enfermera a domicilio en pocos pasos, sin complicaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
