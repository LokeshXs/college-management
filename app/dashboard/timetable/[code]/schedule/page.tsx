"use client";

import {
  Calendar,
  Views,
  DateLocalizer,
  dateFnsLocalizer,
  Event,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import React, { useMemo } from "react";
import * as dates from "@/lib/dates";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const myEventsList: Event[] = [
  {
    id: 1,
    title: "Class",
    start: new Date(2024, 3, 1),
    end: new Date(2024, 3, 2),
  },

  {
    id: 2,
    title: "Class",
    start: new Date(2024, 3, 1),
    end: new Date(2024, 3, 2),
  },

  {
    id: 3,
    title: "Class",
    start: new Date(2024, 3, 2),
    end: new Date(2024, 3, 2),
  },
  {
    id: 3,
    title: "Class",
    start: new Date(2024, 3, 5),
    end: new Date(2024, 3, 7),
  },
];

const ColoredDateCellWrapper = ({ children }: { children: any }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightblue",
    },
  });

export default function Schedule() {
  const { components, defaultDate, max, views } = useMemo(
    () => ({
      components: {
        timeSlotWrapper: ColoredDateCellWrapper,
      },
      defaultDate: new Date(),
      max: dates.add(dates.endOf(new Date(2024, 4, 31), "day"), -1, "hours"),
      views: Object.keys(Views).map((k) => Views[k]),
    }),
    []
  );

  return (
    <main className="overflow-y-scroll min-h-screen  flex justify-start items-center">
      <div className="min-w-[800px] w-full ">
        <Calendar
          components={components}
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          views={views}
          step={60}
          defaultDate={defaultDate}
          max={max}
          showMultiDayTimes
        />
      </div>
    </main>
  );
}
