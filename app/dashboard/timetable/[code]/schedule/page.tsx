"use client";

import { FC, useState } from 'react'
import { Calendar, dateFnsLocalizer, Event, View } from 'react-big-calendar'
import withDragAndDrop, { withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import {addHours} from 'date-fns'
import {startOfHour} from 'date-fns'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const App: FC = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      title: 'Busy',
      start:new Date(2024, 3, 1),
      end:new Date(2024, 3, 1),
    },
    {
      title: 'Busy',
      start:new Date(2024, 3, 6),
      end:new Date(2024, 3, 8),
    },
    {
      title: 'Busy',
      start,
      end,
    },
    {
      title: 'Busy',
      start:new Date(2024, 3, 12),
      end:new Date(2024, 3, 12),
    },
  ])

  const [view,setView] = useState<View>("month");

  const onEventResize: withDragAndDropProps['onEventResize'] = data => {
    const { start, end } = data

    setEvents(currentEvents => {
      const firstEvent = {
        start: new Date(start),
        end: new Date(end),
      }
      return [...currentEvents, firstEvent]
    })
  }

  const onEventDrop: withDragAndDropProps['onEventDrop'] = data => {
    console.log(data)
  }

  return (
    <main className='overflow-x-scroll p-4 max-sm:pb-20 bg-white'>
<div className='min-w-[600px] w-full '>

    <DnDCalendar
      defaultView={view}
      view={view}
      onView={(view)=>{setView(view)}}
      events={events}
      localizer={localizer}
      onEventDrop={onEventDrop}
      onEventResize={onEventResize}
      resizable
      style={{ height: '100vh' }}
      />
      </div>
      </main>
  )
}

const locales = {
  'en-US': enUS,
}
const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1)
const now = new Date()
const start = endOfHour(now)
const end = addHours(start, 2)
// The types here are `object`. Strongly consider making them better as removing `locales` caused a fatal error
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})
//@ts-ignore
const DnDCalendar = withDragAndDrop(Calendar)

export default App