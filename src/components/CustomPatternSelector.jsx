import { useContext } from "react";
import { RecurrenceContext } from "../context/RecurrenceProvider";

 const CustomPatternSelector=()=> {
  const { customPattern, setCustomPattern } = useContext(RecurrenceContext);

  return (
    <div className="mb-4">
      <label className="block mb-1  font-medium text-gray-300">Custom Pattern</label>
      <input
        type="text"
        className="dark:bg-gray-900 px-3 py-2 rounded w-full text-white"
        placeholder="e.g. The Second Tuesday of every month"
        value={customPattern}
        onChange={(e) => setCustomPattern(e.target.value)}
      />
    </div>
  );
}

export default CustomPatternSelector;