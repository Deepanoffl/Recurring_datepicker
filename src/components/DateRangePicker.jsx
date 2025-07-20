import { useContext } from "react";
import { RecurrenceContext } from "../context/RecurrenceProvider";

 const  DateRangePicker=()=> {
  const { startDate, endDate, setStartDate, setEndDate } = useContext(RecurrenceContext);

  return (
    <div className="flex gap-7 mb-4">
      <div>
        <label className="block  font-medium text-gray-300 mb-1">Start Date</label>
        <input
          type="date"
          className="bg-white border px-2 py-1 rounded"
          value={startDate || ''}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label className="block  font-medium text-gray-300 mb-1">End Date (Optional)</label>
        <input
          type="date"
          className="border bg-white px-3 py-1 rounded"
          value={endDate || ''}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
    </div>
  );
}

export default DateRangePicker;