

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BfBZfjbB.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/B298ACMR.js","_app/immutable/chunks/DN-Y5FX1.js"];
export const stylesheets = [];
export const fonts = [];
