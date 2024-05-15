import React, { createContext, useEffect, useState } from 'react';

const AnnouncementContext = createContext();

export const AnnouncementProvider = ({ children }) => {
  const initialAnnouncements = [
    {
      title: "End Semester Exams",
      details: "The End Semester Exams will be conducted from 24th May - 7th June."
    },
    {
      title: "Make-Up MST",
      details: "All students who have missed their Mid Semester papers due to any reasons, exams will be conducted for them from 29th April to 3rd May."
    },
    {
      title: "Practical Exams",
      details: "Practical Examinations will be conducted from 11th May - 15th May."
    }
  ];

  const [announcements, setAnnouncements] = useState(() => {
    const storedAnnouncements = localStorage.getItem('announcements');
    return storedAnnouncements ? JSON.parse(storedAnnouncements) : initialAnnouncements;
  });

  useEffect(() => {
    localStorage.setItem('announcements', JSON.stringify(announcements));
  }, [announcements]);

  const addAnnouncement = (announcement) => {
    setAnnouncements((prevAnnouncements) => [...prevAnnouncements, announcement]);
  };

  const deleteAnnouncement = (index) => {
    setAnnouncements((prevAnnouncements) => {
      const newAnnouncements = [...prevAnnouncements];
      newAnnouncements.splice(index, 1);
      return newAnnouncements;
    });
  };

  return (
    <AnnouncementContext.Provider value={{ announcements, addAnnouncement, deleteAnnouncement }}>
      {children}
    </AnnouncementContext.Provider>
  );
};

export default AnnouncementContext;
