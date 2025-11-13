import { E as attr, K as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
function _page($$payload) {
  $$payload.out.push(`<div class="order-buttons"><a class="bar-button"${attr("href", `${stringify(base)}/place-order`)}>Place Order</a> <a class="bar-button"${attr("href", `${stringify(base)}/check-order`)}>Check Order Status</a></div>`);
}
export {
  _page as default
};
