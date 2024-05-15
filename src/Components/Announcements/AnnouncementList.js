import React, { useContext, useState } from 'react';
import './AnnouncementList.css';
import AnnouncementContext from './Announcementcontext';

const AnnouncementList = ({ isTeacher }) => {
  const { announcements, addAnnouncement, deleteAnnouncement } = useContext(AnnouncementContext);
  const [newAnnouncement, setNewAnnouncement] = useState({ title: '', details: '' });

  const handleAddAnnouncement = () => {
    if (newAnnouncement.title.trim() !== "" && newAnnouncement.details.trim() !== "") {
      addAnnouncement(newAnnouncement);
      setNewAnnouncement({ title: '', details: '' });
    }
  };

  const handleDeleteAnnouncement = (index) => {
    deleteAnnouncement(index);
  };

  return (
    <div className="announcement-page">
      <div className="announcement-list-container">
        <div className="announcement-list">
          <h2 className="announcement-title">Announcements</h2>
          <ul>
            {announcements.slice().reverse().map((announcement, index) => (
              <li key={index}>
                <h3>{announcement.title}</h3>
                <p>{announcement.details}</p>
                {isTeacher && (
                  <button className="delete-button" onClick={() => handleDeleteAnnouncement(announcements.length - 1 - index)}>Delete</button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isTeacher && (
        <div className="add-announcement-container">
          <h2 className="announcement-title">Add Announcement</h2>
          <div className="add-announcement">
            <input
              type="text"
              value={newAnnouncement.title}
              onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
              placeholder="Title"
            />
            <textarea
              value={newAnnouncement.details}
              onChange={(e) => setNewAnnouncement({ ...newAnnouncement, details: e.target.value })}
              placeholder="Details"
            />
            <button onClick={handleAddAnnouncement}>Add Announcement</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnnouncementList;
