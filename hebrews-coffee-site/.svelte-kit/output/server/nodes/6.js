

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/place-order/_drink_/_page.svelte.js')).default;
export const universal = {
  "prerender": false,
  "ssr": false,
  "trailingSlash": "always"
};
export const universal_id = "src/routes/place-order/[drink]/+page.js";
export const imports = ["_app/immutable/nodes/6.DuNK8gbY.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/32AgLyXw.js","_app/immutable/chunks/CednUaVI.js","_app/immutable/chunks/B9VogUKh.js","_app/immutable/chunks/nEk7PoAX.js","_app/immutable/chunks/BhEDDVpo.js","_app/immutable/chunks/DoY-lUry.js","_app/immutable/chunks/u60f9ghS.js","_app/immutable/chunks/BqfYsc1i.js","_app/immutable/chunks/DS5nTQr6.js","_app/immutable/chunks/Dy2a0Pub.js","_app/immutable/chunks/CFuzEx9C.js","_app/immutable/chunks/hG6q-ZLG.js"];
export const stylesheets = ["_app/immutable/assets/app.Db6sXKQR.css"];
export const fonts = [];
