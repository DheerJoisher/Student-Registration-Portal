import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MainPage from './Components/Main/MainPage';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import Courses from './Components/Courses/Courses';
import Professor from './Components/Professor/Professor';
import MyCalendar from './Components/MyCalendar/MyCalendar'
import AnnouncementList from './Components/Announcements/AnnouncementList';
import { AnnouncementProvider } from './Components/Announcements/Announcementcontext';
import StudLandMain from './Components/StudLand/StudLandMain';
import Fyit from './Components/Fyit/Fyit';
import Registration from './Components/Registration/Registration';
import Studentinfo from './Components/Studentinfo/Studentinfo';
import Teacherinfo from './Components/Teacherinfo/Teacherinfo';
import TeachLandMain from './Components/TeachLand/TeachLand';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Navbar2 from './Components/StudNav/Navbar2';
import Navbar3 from './Components/TeachNav/Navbar3';
import Navbar1 from './Components/Navbar/Navbar1';
import { CalendarProvider } from './Components/MyCalendar/CalendarContext';
function App() {
  return (
    <AnnouncementProvider>
    <CalendarProvider>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/courses" element={<Courses />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/professor" element={<Professor />} />
            
            <Route path="/studentlogin" element={<StudLandMain />} />
            <Route path="/Fyit" element={<Fyit />} />
            <Route path="/studentlogin/Info" element={<Studentinfo />} />
            <Route path="/studentlogin/Registration" element={<Registration />} />
            
            <Route path="/Teachlogin" element={<TeachLandMain />} />
            <Route path="/Teachlogin/Info" element={<Teacherinfo />} />
            <Route path="/Teachlogin/Registration" element={<Registration />} />
            
            <Route path="/error200" element={<ForgotPassword />} />
            <Route path="/studentlogin/calendar" element={
            <>
            <Navbar2 />
            <MyCalendar isTeacher={false} />
            <Footer />
            </>
            } />
            <Route path="/Teachlogin/calendar" element={
            <>
            <Navbar3 />
            <MyCalendar isTeacher={true} />
            <Footer />
            </>
          } />
            <Route path="/calendar" element={
            <>
            <Navbar1 />
            <MyCalendar isTeacher={false} />
            <Footer/>
            </>
          } />
            
            <Route path="/studentlogin/announcements" element={
              <>
                <Navbar2 />
                <AnnouncementList isTeacher={false} />
                <Footer />
              </>
            } />
            <Route path="/Teachlogin/announcements" element={
              <>
                <Navbar3 />
                <AnnouncementList isTeacher={true} />
                <Footer />
              </>
            } />
            <Route path="/announcements" element={
              <>
                <Navbar1 />
                <AnnouncementList isTeacher={false} />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </CalendarProvider>
    </AnnouncementProvider>
  );
}

export default App;
