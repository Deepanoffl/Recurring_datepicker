import { useContext } from "react";
import { RecurrenceContext } from "../context/RecurrenceProvider";

 const FrequencySelector=()=> {
  const { interval, setInterval, frequency } = useContext(RecurrenceContext);

  return (
    <div className="mb-4 ">
      <label className="block mb-1  font-medium text-gray-300">
        Every {frequency}
      </label>
      <input
        type="number"
        className=" px-3 py-1 rounded w-20 bg-white"
        min={1}
        value={interval}
        onChange={(e) => setInterval(Number(e.target.value))}
      />
    </div>
  );
}

export default FrequencySelector;