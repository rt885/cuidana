import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <div className='flex items-center justify-between p-4 bg-gray-800 text-white'>
        <Image
          src="/images/logo.webp"
          alt="Next.js Logo"
          width={40}
          height={40}
          priority
        />
        <div className='flex space-x-4'>
          <Link href="/" className="text-lg">
            Home
          </Link>
          <Link href="/" className="text-lg">
            Servicios
          </Link>
          <Link href="/" className="text-lg">
            Quienes Somos
          </Link>
          <Link href="/" className="text-lg">
            Testimonios
          </Link>
          <Link href="/" className="text-lg">
            Preguntas Frecuentes
          </Link>
          <Link href="/" className="text-lg">
            Contacto
          </Link>
        </div>
        <div>
          <Link href="/" className="text-lg font-semibold">
            Contactanos
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;