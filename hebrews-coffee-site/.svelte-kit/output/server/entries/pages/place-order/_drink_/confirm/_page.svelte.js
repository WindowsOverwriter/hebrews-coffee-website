import { G as store_get, R as ensure_array_like, N as escape_html, E as attr, S as maybe_selected, J as unsubscribe_stores, B as pop, z as push, K as stringify } from "../../../../../chunks/index.js";
import "@sveltejs/kit/internal";
import "../../../../../chunks/exports.js";
import "../../../../../chunks/utils.js";
import { b as base } from "../../../../../chunks/paths.js";
import "../../../../../chunks/state.svelte.js";
import { s as storedOrder } from "../../../../../chunks/storedOrder.js";
function uppercaseComplexString(name) {
  return name.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let canSubmit;
  let timeOptions = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM"
  ];
  canSubmit = store_get($$store_subs ??= {}, "$storedOrder", storedOrder) && (store_get($$store_subs ??= {}, "$storedOrder", storedOrder).name ?? "").toString().trim().length > 0 && (store_get($$store_subs ??= {}, "$storedOrder", storedOrder).phone ?? "").toString().trim().length > 0;
  if (store_get($$store_subs ??= {}, "$storedOrder", storedOrder)) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(timeOptions);
    $$payload.out.push(`<div class="confirm-window"><div class="confirm-details"><div><strong>${escape_html(uppercaseComplexString(store_get($$store_subs ??= {}, "$storedOrder", storedOrder).temperature))} ${escape_html(uppercaseComplexString(store_get($$store_subs ??= {}, "$storedOrder", storedOrder).drink))}</strong></div> <p><strong>Espresso:</strong> ${escape_html(uppercaseComplexString(store_get($$store_subs ??= {}, "$storedOrder", storedOrder).espresso))}</p> <p><strong>Milk:</strong> ${escape_html(uppercaseComplexString(store_get($$store_subs ??= {}, "$storedOrder", storedOrder).milk))}</p> <p><strong>Flavor:</strong> ${escape_html(uppercaseComplexString(store_get($$store_subs ??= {}, "$storedOrder", storedOrder).flavor))}</p></div> <div class="confirm-sidebar"><div class="customizer-select"><input${attr("value", store_get($$store_subs ??= {}, "$storedOrder", storedOrder).name)} id="name-input" type="text" required/> <span class="border-text">Enter Name:</span></div> <div class="customizer-select"><input${attr("value", store_get($$store_subs ??= {}, "$storedOrder", storedOrder).phone)} id="phone-input" type="tel" required/> <span class="border-text">Enter Phone Number:</span></div> <div class="customizer-select"><select class="bg-none" required>`);
    $$payload.select_value = store_get($$store_subs ??= {}, "$storedOrder", storedOrder).time_slot;
    $$payload.out.push(`<!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let option = each_array[$$index];
      $$payload.out.push(`<option${attr("value", option)}${maybe_selected($$payload, option)}>${escape_html(option)}</option>`);
    }
    $$payload.out.push(`<!--]-->`);
    $$payload.select_value = void 0;
    $$payload.out.push(`</select> <span class="drop-arrow"><img${attr("src", `${stringify(base)}/icons/simple_tailless_nav_arrow.svg`)} alt="Dropdown Arrow"/></span> <span class="border-text">Choose Pickup Time:</span></div> `);
    {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--> <button class="bar-button"${attr("aria-disabled", !canSubmit)}>Place Order</button> <button class="bar-button">Edit Order</button></div></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<p>No order to confirm. Please go back and customize your drink.</p>`);
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
