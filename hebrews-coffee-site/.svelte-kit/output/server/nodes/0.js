

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false,
  "trailingSlash": "always"
};
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CXnpsW9N.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/32AgLyXw.js","_app/immutable/chunks/CednUaVI.js","_app/immutable/chunks/B9VogUKh.js","_app/immutable/chunks/DoY-lUry.js","_app/immutable/chunks/BZmv0-94.js","_app/immutable/chunks/u60f9ghS.js","_app/immutable/chunks/DS5nTQr6.js","_app/immutable/chunks/C6Z2_Q8O.js","_app/immutable/chunks/EhsBt0o4.js"];
export const stylesheets = ["_app/immutable/assets/0.BdpqRjtK.css","_app/immutable/assets/app.Db6sXKQR.css"];
export const fonts = [];
