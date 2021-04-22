import * as actionTypes from "./actionTypes";
import axios from "axios";

export const postStart = (payload) => {
  const formData = new FormData();
  formData.append("title", payload.title.value);
  formData.append("location", payload.location.value);
  formData.append("participant", payload.participant.value);
  formData.append("date", payload.date.value);
  formData.append("images", payload.image);
  formData.append("note", payload.note);
  return (dispatch) => {
    dispatch(postPending());
    axios
      .post(`http://localhost:3001/events`, formData)
      .then((res) => dispatch(postSuccess(res)))
      .catch((err) => dispatch(postFailed(err.response)));
  };
};

export const postPending = () => {
  return {
    type: actionTypes.POST_PENDING,
    loading: true,
  };
};
export const postSuccess = (payload) => {
  return {
    type: actionTypes.POST_SUCCESS,
    response: payload.data.message,
  };
};
export const postFailed = (err) => {
  // console.log(err.data.message);
  return {
    type: actionTypes.POST_FAILED,
    response: err.data.message,
  };
};

export const clearState = () => {
  return {
    type: actionTypes.CLEAR_STATE,
  };
};
