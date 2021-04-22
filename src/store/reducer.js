import * as actionTypes from "./actionTypes";

const initialState = {
  data: null,
  loading: false,
  response: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_PENDING:
      return {
        ...state,
        loading: action.loading,
      };
    case actionTypes.POST_SUCCESS:
      return {
        ...state,
        response: action.response,
        loading: false,
      };
    case actionTypes.POST_FAILED:
      return {
        ...state,
        respose: action.response,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
