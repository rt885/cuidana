import { faQ } from "../../../data/faQ/faQ";
import FaQCard from "../FaQCard";

const FaQSection = () => {
  return (
    <div className="bg-secondary-background px-40 py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-primary-text font-lato mb-8">
          Preguntas Frecuentes
        </h2>
        <ul className="space-y-6">
          {faQ.map((FaQMap) => (
            <FaQCard
              key={FaQMap.id}
              question={FaQMap.question}
              answer={FaQMap.answer}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FaQSection;