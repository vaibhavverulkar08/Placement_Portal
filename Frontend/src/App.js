import './App.css';
import { Categories } from './Home_page/Categories.js'
import { TPODashBoard } from './TPO_Dashbord/TOPDashBoard.js';
import { Tpologinpage } from './LogIn_page/Tpologinpage.js'
import { Passreset } from './Reset_Pass/Passreset.js'
import { Adminlogin } from './Admin/AdminLogin.js'
import { Admindashboard } from './Admin/AdminDashboard.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { DashBoard } from './TPO_Dashbord/DashBoard.js'
import { StudentList } from './TPO_Dashbord/StudentList.js'

// Suraj
import EduDetail from './Student_page/EduDetail.js';
import InternshipDetails from './Student_page/InternshipDetails.js';
import Projects from './Student_page/Projects.js';
import ResumeUpload from './Student_page/ResumeUpload.js';
import TechnicalSkills from './Student_page/TechnicalSkills.js';
import UpdateProfile from './Student_page/UpdateProfile.js';
import StudentDashboard from './Student_page/StudentDashboard.js';
import EditStudent from './Student_page/EditStudent';
import PostJob from './Student_page/PostJob';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PersInfo from './Student_page/PersInfo.js';
import JobPost from './Student_page/PostJob.js';

// Swapnil

import HrDashBoard from './Hr_dashboard/HrDashBoard.js';
import TPOlist from './Hr_dashboard/TPOlist.js';
import HRprofile from './Hr_dashboard/HRprofile.js';
import { Createjob } from './Hr_dashboard/Createjob.js';

// Laveena

import AdminLogin  from './Laveena_src/AdminLogin.js';
import DashBoard  from './Laveena_src/DashBoard.js';
import AddHrLists from './AddHrList.js';








function App() {
  return (
    
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/Admin" element={<Adminlogin />} />
          <Route path="/Admindashboard" element={<Admindashboard />} />
          <Route path="/Jobkart.com" element={<Categories />} />
          <Route path="/login" element={<Tpologinpage />} />
          <Route path="/reset" element={<Passreset />} />
          <Route path="/dash" element={<DashBoard />} />
          <Route path="/studentlist" element={<StudentList />} />
          
          <Route path="/studentdashbord" element={<StudentDashboard />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route path="/personaldetails" element={<PersInfo />} />
          <Route path="/educationaldetails" element={<EduDetail />} />
          <Route path="/skills" element={<TechnicalSkills />} />
          <Route path="/experience" element={<InternshipDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<ResumeUpload />} />
          <Route path="/studentjobpost" element={<JobPost/>} />

          {/* Swapnil */}

          <Route path="/hrdashbord" element={<HrDashBoard/>} />
          <Route path="/createjob" element={<Createjob/>} />
          <Route path="/tpolist" element={<TPOlist/>} />
          </Routes>
        </BrowserRouter>  
    </>

  );
}

export default App;





































