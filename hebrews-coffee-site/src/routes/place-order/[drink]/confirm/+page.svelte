<script>
      import { goto } from '$app/navigation';

      import { clearStoredOrder, storedOrder } from '$lib/stores/storedOrder.js';
      import { addOrder } from '$lib/stores/orders.js';
      import { uppercaseComplexString } from '$lib/utils/helpers.js';
	import { onMount } from 'svelte';

      let submit_failed = false;

      let timeOptions = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM"];


      $: canSubmit = $storedOrder
        && ($storedOrder.name ?? "").toString().trim().length > 0
        && ($storedOrder.phone ?? "").toString().trim().length > 0;

    function setNextAvailableTime() {
        const now = new Date();

        for (const slot in timeOptions) {
            const slotTime = new Date();
            const [time, meridian] = slot.split(" ");
            const [hours, minutes] = time.split(":").map(Number);

            let slotHours = hours % 12;
            if (meridian === "PM") slotHours += 12;
            slotTime.setHours(slotHours, minutes, 0, 0);

            if (slotTime > now) {
                return slot;
            }
        }

        return timeOptions[timeOptions.length - 1];
    }

    function placeOrder() {

        if (!canSubmit) {
            submit_failed = true;
            return;
        }

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

    onMount (() => {$storedOrder.time_slot = setNextAvailableTime();});
</script>

{#if $storedOrder}
    <div class="confirm-window">
        <div class="confirm-details">
        <div>
            <strong> {uppercaseComplexString($storedOrder.temperature)} {uppercaseComplexString($storedOrder.drink)} </strong></div>
            <p><strong>Espresso:</strong> {uppercaseComplexString($storedOrder.espresso)}</p>
            <p><strong>Milk:</strong> {uppercaseComplexString($storedOrder.milk)}</p>
            <p><strong>Flavor:</strong> {uppercaseComplexString($storedOrder.flavor)}</p>
        </div>

        <div class="confirm-sidebar">
            <div class="customizer-select">
                <input bind:value={$storedOrder.name} id="name-input"
                type="text" required on:input={() => submit_failed = false}>
                <span class="border-text">Enter Name:</span>
            </div>

            <div class="customizer-select">
                <input bind:value={$storedOrder.phone} id="phone-input" 
                type="tel" required on:input={() => submit_failed = false}>
                <span class="border-text">Enter Phone Number:</span>
            </div>

            <div class="customizer-select">
                <select class="bg-none" bind:value={$storedOrder.time_slot} required on:input={() => submit_failed = false}>
                    {#each timeOptions as option}
                        <option value={option}>{option}</option>
                    {/each}
                </select>

                <span class="drop-arrow">
                    <img src="{base}/icons/simple_tailless_nav_arrow.svg" alt="Dropdown Arrow">
                </span>

                <span class="border-text">Choose Pickup Time:</span>
            </div>

            {#if submit_failed}
                <p>Please enter name, phone number and pickup time</p>
            {/if}

            <button class="bar-button" on:click={placeOrder} aria-disabled={!canSubmit}>Place Order</button>

            <button class="bar-button" on:click={editOrder}>Edit Order</button>
        </div>
    </div>
{:else}
    <p>No order to confirm. Please go back and customize your drink.</p>
{/if}