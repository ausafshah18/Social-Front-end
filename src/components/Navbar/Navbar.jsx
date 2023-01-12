import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import { red } from "@mui/material/colors";


const NavBar = ()=> {

  

  const {toggle , darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}> {/* Link will not be in blue underline */}
          <span>Ausafsocial</span>
        </Link>

        <Link to="/" style={{color:"red"}}>
          <HomeOutlinedIcon/>
        </Link>

        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
          ) : (<DarkModeOutlinedIcon onClick={toggle} />
        )}


        <Link to={`/profile/${currentUser.id}`}  style={{color:"red"}} >
          <PersonOutlinedIcon/>
        </Link>

        <Link to="/login" style={{textDecoration:"none"}}> {/* Link will not be in blue underline */}
          <span>Logout</span>
        </Link>

        
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder="Search..."/>
        </div>
      </div>
      <div className="right">

        <GridViewOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
          <img  src={"/upload/" + currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
