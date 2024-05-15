import React, { useContext, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarContext from './CalendarContext';
import './MyCalendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ isTeacher }) => {
  const { events, addEvent, deleteEvent } = useContext(CalendarContext);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });

  const handleAddEvent = () => {
    const { title, start, end } = newEvent;
    if (title && start && end) {
      addEvent({
        title,
        start: new Date(start),
        end: new Date(end),
      });
      setNewEvent({ title: '', start: '', end: '' });
    }
  };

  const handleDeleteEvent = (event) => {
    deleteEvent(event);
  };

  return (
    <div className="calendar-page">
      {isTeacher && (
        <div className="event-form">
          <h2>Add Event</h2>
          <input
            type="text"
            placeholder="Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />
          <input
            type="datetime-local"
            placeholder="Start"
            value={newEvent.start}
            onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
          />
          <input
            type="datetime-local"
            placeholder="End"
            value={newEvent.end}
            onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
          />
          <button onClick={handleAddEvent}>Add Event</button>
        </div>
      )}
      <div className="calendar-container" style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onSelectEvent={isTeacher ? handleDeleteEvent : null}
        />
      </div>
    </div>
  );
};

export default MyCalendar;
