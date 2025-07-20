import { createContext, useState } from "react";

export const RecurrenceContext = createContext();

 const RecurrenceProvider = ({ children }) => {
  const [frequency, setFrequency] = useState("daily");
  const [interval, setInterval] = useState(1);
  const [weekDays, setWeekDays] = useState([]);
  const [customPattern, setCustomPattern] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <RecurrenceContext.Provider
      value={{
        frequency,
        setFrequency,
        interval,
        setInterval,
        weekDays,
        setWeekDays,
        customPattern,
        setCustomPattern,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
      }}
    >
      {children}
    </RecurrenceContext.Provider>
  );
};

export default RecurrenceProvider;