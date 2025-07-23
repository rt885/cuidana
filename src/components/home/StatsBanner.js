
const StatsBanner = () => {
  return (
    <section className="bg-accent-background text-white-text lg:px-[360px] lg:py-3 flex justify-between items-center gap-4">
      <div className="flex flex-col items-center">
        <p className="font-lato text-[64px]">24/7</p>
        <span className="text">Servicio Disponible</span>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-lato text-[64px]">50+</p>
        <span className="text">Profesionales de enfermería</span>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-lato text-[64px]">100+</p>
        <span className="text">Pacientes Atendidos</span>
      </div>
    </section>
  );
}

export default StatsBanner;