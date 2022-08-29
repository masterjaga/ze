import logo from './logo.svg';
import './App.css';
import {Route, Routes, useLocation, Navigate} from "react-router-dom";
import { Dashboard } from './containers/Dashboard';
import { SideNavbar } from './containers/SideNavbar';
import { Login } from './containers/Login';
import { SignUp } from './containers/Signup';
import { Courses } from './containers/Courses';
import { CoursePage } from './containers/CoursePage';
import { Classes } from './containers/Classes';
import { Tasks } from './containers/Tasks';
import { TopNavBar } from './containers/TopNavBar';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/" || location.pathname === "/login" || location.pathname == "/signup";
  // console.log(location);

  // var userDetails = localStorage.getItem("user");
  // userDetails = userDetails && JSON.parse(userDetails);
  // const userName = userDetails.userName;
  return (
    <div className={!isLoginPage && localStorage.getItem("user") ? "appContainer" : ""}>
      {!isLoginPage && localStorage.getItem("user") && <TopNavBar />}
      <div className={!isLoginPage && localStorage.getItem("user") ? "bodyContainer" : "loginContainer"}>
        {!isLoginPage && localStorage.getItem("user") && <SideNavbar />}
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path = "/login" element = {<Login/>} />
          <Route path = "/signup" element = {<SignUp/>} />
          <Route path= "/dashboard" element={<Dashboard />} />
          <Route path = "/courses" element = {<Courses />} />
          <Route path = "/courses/:courseId" element = {<CoursePage />} />
          <Route path = "/classes" element = {<Classes />} />
          <Route path = "/tasks" element = {<Tasks />} />
          {/* <ProtectedRoutes path = "/dashboard" element = {<Dashboard />} />
          <ProtectedRoutes path = "/courses" element = {<Courses />} />
          <ProtectedRoutes path = "/courses/:courseId" element = {<CoursePage />} />
          <ProtectedRoutes path = "/classes" element = {<Classes />} />
          <ProtectedRoutes path = "/tasks" element = {<Tasks />} /> */}
        </Routes>
      </div>
    </div>   
  );
}


function ProtectedRoutes({path,element}){

  // var userDetails = localStorage.getItem("user");
  // userDetails = userDetails && JSON.parse(userDetails);
  // const userName = userDetails.userName;

 return (
  <>
    {localStorage.getItem("user") ? <Route path = {path} element = {element} /> : <Navigate to ="/login" /> }
  </>
  )
}


export default App;
