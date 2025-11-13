import { E as attr, B as pop, z as push, K as stringify } from "../../../chunks/index.js";
/* empty css                  */
import { b as base } from "../../../chunks/paths.js";
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<div class="order-page"><h1 style="margin-top: 1rem;">Place Order</h1> <div class="order-buttons"><a class="bar-button"${attr("href", `${stringify(base)}/place-order/latte`)}>Latte</a> <a class="bar-button"${attr("href", `${stringify(base)}/place-order/americano`)}>Americano</a> <a class="bar-button"${attr("href", `${stringify(base)}/place-order/cold-brew`)}>Cold Brew</a> <a class="bar-button"${attr("href", `${stringify(base)}/place-order/chai-latte`)}>Chai Latte</a> <a class="bar-button"${attr("href", `${stringify(base)}/place-order/dirty-chai-latte`)}>Dirty Chai Latte</a> <a class="bar-button"${attr("href", `${stringify(base)}/place-order/london-fog`)}>London Fog</a> <a class="bar-button"${attr("href", `${stringify(base)}/place-order/hot-chocolate`)}>Hot Chocolate</a> <a class="bar-button"${attr("href", `${stringify(base)}/place-order/iced-tea`)}>Iced Tea</a></div></div>`);
  pop();
}
export {
  _page as default
};
