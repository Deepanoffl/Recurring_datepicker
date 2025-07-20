import { useContext } from "react";
import { RecurrenceContext } from "../context/RecurrenceProvider";
import { generateRecurringDates } from "../utils/recurrenceUtils";


 const CalendarPreview=()=> {
  const {
    frequency,
    interval,
    startDate,
    endDate,
    customPattern
  } = useContext(RecurrenceContext);

const dates = generateRecurringDates({ frequency, interval, startDate, endDate, customPattern });



  return (
    <div className="mt-6 border rounded-xl p-4 dark:bg-gray-900 ">
      <h3 className="font-semibold mb-2 text-gray-500">Recurring Dates Preview:</h3>
      <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
        {dates.slice(0, 12).map((date, i) => (
          <span key={i} className="dark:bg-gray-700 px-2 py-1 rounded font-bold text-sm text-center text-gray-300">
            {date}
          </span>
        ))}
      </div>
       {dates.length > 12 && (
          <div className=" text-sm text-gray-500 text-center mt-2">
            +{dates.length - 12} more
          </div>
        )}
    </div>
  );
}

export default CalendarPreview;