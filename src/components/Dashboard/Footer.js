import Link from "next/link";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="lg:bg-main-background lg:py-12 lg:px-28 flex lg:flex-col gap-y-20">
      <div className="grid lg:grid-cols-3 lg:grid-rows-1">
        <div>
          <Logo />
        </div>
        
        <div className="flex flex-col lg:gap-y-4 lg:items-center ">
          <div>
            <p className="text-[#BDC9D9] text-[12px] font-semibold">MENU</p>
          </div>
          <div className="flex flex-col">
            <Link
              href="/"
              className="font-medium text-dark-text gap-y-1 text-sm"
            >
              Inicio
            </Link>
            <Link
              href="/"
              className="font-medium text-dark-text gap-y-1 text-sm"
            >
              Servicios
            </Link>
            <Link
              href="/"
              className="font-medium text-dark-text gap-y-1 text-sm"
            >
              Quienes Somos
            </Link>
            <Link
              href="/"
              className="font-medium text-dark-text gap-y-1 text-sm"
            >
              Testimonios
            </Link>
            <Link
              href="/"
              className="font-medium text-dark-text gap-y-1 text-sm"
            >
              FaQ
            </Link>
            <Link
              href="/"
              className="font-medium text-dark-text gap-y-1 text-sm"
            >
              Contacto
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:gap-y-4 lg:items-center">
          <div>
            <p className="text-[#BDC9D9] text-[12px] font-semibold">
              CONTÁCTANOS
            </p>
          </div>
          <div className="flex flex-col">
            <Link
              href="mailto:ruben@lumertic.com"
              className="font-medium text-dark-text gap-y-1 text-sm"
            >
              ruben@lumertic.com
            </Link>
            <Link
              href="tel:+5491134567890"
              className="font-medium text-dark-text gap-y-1 text-sm"
            >
              +52 81 1901 6802
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-center text-xs text-[#BDC9D9] py-4">
          © 2025 Cuidana. Copyright.
        </p>
        <Link href="https://lumertic.com/es/" className="text-xs text-[#BDC9D9] py-4">
          Desarrollado por <span className="font-medium">Lumertic</span>
        </Link>
        <Link href="/privacy-policy" className="text-xs text-[#BDC9D9] py-4">
          Política de privacidad
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
