import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions/authActions";
import "./Sidebar.css";

function Sidebar() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="sidebar">
      <div className="profile-section">
        <img
          src={require("../user1.jpeg")} 
          alt="Profile"
          className="profile-img"
        />
        <p className="profile-name">Hey, {username}</p>
      </div>
      <div className="menu">
        <ul>

          <li className="active">  <img
          src={require("../menu.png")} 
          alt="Profile"
          className="menu-bar-img"
        />All Tasks</li>
          <li>  <img src={require("../calendar.png")} 
          alt="Profile"
          className="calender-bar-img"
        />Today</li>
          <li>  <img src={require("../Vector.png")} 
          alt="Profile"
          className="calender-bar-img"
        />Important</li>
          <li>  <img src={require("../Vector1.png")} 
          alt="Profile"
          className="calender-bar-img"
        />Planned</li>
          <li>  <img src={require("../iwwa_assign.png")} 
          alt="Profile"
          className="calender-bar-img"
        />Assigned to me</li>
    
        </ul>
      </div>
     
      <img
          src={require("../Sidebar.png")} 
          alt="Profile"
          className="Sideimg"
        />

  

      <img
          src={require("../Side Panel Menu.png")} 
          alt="Profile"
          className="Side -img"
        />
    </div>
  );
}

export default Sidebar;
