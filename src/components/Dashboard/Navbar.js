import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-between px-16 py-3 bg-main-background text-white'>
        <Image
          src="/images/logo.webp"
          alt="Next.js Logo"
          width={40}
          height={40}
          priority
        />
        <div className='flex space-x-6'>
          <Link href="/" className="text-primary-text">
            Home
          </Link>
          <Link href="/" className="text-primary-text">
            Servicios
          </Link>
          <Link href="/" className="text-primary-text">
            Quienes Somos
          </Link>
          <Link href="/" className="text-primary-text">
            Testimonios
          </Link>
          <Link href="/" className="text-primary-text">
            Preguntas Frecuentes
          </Link>
          <Link href="/" className="text-primary-text">
            Contacto
          </Link>
        </div>
        <div>
          <Link href="/" className="font-semibold">
            Contactanos
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;