

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/place-order/_drink_/confirm/order-confirmation/_page.svelte.js')).default;
export const universal = {
  "prerender": false,
  "ssr": false,
  "trailingSlash": "always"
};
export const universal_id = "src/routes/place-order/[drink]/confirm/order-confirmation/+page.js";
export const imports = ["_app/immutable/nodes/8.BU9cwK-_.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/32AgLyXw.js","_app/immutable/chunks/CednUaVI.js","_app/immutable/chunks/DoY-lUry.js","_app/immutable/chunks/CFuzEx9C.js"];
export const stylesheets = ["_app/immutable/assets/app.Db6sXKQR.css"];
export const fonts = [];
