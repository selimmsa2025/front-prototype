import { createPortal } from 'react-dom';
import React, { useEffect, useState } from 'react';
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

import {
  Calendar,
  Views,
  DateLocalizer,
  momentLocalizer,
} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './customCalendar.css';
import moment from 'moment'

moment.locale('ko-KR');
const localizer = momentLocalizer(moment)

function App() {

  const getEventList = async () => {
    const response = await axios.get('/mockupServer/getEventList.json');
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

  const [defaultDate, setDefaultDate] = useState(new Date())
  const [dataList, setDataList] = useState([]);

  return (
    <Calendar
      localizer={localizer}
      defaultDate={defaultDate}
      events={dataList}
      startAccessor="start"
      endAccessor="end"
      popup="true"
    />
  );
}

export default App;
