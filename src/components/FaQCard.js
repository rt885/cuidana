
const FaQCard = ({ question, answer }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <p className="text-gray-700">
        {answer}
      </p>
    </div>
  );
}

export default FaQCard;