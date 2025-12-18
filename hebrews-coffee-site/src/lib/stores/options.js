import { writable } from 'svelte/store';

//'regular-espresso', 'decaf-espresso'
//'whole-milk', '2%-milk', 'half-and-half', 'oat-milk', 'coconut-milk'
//'no-flavor', 'vanilla', 'caramel', 'hazelnut', 'mocha', 'cinnamon', 'macadamia-nut', 'simple-syrup'
export const espressoOptions = writable({'regular-espresso' : true, 'decaf-espresso' : true});
export const milkOptions = writable({'whole-milk' : true, '2%-milk' : true, 'half-and-half' : true, 'oat-milk' : true, 'coconut-milk' : true});
export const flavorOptions = writable({'no-flavor' : true, 'vanilla' : true, 'caramel' : true, 'hazelnut' : true, 'mocha' : true, 'cinnamon' : true, 'macadamia-nut' : true, 'simple-syrup' : true});

export function updateAvailableOptions(affectedList, key, value) {

   if (typeof value === 'boolean') {

      switch (affectedList) {

         case 'espresso':
            if (Object.hasOwn(espressoOptions, key)) {
               espressoOptions.key = value;
            }
            break;

         case 'milk':
            if (Object.hasOwn(milkOptions, key)) {
               milkOptions.key = value;
            }
            break;

         case 'flavor':
            if (Object.hasOwn(flavorOptions, key)) {
               flavorOptions.key = value;
            }
            break;
      }
   }

   return;
}
