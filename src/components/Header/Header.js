import React from "react";
import "./Header.css";

import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className='header'>
      <div className='header__logo'>LOGO</div>
      <div className='header__link'>
        <NavLink exact activeStyle={{ color: "#111" }} to='/'>
          EVENTS
        </NavLink>
        <NavLink exact activeStyle={{ color: "#111" }} to='/add-event'>
          ADD EVENT
        </NavLink>
        <NavLink exact activeStyle={{ color: "#111" }} to='/dashboard'>
          DASHBOARD
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
