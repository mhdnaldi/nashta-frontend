import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

const Home = (props) => {
  const [cardList, setCardList] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3001/events")
      .then((res) => setCardList(res.data.result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(cardList);

  let cardElement = null;
  if (cardList) {
    cardElement = cardList.map((el) => (
      <Card
        key={el.id}
        title={el.title}
        location={el.location}
        note={el.note}
        participant={el.participant}
        date={el.date}
        images={el.images}
      />
    ));
  }
  return (
    <>
      <Header />
      <div className='home'>
        <div className='home__card_list'>{cardElement}</div>
      </div>
    </>
  );
};

export default Home;
