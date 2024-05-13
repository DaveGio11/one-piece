const FETCH_CHAR_REQUEST = "FETCH_CHAR_REQUEST";
const FETCH_CHAR_SUCCESS = "FETCH_CHAR_SUCCESS";
const FETCH_CHAR_FAILURE = "FETCH_CHAR_FAILURE";

const fetchChar = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CHAR_REQUEST });
    try {
      const response = await fetch("https://dragonball-api.com/api/characters/" + `${id}`);
      const data = await response.json();
      dispatch({ type: FETCH_CHAR_SUCCESS, payload: data });
    } catch {
      dispatch({ type: FETCH_CHAR_FAILURE });
    }
  };
};

export { FETCH_CHAR_FAILURE, FETCH_CHAR_SUCCESS, FETCH_CHAR_REQUEST, fetchChar };
