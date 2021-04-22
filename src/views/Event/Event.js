import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { postStart } from "../../store/action";
import "./Event.css";

import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import img from "../../assets/img.jpg";
import ImageIcon from "@material-ui/icons/Image";

const Event = (props) => {
  const noteRef = useRef();
  const [image, setImage] = useState(undefined);
  const [form, setForm] = useState({
    title: {
      value: "",
      placeholder: "Title",
      type: "text",
    },
    location: {
      value: "",
      placeholder: "Location",
      type: "text",
    },
    participant: {
      value: "",
      placeholder: "Participant",
      type: "text",
    },
    date: {
      value: "",
      placeholder: "Date",
      type: "date",
    },
  });

  let inputElement = [];
  for (let key in form) {
    inputElement.push({
      id: key,
      config: form[key],
    });
  }

  inputElement = inputElement.map((el) => (
    <Input
      key={el.id}
      placeholder={el.config.placeholder}
      type={el.config.type}
      onChange={(e) => inputChangeHandler(e, el.id)}
    />
  ));

  const inputChangeHandler = (e, id) => {
    const updatedForm = { ...form };
    updatedForm[id].value = e.target.value;
    setForm(updatedForm);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      note: noteRef.current.value,
      image,
    };

    props.postStart(payload);
  };

  return (
    <>
      {props.response && <Modal>{props.response}</Modal>}
      <Header />
      <div className='event'>
        <div className='event__grid'>
          <div className='event__form'>
            <form onSubmit={submitFormHandler}>
              <div className='event__form--grid'>{inputElement}</div>
              <textarea placeholder='Note' ref={noteRef} />
              <div className='event__form--btn'>
                <div className='event__input--file'>
                  <p>Upload</p>
                  <ImageIcon style={{ color: "#f36d2a" }} />
                </div>
                <input
                  type='file'
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <Button type='submit'>Submit</Button>
              </div>
            </form>
          </div>
          <div className='event__img'>
            <h3>Add Event.</h3>
            <img src={img} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    response: state.response,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postStart: (payload) => dispatch(postStart(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Event);
