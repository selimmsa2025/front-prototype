import { createPortal } from 'react-dom';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Link,
  useNavigate,
  json,
} from 'react-router-dom';
import axios from 'axios';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';

function App() {

  const getEventList = async () => {
    const response = await axios.get('/mockupServer/getFullCalendarEventList.json');
    let eventList = [];
    for (const eventData of response.data) {
      console.log(eventData)
      eventData.start = new Date(eventData.start)
      eventData.end = new Date(eventData.end)
      eventList.push(eventData)
    }
    console.log("🚀 ~ getEventList ~ eventList:", eventList)
    setDataList(eventList);
  };
  useEffect(() => {
    getEventList();
  }, []);

  const [dataList, setDataList] = useState([]);
  const [currentEvents, setCurrentEvents] = useState([])

  function handleDateSelect(selectInfo) {
    console.log("🚀 ~ handleDateSelect ~ selectInfo:", selectInfo)
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: Date.now(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  function handleEventClick(clickInfo) {
    // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    //   clickInfo.event.remove()
    // }
  }

  function handleEvents(events) {
    setCurrentEvents(events)
  }

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={
        {
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek' // user can switch between the two
        }
      }
      events={dataList}
      locales={[koLocale]}
      locale='ko'
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEventRows={true}
      views={
        {
          timeGrid: {
            dayMaxEventRows: 3
          }
        }
      }
      select={handleDateSelect}
      // eventContent={renderEventContent}
      eventClick={handleEventClick}
      eventsSet={handleEvents}
      eventAdd={function () { }}
      eventChange={function () { }}
      eventRemove={function () { }}
    />
  );

}

export default App;
