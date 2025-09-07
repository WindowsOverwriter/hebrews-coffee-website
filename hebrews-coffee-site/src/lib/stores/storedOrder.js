import { writable }  from 'svelte/store';
import { browser } from '$app/environment';

const defaultOrder = {
      drink: '',
      temp: 'hot', 
      espresso: 'regular-espresso', 
      milk: 'whole-milk', 
      flavor: 'no-flavor'
};

export const storedOrder = writable(defaultOrder);

if (browser) {
      const stored = localStorage.getItem('storedOrder');
      if (stored) {
            storedOrder.set(JSON.parse(stored));
      }

      storedOrder.subscribe((value) => {
            localStorage.setItem('storedOrder', JSON.stringify(value));
      });
}

export function clearStoredOrder() {
      console.log('Clearing');
      storedOrder.set(defaultOrder);
      localStorage.removeItem('storedOrder');
}