

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/check-order/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BMhelQnB.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/0z1sJvhk.js","_app/immutable/chunks/4tRy_9DW.js"];
export const stylesheets = [];
export const fonts = [];
