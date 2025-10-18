import { M as fallback, N as store_mutate, F as store_get, I as unsubscribe_stores, O as bind_props, B as pop, z as push } from "../../../../chunks/index.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "clsx";
import "../../../../chunks/state.svelte.js";
import { s as storedOrder } from "../../../../chunks/storedOrder.js";
/* empty css                     */
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let data = $$props["data"];
  let drink = fallback($$props["drink"], () => data.drink, true);
  store_mutate($$store_subs ??= {}, "$storedOrder", storedOrder, store_get($$store_subs ??= {}, "$storedOrder", storedOrder).drink = drink);
  $$payload.out.push(`<div class="order-form">`);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <div class="order-buttons"><button class="bar-button small">Review Order</button></div></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { data, drink });
  pop();
}
export {
  _page as default
};
