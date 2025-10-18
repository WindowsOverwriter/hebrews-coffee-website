import { D as current_component, E as attr_class, F as store_get, G as slot, I as unsubscribe_stores, B as pop, z as push } from "../../chunks/index.js";
import { w as writable } from "../../chunks/exports.js";
import "@sveltejs/kit/internal";
import "../../chunks/utils.js";
import "clsx";
import "../../chunks/state.svelte.js";
/* empty css               */
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
const sideMenuOpen = writable(false);
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  onDestroy(() => {
  });
  $$payload.out.push(`<header class="top-bar svelte-158cp0c"><button class="hamburger-menu-icon svelte-158cp0c"><img src="/icons/hamburger_menu.svg" alt="Menu" class="svelte-158cp0c"/></button> <a class="logo-button svelte-158cp0c" href="/"><img src="/logo.svg" alt="Hebrews Coffee Logo" class="logo svelte-158cp0c"/></a> <div class="login-link svelte-158cp0c"><a href="/login" class="svelte-158cp0c">LOGIN</a></div></header> <div${attr_class("side-menu svelte-158cp0c", void 0, {
    "open": store_get($$store_subs ??= {}, "$sideMenuOpen", sideMenuOpen)
  })}><button class="menu-close-icon svelte-158cp0c"><img src="/icons/x_icon.svg" alt="Close Menu" class="svelte-158cp0c"/></button> <nav class="svelte-158cp0c"><a href="/" class="svelte-158cp0c">Home</a> <a href="/place-order" class="svelte-158cp0c">Place Order</a> <a href="/check-order" class="svelte-158cp0c">Check Order Status</a></nav> <div id="login" class="svelte-158cp0c"><a href="/login" class="svelte-158cp0c">Login</a></div></div> <main class="svelte-158cp0c"><!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></main>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
