import { goTo } from "../actions/route";
import store from "../store";

/**
 * Binds a route to a DOM element because chrome extentions does not allow inline props like "onClick"
 * @param {string} id - the id of the element to bind the route to
 * @param {string} route - the route to bind to
 */
export default function bindClickListener(id, route) {
  document.getElementById(id).addEventListener("click", () => {
    store.dispatch(goTo(route));
  });
}
