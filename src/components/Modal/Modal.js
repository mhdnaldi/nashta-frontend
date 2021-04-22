import React from "react";
import { clearState } from "../../store/action";
import { connect } from "react-redux";
import "./Modal.css";

const Modal = (props) => {
  if (props.children !== null) {
    setTimeout(() => {
      props.clearState();
    }, 3000);
  }
  return (
    <>
      <div className='modal'>
        <p>{props.children}</p>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearState: () => dispatch(clearState()),
  };
};

export default connect(null, mapDispatchToProps)(Modal);
