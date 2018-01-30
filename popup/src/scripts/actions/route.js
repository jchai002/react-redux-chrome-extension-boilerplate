export function goTo(route) {
  return dispatch => {
    dispatch({
      type: "CHANGE_ROUTE",
      route
    });
  };
}
