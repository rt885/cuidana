
const Button = ({ children, onClick, className = '', type = 'button' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 bg-primary-text text-white-text hover:bg-blue-600 rounded-[28px] font-lato ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;