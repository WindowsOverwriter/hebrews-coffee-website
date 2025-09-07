<script>
      import { goto } from '$app/navigation';

      import { clearStoredOrder, storedOrder } from '$lib/stores/storedOrder.js';
      import { addOrder } from '$lib/stores/orders.js';
      import { uppercaseComplexString } from '$lib/utils/helpers.js';

      function placeOrder() {
          // Add the order to the store
          addOrder($storedOrder);

         //Create success page URL
         const confirmPage = '/place-order/' + $storedOrder.drink + '/confirm/order-confirmation';

         // Clear the stored order
          clearStoredOrder();

          // Redirect to the order confirmation page
          goto(confirmPage);
      }

      function editOrder() {
         console.log($storedOrder.drink)
          // Redirect back to the drink customization page
          const orderPage = '/place-order/' + $storedOrder.drink.toLowerCase().replace(/ /g, '-');
          goto(orderPage);
      }
</script>

{#if $storedOrder}
    <h1>Confirm Your Order</h1>
    <p><strong>Drink:</strong> {uppercaseComplexString($storedOrder.drink)}</p>
    <p><strong>Temperature:</strong> {$storedOrder.temp}</p>
    {#if $storedOrder.espresso}
        <p><strong>Espresso:</strong> {$storedOrder.espresso}</p>
    {/if}
    {#if $storedOrder.milk}
        <p><strong>Milk:</strong> {$storedOrder.milk}</p>
    {/if}
    {#if $storedOrder.flavor && $storedOrder.flavor !== 'No Flavor'}
        <p><strong>Flavor:</strong> {$storedOrder.flavor}</p>
    {/if}

    <button on:click={placeOrder}>Place Order</button>
    <button on:click={editOrder}>Edit Order</button>
{:else}
    <p>No order to confirm. Please go back and customize your drink.</p>
{/if}