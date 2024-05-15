import React, { createContext, useState, useEffect } from 'react';

const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const initialEvents = [
    {
      title: 'Meeting',
      start: new Date(2024, 3, 25, 10, 0), // Month is zero-based
      end: new Date(2024, 3, 25, 12, 0),
    },
  ];

  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem('calendarEvents');
    return storedEvents ? JSON.parse(storedEvents) : initialEvents;
  });

  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const deleteEvent = (eventToDelete) => {
    setEvents(events.filter(event => event !== eventToDelete));
  };

  return (
    <CalendarContext.Provider value={{ events, addEvent, deleteEvent }}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContext;
