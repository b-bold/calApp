import './App.css';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const locales = {
  'en-US': require('date-fns/locale/en-US')
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
{
  title: 'Big Meeting',
  allDay: true,
  start: new Date(2023, 6, 12),
    end: new Date(2023, 6, 12)
},
{
  title: "Vacation",
  start: new Date(2023, 6, 12),
  end: new Date(2023, 6, 12)
},
{
  title: "Conference",
  start: new Date(2023, 6, 12),
  end: new Date(2023, 6, 12)
}
]



function App() {
  return (
    <div className="App">
     <Calendar 
      localizer={localizer} 
      events={events} 
      startAccessor="start" 
      endAccessor="end" 
      style={{height: 500, margin: "50px"}} 
    />
    </div>
  );
}

export default App;
