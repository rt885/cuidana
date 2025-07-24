const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-2.5 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-[#E1EEFF] h-full">
      <div className="mb-4 w-fit h-fit bg-[#E6F5FC] rounded-full p-2.5 text-primary-text">
        {/* Renderizamos el componente Icon y le damos estilo */}
        {Icon && <Icon size={50} />}
      </div>
      <h3 className="text-2xl font-bold mb-2 text-primary-text font-lato">{title}</h3>
      <p className="text-gray-600 font-lato">{description}</p>
    </div>
  );
};

export default ServiceCard;
