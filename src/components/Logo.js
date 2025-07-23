import Image from "next/image";

const Logo = ({width, height}) => {
  return (
    <Image
      src="/images/logo.webp"
      alt="Cuidana Logo"
      width={width || 48}
      height={height || 48}
      priority
    />
  );
}

export default Logo;