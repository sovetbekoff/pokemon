import React from "react";
import "./Navbar.css";

interface NavbarProps {
  todoCount: number;
}
const Navbar: React.FC<NavbarProps> = ({ todoCount }) => {
  return (
    <div className="navbar_container">
      <div className="navbar_title">
        Todo list <b>{todoCount}</b>
      </div>
    </div>
  );
};

export default Navbar;
