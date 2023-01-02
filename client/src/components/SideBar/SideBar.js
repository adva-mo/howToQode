import React from "react";
import { slide as Menu } from "react-burger-menu";
import Navbar from "../Navbar/Navbar";
import "./sidebar.css";

function SideBar() {
  return (
    <Menu left>
      <Navbar />
    </Menu>
  );
}

export default SideBar;
