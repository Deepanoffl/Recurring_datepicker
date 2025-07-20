import { useContext } from "react";
import { RecurrenceContext } from "../context/RecurrenceProvider";

const RecurrenceOptions=()=> {
  const { frequency, setFrequency } = useContext(RecurrenceContext);
  const options = ["daily", "weekly", "monthly", "yearly"];

  return (
    <div className="flex gap-2 flex-wrap mb-4">
      {options.map((opt) => (
        <button
          key={opt}
          className={`px-4 py-1 rounded-xl font-medium capitalize cursor-pointer ${
            frequency === opt ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
          onClick={() => setFrequency(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default RecurrenceOptions;