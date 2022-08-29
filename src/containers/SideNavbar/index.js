import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sideNavbar.css";


export function SideNavbar(){

    const navigate = useNavigate();
    const [showNavBar, setNavBarVisibility] = useState(false);

    var userDetails = localStorage.getItem("user");
    userDetails = JSON.parse(userDetails);
    // console.log(userDetails);

    const signout = ()=>{
        localStorage.clear();
        navigate("/");
    }

    const handleMouseEnter = () => {
        setNavBarVisibility(true);
    }

    const handleMouseLeave = () => {
        setNavBarVisibility(false);
    }


    return(
        // <div className="sideBarWrapper">
        //     <div className = "ProfileWrapper">
        //         <div className = "userProfileWrapper">
        //             <div className = "userProfileIcon">{userDetails && userDetails.userName.charAt(0)}</div>
        //             <div className="userName">{userDetails && userDetails.userName}</div>
        //         </div>
        //     </div>
        //     <div className = "navBarItems">
        //         <div className="classesTag" ><Link to = "/classes">Classes</Link></div>
        //         <div className="coursesTag" ><Link to = "/courses">Courses</Link></div>
        //         <div className="tasksTag" ><Link to = "/tasks">Tasks</Link></div>
        //     </div>
        //     <div className = "signOut" onClick = {signout}>Sign Out</div>
        // </div>
        <div className={showNavBar ? "navBarContainer" : "collapsedNavbar"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="navBarItems">
                <div className="dashboardWrapper" onClick={()=> navigate("/dashboard")}>
                <img src="https://th.bing.com/th/id/R.3194491f45534ac4254454a4e0d3b0ba?rik=xb0CEePePFxVnA&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2014%2f03%2fneustar-sales-performance-management_247853.png&ehk=C2rB9R146LsVa%2be4xnzgC0i%2fGYwwOdA5sygabQPsGfQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"/>
                <h3>Dashboard</h3>
                </div>
                <div className="coursesText" onClick={()=> navigate("/courses")}>
                <img src="https://cdn3.iconfinder.com/data/icons/e-learning-flat/58/034_-_Certification-512.png"/>
                <div>Courses</div>
                </div>
                <div className="coursesText" onClick={()=> navigate("/classes")}>
                <img src="https://cdn1.iconfinder.com/data/icons/it-service-icons/48/10-512.png"/>
                <div>Classes</div>
                </div>
                <div className="coursesText" onClick={()=> navigate("/tasks")}>
                <img src="https://th.bing.com/th/id/R.5426596b4ab182d52724358f9162420b?rik=2%2fAjTUsyg9%2bkaw&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2ftask-icon-69.png&ehk=I6RTruOTYU0%2bcocIYpgw3FKekUGdH4zQVDJNIaDW3kg%3d&risl=&pid=ImgRaw&r=0"/>
                <div>Tasks</div>
                </div>
            </div>
        </div>
    );
}