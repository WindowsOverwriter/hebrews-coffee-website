import { E as attr, K as stringify } from "../../../../../../chunks/index.js";
/* empty css                           */
import { b as base } from "../../../../../../chunks/paths.js";
function _page($$payload) {
  $$payload.out.push(`<h1>Your order was placed successfully</h1> <div class="order-buttons"><a class="bar-button"${attr("href", `${stringify(base)}/`)}>Return to Home</a></div>`);
}
export {
  _page as default
};
