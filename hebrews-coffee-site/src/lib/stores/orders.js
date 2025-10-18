import { writable } from "svelte/store";

export const orders = writable([]);

const API_URL = "https://hebrews-coffee-website.onrender.com";

export async function fetchOrders() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch orders");
    }
    const data = await response.json();
    orders.set(data);
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
}

export async function addOrder(order) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
      });
      if (!response.ok) {
         throw new Error("Failed to add order");
      }
      const newOrder = await response.json();
      orders.update((currentOrders) => [...currentOrders, newOrder]);
  }
   catch (error) {
      console.error("Error adding order:", error);
   }
}