import React from "react";
import "./Card.css";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonIcon from "@material-ui/icons/Person";

const Card = (props) => {
  return (
    <div className='card'>
      <div className='card__image'></div>
      <div className='card__title'>
        <div className='card__title_location'>
          <LocationOnIcon style={{ color: "#f36d2a" }} />
          <strong>Jakarta</strong>
        </div>
        <h3>Meeting with CEO</h3>
        <p className='date'>20 Mei 1997</p>
      </div>
      <div className='card__title_participant'>
        <PersonIcon style={{ color: "rgb(225, 241, 245)" }} />
        <p>Muhammad Naldi</p>
      </div>
      <div className='card__footer'>
        <p>Note: </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Card;
