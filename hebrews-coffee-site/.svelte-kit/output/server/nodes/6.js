

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/place-order/_drink_/_page.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false,
  "trailingSlash": "always"
};
export const universal_id = "src/routes/place-order/[drink]/+page.js";
export const imports = ["_app/immutable/nodes/6.CUo4zsz0.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/pDtgKXZk.js","_app/immutable/chunks/D7JtEr4O.js","_app/immutable/chunks/B3Yr4pq7.js","_app/immutable/chunks/BKURqBGS.js","_app/immutable/chunks/DoaI9ZX2.js","_app/immutable/chunks/A4WjF5gX.js","_app/immutable/chunks/CH9_Thn8.js","_app/immutable/chunks/DgrQxfD2.js","_app/immutable/chunks/B8zlTyjN.js","_app/immutable/chunks/CHi7Fzj6.js","_app/immutable/chunks/imF_tLU3.js","_app/immutable/chunks/CmkYJTsV.js"];
export const stylesheets = ["_app/immutable/assets/app.Db6sXKQR.css"];
export const fonts = [];
