import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import EventNoteIcon from "@material-ui/icons/EventNote";

import { NavLink } from "react-router-dom";

const Header = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className='header'>
      <div className='header__logo'>
        <div className='logo'>
          <EventNoteIcon
            fontSize='large'
            style={{
              color: "#2ac4f3",
            }}
          />
        </div>
        <div className='burger__menu'>
          <MenuIcon
            fontSize='large'
            onClick={() => setShow((prevState) => !prevState)}
          />
        </div>
      </div>
      <div className={`${show ? "header__link show" : "header__link none"}`}>
        <NavLink exact activeStyle={{ color: "#111" }} to='/'>
          HOME
        </NavLink>
        <NavLink exact activeStyle={{ color: "#111" }} to='/add-event'>
          ADD EVENT
        </NavLink>
        <NavLink exact activeStyle={{ color: "#111" }} to='/dashboard'>
          DASHBOARD
        </NavLink>
      </div>
      {show && (
        <div
          className='backdrop'
          onClick={() => setShow((prevState) => !prevState)}></div>
      )}
    </div>
  );
};

export default Header;
