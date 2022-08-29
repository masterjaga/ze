import logo from './logo.svg';
import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
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
  return (
    <div className={!isLoginPage ? "appContainer" : ""}>
      {!isLoginPage && <TopNavBar />}
      <div className={!isLoginPage ? "bodyContainer" : "loginContainer"}>
        {!isLoginPage && <SideNavbar />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path = "/login" element = {<Login/>} />
          <Route path = "/signup" element = {<SignUp/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path = "/courses" element = {<Courses />} />
          <Route path = "/courses/:courseId" element = {<CoursePage />} />
          <Route path = "/classes" element = {<Classes />} />
          <Route path = "/tasks" element = {<Tasks />} />
        </Routes>
      </div>
    </div>   
  );
}



export default App;
