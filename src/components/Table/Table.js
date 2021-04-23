import React from "react";
import "./Table.css";
import moment from "moment";

const Table = (props) => {
  let element = null;
  if (props.events) {
    element = props.events.map((el, i) => (
      <tr key={el.id}>
        <td>{i + 1}</td>
        <td>{el.title}</td>
        <td>{el.location}</td>
        <td>{moment(el.date).format("LL")}</td>
        <td>{el.participant}</td>
        <td>{el.note}</td>
      </tr>
    ));
  }
  return (
    <div>
      <table className='events'>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Location</th>
            <th>Date</th>
            <th>Participant</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>{element}</tbody>
      </table>
    </div>
  );
};

export default Table;
