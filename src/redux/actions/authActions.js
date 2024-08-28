export const loginUser = (username) => (dispatch) => {

  dispatch({ type: "LOGIN_SUCCESS", payload: username });
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
};
