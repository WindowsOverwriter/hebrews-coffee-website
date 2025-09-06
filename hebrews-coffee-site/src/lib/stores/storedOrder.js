import { writable }  from 'svelte/store';
import { browser } from '$app/environment';

function createPersistedStore() {
      //SSR guard
      if (!browser) {
         return writable({temp: 'hot', espresso: 'Regular Espresso', milk: 'Whole Milk', flavor: 'No Flavor'});
      }

      // Initialize store with value from localStorage if available, else use default values
      const stored = localStorage.getItem('storedOrder');
      const initial = stored ? JSON.parse(stored) : {temp: 'hot', espresso: 'Regular Espresso', milk: 'Whole Milk', flavor: 'No Flavor'};
      const store = writable(initial);

      // Subscribe to store changes and persist to localStorage
      store.subscribe((value) => {
            if (value) {
                  localStorage.setItem('storedOrder', JSON.stringify(value));
            }
            else {
                  localStorage.removeItem('storedOrder');   
            }
      });
      return store;
}

export function updatePersistedStore(newOrder) {
      storedOrder.set(newOrder);
      localStorage.setItem('storedOrder', JSON.stringify(newOrder));
      console.log("Updated persisted store:", newOrder);
}
export const storedOrder = writable(createPersistedStore());