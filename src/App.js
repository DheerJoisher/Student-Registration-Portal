import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MainPage from './Components/Main/MainPage';
// import Login from './Components/Login/Login';
// import Navbar1 from './Components/Navbar/Navbar1';
// import Footer from './Components/Footer/Footer';
import Courses from './Components/Courses/Courses';
import Professor from './Components/Professor/Professor';
import MyCalendar from './Components/MyCalendar/MyCalendar';
import Announcements1 from './Components/Announcements/Announcements1';
import StudLandMain from './Components/StudLand/StudLandMain';
import Fyit from './Components/Fyit/Fyit';
import Registration from './Components/Registration/Registration';
import Studentinfo from './Components/Studentinfo/Studentinfo';

function App() {
  return (
    <Router>
        <div className="container">
          <Routes>
            <Route path="/courses" element={<Courses />} />
            {/* <Route path="/login" element={<Login />} /> */}
            {/* 
              If you have a page where you don't want Navbar and Footer, 
              don't include them in the Routes component.
            */}
            <Route path="/special-page" element={<SpecialPageContent />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/professor" element={<Professor />} />
            <Route path="/calendar" element={<MyCalendar />} />
            <Route path="/announcements" element={<Announcements1 />} />
            <Route path="/studentlogin" element={<StudLandMain />} />
            <Route path="/Fyit" element={<Fyit />} />
            <Route path="/studentlogin/Info" element={<Studentinfo />} />
            <Route path="/studentlogin/Registration" element={<Registration />} />
            <Route path="/studentlogin/announcements" element={<Studentinfo />} />
            <Route path="/studentlogin/calender" element={<Registration />} />
          </Routes>
        </div>
    </Router>
  );
}

// SpecialPageContent component without Navbar and Footer
function SpecialPageContent() {
  return (
    <>
      <h1>This is a special page without Navbar and Footer</h1>
      <p>This is the content of the special page.</p>
    </>
  );
}

export default App;
