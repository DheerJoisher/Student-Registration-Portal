import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Navbar1 from './../../Components/Navbar/Navbar1';
import Footer from './../../Components/Footer/Footer';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  return (
    <>
    <Navbar1 />
  <div style={{ height: 500 }}>
    <Calendar
      localizer={localizer}
      events={[
        {
          title: 'Meeting',
          start: new Date(2024, 3, 25, 10, 0), // Month is zero-based
          end: new Date(2024, 3, 25, 12, 0),
        },
        // Add more events as needed
      ]}
      startAccessor="start"
      endAccessor="end"
      style={{ margin: '50px' }}
    />
  </div>
  <Footer/>
  </>
)};

export default MyCalendar;
