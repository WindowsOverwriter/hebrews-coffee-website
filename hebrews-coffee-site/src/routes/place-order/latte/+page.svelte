<script>
   import { goto } from '$app/navigation';
   import { onMount } from 'svelte';
   import { base } from '$app/paths';

   import { uppercaseComplexString } from '$lib/utils/helpers';
   import { storedOrder } from '$lib/stores/storedOrder';
   import '$lib/styles/app.css';

   $storedOrder.drink = 'latte';
   let mounted = false;
</script>

<div class="order-form">
   {#if mounted}

   {/if}
</div>