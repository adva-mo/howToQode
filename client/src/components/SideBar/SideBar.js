import React from "react";
import { slide as Menu } from "react-burger-menu";
import Navbar from "../Navbar/Navbar";
import "./sidebar.css";
//es
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <Menu left>
      <Navbar />
    </Menu>
  );
}

export default SideBar;
