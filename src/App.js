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
import MyCalendar from './Components/MyCalendar/MyCalendar';
import AnnouncementList from './Components/Announcements/AnnouncementList';
import { AnnouncementProvider } from './Components/Announcements/Announcementcontext';
import StudLandMain from './Components/StudLand/StudLandMain';
import Fyit from './Components/Fyit/Fyit';
import Registration from './Components/Registration/Registration';
import Studentinfo from './Components/Studentinfo/Studentinfo';
import TeachLandMain from './Components/TeachLand/TeachLand';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Navbar2 from './Components/StudNav/Navbar2';
import Navbar3 from './Components/TeachNav/Navbar3';
import Navbar1 from './Components/Navbar/Navbar1';
import Teachfoot from './Components/Teachfoot/Teachfoot'
import Studfoot from './Components/Studfoot/Studfoot'
function App() {
  return (
    <AnnouncementProvider>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/courses" element={<Courses />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/professor" element={<Professor />} />
            <Route path="/calendar" element={<MyCalendar />} />
            <Route path="/studentlogin" element={<StudLandMain />} />
            <Route path="/Fyit" element={<Fyit />} />
            <Route path="/studentlogin/Info" element={<Studentinfo />} />
            <Route path="/studentlogin/Registration" element={<Registration />} />
            <Route path="/studentlogin/calendar" element={<MyCalendar />} />
            <Route path="/Teachlogin" element={<TeachLandMain />} />
            <Route path="/Teachlogin/Info" element={<Studentinfo />} />
            <Route path="/Teachlogin/Registration" element={<Registration />} />
            <Route path="/Teachlogin/calendar" element={<MyCalendar />} />
            <Route path="/error200" element={<ForgotPassword />} />
            
            <Route path="/studentlogin/announcements" element={
              <>
                <Navbar2 />
                <AnnouncementList isTeacher={false} />
                <Studfoot />
              </>
            } />
            <Route path="/Teachlogin/announcements" element={
              <>
                <Navbar3 />
                <AnnouncementList isTeacher={true} />
                <Teachfoot />
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
    </AnnouncementProvider>
  );
}

export default App;
