import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D9VCZPon.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/0z1sJvhk.js","_app/immutable/chunks/4tRy_9DW.js","_app/immutable/chunks/mZYaVlXh.js","_app/immutable/chunks/Zq5Smagp.js","_app/immutable/chunks/ihxhlco1.js","_app/immutable/chunks/C3qje7M7.js","_app/immutable/chunks/GZJ2z3rj.js","_app/immutable/chunks/D-Lfi2MX.js"];
export const stylesheets = ["_app/immutable/assets/0.BdpqRjtK.css","_app/immutable/assets/app.Db6sXKQR.css"];
export const fonts = [];
