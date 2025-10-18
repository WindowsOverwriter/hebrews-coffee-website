import { w as writable } from "./exports.js";
const defaultOrder = {
  drink: "",
  temperature: "hot",
  espresso: "regular-espresso",
  milk: "whole-milk",
  flavor: "no-flavor"
};
const storedOrder = writable(defaultOrder);
export {
  storedOrder as s
};
