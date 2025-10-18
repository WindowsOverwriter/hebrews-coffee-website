<script>
    import '$lib/styles/app.css';
    import { onMount } from 'svelte';
    import { clearStoredOrder } from '$lib/stores/storedOrder';

    onMount(() => { clearStoredOrder(); });
</script>

<div class="order-page">
    <h1 style="margin-top: 1rem;">Place Order</h1>

    <div class="order-buttons">
        <a class="bar-button" href="/place-order/latte">Latte</a>
        <a class="bar-button" href="/place-order/americano">Americano</a>
        <a class="bar-button" href="/place-order/cold-brew">Cold Brew</a>
        <a class="bar-button" href="/place-order/chai-latte">Chai Latte</a>
        <a class="bar-button" href="/place-order/dirty-chai-latte">Dirty Chai Latte</a>
        <a class="bar-button" href="/place-order/london-fog">London Fog</a>
        <a class="bar-button" href="/place-order/hot-chocolate">Hot Chocolate</a>
        <a class="bar-button" href="/place-order/iced-tea">Iced Tea</a>
    </div>
</div>