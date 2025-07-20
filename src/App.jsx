import RecurrenceProvider from "./context/RecurrenceProvider";
import RecurrenceOptions from "./components/RecurrenceOptions";
import FrequencySelector from "./components/FrequencySelector";
import CustomPatternSelector from "./components/CustomPatternSelector";
import DateRangePicker from "./components/DateRangePicker";
import CalendarPreview from "./components/CalendarPreview";

const App = () => {
  return (
    <div className="dark:bg-gray-700 max-w-[700px] mx-auto  p-6 shadow sm:rounded-xl">
      <h1 className="text-xl font-bold mb-10 text-center text-gray-300 uppercase">
        Recurring Date Picker
      </h1>
      <RecurrenceProvider>
        <RecurrenceOptions />
        <FrequencySelector />
        <CustomPatternSelector />
        <DateRangePicker />
        <CalendarPreview />
      </RecurrenceProvider>
    </div>
  );
};

export default App;