import "./topNavBar.css";
import { useNavigate } from 'react-router-dom';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export function TopNavBar() {
    const navigate = useNavigate();
  
    var userDetails = localStorage.getItem("user");
    userDetails = userDetails && JSON.parse(userDetails);
    const userName = userDetails.userName;
    // console.log(userDetails);


    const signout = ()=>{
    localStorage.clear();
    navigate("/login");


}
  return (
    <div className="topNavContainer">
        <div className="logo">LearnInfinity</div>
        <div className="userProfile">
            <div className="userWrapper">
                <div className="profileImage">{userName.charAt(0)}</div>
                <div className="name">{userName}</div>
            </div>
            <div className="signOut" onClick = {signout}>
                <PowerSettingsNewIcon />
                {/* <img src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/46-512.png"/> */}
            </div>
        </div>
    </div>
  );
}