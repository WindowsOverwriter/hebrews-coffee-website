

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false,
  "trailingSlash": "always"
};
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CtJm5AFW.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/pDtgKXZk.js","_app/immutable/chunks/D7JtEr4O.js","_app/immutable/chunks/B3Yr4pq7.js","_app/immutable/chunks/A4WjF5gX.js","_app/immutable/chunks/Dkbn17K0.js","_app/immutable/chunks/CH9_Thn8.js","_app/immutable/chunks/B8zlTyjN.js","_app/immutable/chunks/CHi7Fzj6.js","_app/immutable/chunks/imF_tLU3.js"];
export const stylesheets = ["_app/immutable/assets/0.BdpqRjtK.css","_app/immutable/assets/app.Db6sXKQR.css"];
export const fonts = [];
