

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/check-order/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Bc9G_gDo.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/pDtgKXZk.js","_app/immutable/chunks/D7JtEr4O.js"];
export const stylesheets = [];
export const fonts = [];
