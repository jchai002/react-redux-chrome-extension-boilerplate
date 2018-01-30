export default (state = "", action) => {
  switch (action.type) {
    case "CHANGE_ROUTE":
      console.log("reducer", action.route);

      return action.route;
    default:
      return state;
  }
};
