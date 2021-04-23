import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";

import Pagination from "@material-ui/lab/Pagination";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import Input from "../../components/Input/Input";

const Dashboard = (props) => {
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState(1);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/events-pagination?search=${search}&page=${pagination}`
      )
      .then((res) => setEvents(res.data.data.result))
      .catch((err) => console.log(err.response));
  }, [search, pagination]);
  return (
    <>
      <Header />
      <div className='dashboard'>
        <Input
          style={{ border: "1px solid #111", margin: "20px 0" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Table events={events} />
        <div className='pagination'>
          <Pagination onChange={(e, page) => setPagination(page)} count={5} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
