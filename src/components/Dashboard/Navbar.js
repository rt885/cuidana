import Link from 'next/link';
import Button from '../Button';
import Logo from '../Logo';

const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-between px-16 py-3 bg-main-background text-white'>
        <Logo />
        <div className='flex space-x-6'>
          <Link href="/" className="font-semibold text-primary-text">
            Inicio
          </Link>
          <Link href="/" className="font-medium text-primary-text">
            Servicios
          </Link>
          <Link href="/" className="font-medium text-primary-text">
            Quienes Somos
          </Link>
          <Link href="/" className="font-medium text-primary-text">
            Testimonios
          </Link>
          <Link href="/" className="font-medium text-primary-text">
            FaQ
          </Link>
          <Link href="/" className="font-medium text-primary-text">
            Contacto
          </Link>
        </div>
        <div>
          <Link href="/">
            <Button className="">
              Solicitar Servicio
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;