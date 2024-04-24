import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MainPage from './Components/Main/MainPage';

import Navbar1 from './Components/Navbar/Navbar1';
import Footer from './Components/Footer/Footer';
import Courses from './Components/Courses/Courses';
import Professor from './Components/Professor/Professor';
import MyCalendar from './Components/MyCalendar/MyCalendar';
import Announcements1 from './Components/Announcements/Announcements1';
import StudentC from './Components/Carousel/StudentC';


function App() {
  return (
    <>

      <Router>
        <Navbar1/>
       
        <div className="container">
          <Routes>
            <Route path="/courses" element={<Courses/>} />
            <Route path="/" element={<MainPage/>} />
            <Route path="/professor" element={<Professor/>} />
            <Route path="/Calendar" element={<MyCalendar/>} />
            <Route path="/Announcements" element={<Announcements1/>} />
            <Route path="/Carousel" element={<StudentC/>} />
            {/* <Route path="/login" element={<Login/>} /> */}



          </Routes>
        </div>
        <Footer/>

      </Router>



    </>
  );

}

export default App;
