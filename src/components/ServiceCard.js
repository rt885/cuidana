import Image from 'next/image';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={50}
          height={50}
        />
      </div>
      <h3 className="text-xl font-bold mb-2 text-primary-text">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;