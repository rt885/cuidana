import Image from "next/image";
import Button from "./Button";

const CloseBanner = () => {
  return (
    <section className="bg-[url(/images/close-banner.png)] h-[480px] bg-cover bg-center flex items-center justify-center relative rounded-t-[56px] ">
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-[56px] ">
        <div className="flex flex-col items-center justify-center h-full text-center lg:w-3/4 xl:w-2/3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-lato font-bold mb-4 text-main-background">
            Atención inmediata, sin mínimos ni complicaciones.
          </h2>
          <Button
            href="/contacto"
            className="font-lato text-2xl"
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CloseBanner;