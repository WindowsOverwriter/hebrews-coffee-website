

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/check-order/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CRwc5MZK.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/B298ACMR.js","_app/immutable/chunks/DN-Y5FX1.js"];
export const stylesheets = [];
export const fonts = [];
