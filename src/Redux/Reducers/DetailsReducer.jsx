import { FETCH_CHAR_FAILURE, FETCH_CHAR_SUCCESS, FETCH_CHAR_REQUEST, fetchChar } from "../Actions/detailsAction";

const initialState = {
  personaggio: null,
  loading: false,
  error: "",
};

const charReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAR_REQUEST:
      return { ...state, loading: true };

    case FETCH_CHAR_SUCCESS:
      return { ...state, error: "", personaggio: action.payload, loading: false };

    case FETCH_CHAR_FAILURE:
      return { ...state, error: "Non c'è", personaggio: null, loading: false };

    default:
      return state;
  }
};

export default charReducer;
