
import './App.css';
// Swapnil
import { DashBoard } from './All page/Swapnil/DashBoard';
import { HrDashBoard } from './All page/Swapnil/HrDashBoard';
import { TPOlist } from './All page/Swapnil/TPOlist'
import { CreateJob } from './All page/Swapnil/CreateJob'
import { HRprofile } from './All page/Swapnil/HRprofile';


// //Rutuja 
// import { DashBoard } from './DashBoard';
// import { JobPost } from './JobPost'
// import { StudentList } from './All page/Rutu_src/StudentList'
// import { StudFilter } from './All page/Rutu_src/StudFilter';



function App() {
  return (
    <>
      <DashBoard />
      <HrDashBoard/ >
      <TPOlist />
      <CreateJob/>
      <HRprofile/>
    
      {/* //Rutuja  */}
      {/* <DashBoard/>  */}
      {/* <JobPost/> */}
      {/* <StudentList/> */}
      {/* <StudFilter/> */}
    </>
  );
}

export default App;
