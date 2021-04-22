import React from "react";
import "./Home.css";

import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

const Home = (props) => {
  return (
    <>
      <Header />
      <div className='home'>
        <div className='home__card_list'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
