import "./topNavBar.css";
import { useNavigate } from 'react-router-dom';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export function TopNavBar() {
  const navigate = useNavigate();
  var user = "John John";
  return (
    <div className="topNavContainer">
        <div className="logo">LearnInfinity</div>
        <div className="userProfile">
            <div className="userWrapper">
                <div className="profileImage">{user.charAt(0)}</div>
                <div className="name">John John</div>
            </div>
            <div className="signOut">
                <PowerSettingsNewIcon />
                {/* <img src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/46-512.png"/> */}
            </div>
        </div>
    </div>
  );
}