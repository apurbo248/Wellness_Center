import './App.css';
import {findDOMNode} from 'react-dom';
import {
  BrowserRouter as  Router,
  Switch,
  Route,
  
} from "react-router-dom";

import TopBar from './allComponent/DashBoard/TopBar';
import Courses from './allComponent/Courses/Courses';
import { createContext, useState } from 'react';
import DashBoard from './allComponent/DashBoard/DashBoard';
import ManageCourse from './allComponent/ManageCourse/ManageCourse';
import ManageOrder from './allComponent/ManageOrder/OrderList';
import ManageTeacher from './allComponent/ManageTeacher/ManageTeacher';
import EditTeacher from './allComponent/ManageTeacher/EditTeacher';
import EditCourse from './allComponent/ManageCourse/EditCourse';
import CourseDetails from './allComponent/CourseDetails/CourseDetails';
import Registration from './allComponent/Registration/Registration';
import Login from './allComponent/Manager/Login';
import PrivateRoute from './allComponent/PtivateRoute/PrivateRoute';
import Review from './allComponent/Review/Review';
import EditReview from './allComponent/Review/EditReview';
import MyOrder from './allComponent/MyOrder/MyOrder';
import MakeAdmin from './allComponent/MakeAdmin/MakeAdmin';
import SideBar from './allComponent/DashBoard/SideBar';

export const userContext = createContext();

function App() {
  const [loogedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value = {[loogedInUser,setLoggedInUser]}>
    
    <Router>
   
      <Switch>
    <div className="">  
    <TopBar></TopBar>
    <SideBar/>
   <div className="">
        <Route exact path="/">
          <DashBoard></DashBoard>
        </Route>
        <Route  path="/login">
          <Login/>
        </Route>
        <Route  path="/Explore">
          <DashBoard></DashBoard>  
        </Route>
        <Route path="/courses">
          <Courses/>
        </Route>
        <Route path="/manage_courses">
          <ManageCourse/>
        </Route>
        <Route path="/manage_teacher">
          <ManageTeacher/>
        </Route>
        <Route path="/manage_order">
          <ManageOrder/>
        </Route>
        <Route path="/edit_teacher/:_id">
          <EditTeacher/>
        </Route>
        <Route path="/edit_course/:_id">
          <EditCourse/>
        </Route>
        <Route path="/course_details/:_id">
          <CourseDetails/>
        </Route>
        <Route path="/course/registration/:_id">
          <Registration/>
        </Route>
        <Route path="/review">
          <Review/>
        </Route>
        <Route path="/add_admin">
          <MakeAdmin/>
        </Route>
        <Route path="/my_order">
          <MyOrder/>
        </Route>
        <Route path="/manage_review">
          <EditReview/>
        </Route>
        </div>
     
     </div>
      </Switch>
    </Router>

  
  
    </userContext.Provider>
  );
}

export default App;
