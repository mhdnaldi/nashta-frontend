import React from "react";
import "./Card.css";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonIcon from "@material-ui/icons/Person";
import moment from "moment";

const Card = (props) => {
  return (
    <div className='card'>
      <div className='card__image'>
        <img src={`http://localhost:3001/${props.images}`} alt='' />
      </div>
      <div className='card__title'>
        <div className='card__title_location'>
          <LocationOnIcon style={{ color: "#f36d2a" }} />
          <strong>{props.location}</strong>
        </div>
        <h3>{props.title}</h3>
        <p className='date'>{moment(props.date).format("LL")}</p>
      </div>
      <div className='card__title_participant'>
        <PersonIcon style={{ color: "rgb(225, 241, 245)" }} />
        <p>{props.participant}</p>
      </div>
      <div className='card__footer'>
        <p>Note: </p>
        <p>{props.note}</p>
      </div>
    </div>
  );
};

export default Card;
