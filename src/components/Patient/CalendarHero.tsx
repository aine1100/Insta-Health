import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";

export default function InlineDemo() {
  const [date, setDate] = useState<Nullable<Date>>(null);

  return (
    <div className="card w-[21rem] h-[18rem] flex justify-center border border-gray-600 rounded-3xl overflow-hidden">
      <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        inline
        showWeek
        className="calendar-full-width"
      />
    </div>
  );
}
