// AnnouncementList.js
import React from 'react';
import './AnnouncementList.css';
import Navbar1 from './../../Components/Navbar/Navbar1';
import Footer from './../../Components/Footer/Footer';


let announcement=[
    {
        title:"End Semester Exams",
        details:"The End Semester Exams will be conducted from 24th May - 7th June."
    },
    {
        title:"Make-Up MST",
        details:"All students who have missed their Mid Semester papers due to any reasons, exams will be conducted for them from 29th April to 3rd May."
    },
    {
        title:"Practical Exams",
        detail:"Practical Examinations will be conducted from 11th May - 15th May."
    }
]
const AnnouncementList = () => {
  return (
      <div>
        <Navbar1 />
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
    <Footer />
      </div>
  );
}

export default AnnouncementList;
