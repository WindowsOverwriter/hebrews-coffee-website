function load({ params }) {
  const { drink } = params;
  return {
    drink
  };
}
const prerender = false;
export {
  load,
  prerender
};
