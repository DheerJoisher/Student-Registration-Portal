// AnnouncementList.js
import React from 'react';
import './AnnouncementList.css';

let announcement=[
    {
        title:"Parso is holi",
        details:"Happy Holi"
    },
    {
        title:"Today we messed up",
        details:"messed up"
    },
    {
        title:"We did something good.",
        detail:"lmao noob"
    }
]
const AnnouncementList = () => {
  return (
    <div className="announcement-list">
      <h2>Announcements</h2>
      <ul>
        {announcement.map((announcement, index) => (
          <li key={index}>
            <h3>{announcement.title}</h3>
            <p>{announcement.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnnouncementList;
