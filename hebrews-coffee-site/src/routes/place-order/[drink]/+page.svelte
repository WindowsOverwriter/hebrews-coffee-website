<script>
	import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    import { uppercaseComplexString } from '$lib/utils/helpers.js';
    import { storedOrder, updatePersistedStore } from '$lib/stores/storedOrder.js';
    import '$lib/styles/app.css';

    export let data;
    export let drink = data.drink;

    let espressoOptions = ['Regular Espresso', 'Decaf Espresso'];
    let milkOptions = ['Whole Milk', '2% Milk', 'Half and Half', 'Oat Milk', 'Coconut Milk'];
    let flavorOptions = ['No Flavor', 'Vanilla', 'Caramel', 'Hazelnut', 'Mocha', 'Cinnamon', 'Macadamia Nut', 'Simple Syrup'];

    const customizationOptions = {
        'latte' : {hot: true, iced: true, espresso: true, milk: true, flavor: true},
        'americano' : {hot: true, iced: true, espresso: true, milk: true, flavor: true},
        'cold-brew' : {hot: false, iced: true, espresso: false, milk: true, flavor: true},
        'chai-latte' : {hot: true, iced: true, espresso: false, milk: true, flavor: true},
        'dirty-chai-latte' : {hot: true, iced: true, espresso: true, milk: true, flavor: true},
        'london-fog' : {hot: true, iced: true, espresso: false, milk: true, flavor: true},
        'hot-chocolate' : {hot: true, iced: false, espresso: false, milk: true, flavor: false},
        'iced-tea' : {hot: false, iced: true, espresso: false, milk: false, flavor: true}
    }

    let options = customizationOptions[drink] ?? {hot: true, iced: true, espresso: true, milk: true, flavor: true};

    let order = {
        drink: drink,
        temp: $storedOrder.temp ? $storedOrder.temp : (options.hot ? 'hot' : 'iced'),
        espresso: $storedOrder.espresso,
        milk: $storedOrder.milk,
        flavor: $storedOrder.flavor
    };

    onMount(() => {
        var updateTriggers = document.getElementsByClassName('customizer-select');
        for (var trigger of updateTriggers) {
            trigger.addEventListener('change', () => {
                updatePersistedStore(order);
                console.log('Stored Order Updated:', $storedOrder);
            });
        }
    });

    function stageOrder() {
        //Save the current order to the store
        storedOrder.set(order);

        // Redirect to the order confirmation page
        goto('/place-order/${drink}/confirm');
    }
</script>

<h1>{uppercaseComplexString(drink)}</h1>

<div class="temp-select">
{#if options.hot}
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button on:click={() => order.temp = 'hot'} class="temp-button">
        <!-- svelte-ignore a11y_missing_attribute -->
        <img 
        src={order.temp === 'hot' ? "/icons/hot_selected.svg" : "/icons/hot_deselected.svg"}>
    </button>
{/if}

{#if options.iced}
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button on:click={() => order.temp = 'iced'} class="temp-button">
        <!-- svelte-ignore a11y_missing_attribute -->
        <img 
        src={order.temp === 'iced' ? "/icons/iced_selected.svg" : "/icons/iced_deselected.svg"}>
    </button>
{/if}
</div>

{#if order.temp === 'iced' && options.iced}
    <h2>Iced</h2>
{:else}
    <h2>Hot</h2>
{/if}

<div class="drop-options">
    {#if options.espresso}
        <div class="customizer-select">
            <select id="espresso" bind:value={order.espresso}>
                {#each espressoOptions as option}
                    <option value={option}>{option}</option>
                {/each}
            </select>

            <span class="drop-arrow">
                <img src="/icons/simple_tailless_nav_arrow.svg" alt="Dropdown Arrow">
            </span>

            <span class="border-text">Espresso</span>
        </div>
    {/if}

    {#if options.milk}
        <div class="customizer-select">
            <select id="milk" bind:value={order.milk}>
                {#each milkOptions as option}
                    <option value={option}>{option}</option>
                {/each}
            </select>

            <span class="drop-arrow">
                <img src="/icons/simple_tailless_nav_arrow.svg" alt="Dropdown Arrow">
            </span>

            <span class="border-text">Milk</span>
        </div>
    {/if}

    {#if options.flavor}
        <div class="customizer-select">
            <select id="flavor" bind:value={order.flavor}>
                {#each flavorOptions as option}
                    <option value={option}>{option}</option>
                {/each}
            </select>

            <span class="drop-arrow">
                <img src="/icons/simple_tailless_nav_arrow.svg" alt="Dropdown Arrow">
            </span>

            <span class="border-text">Flavor</span>
        </div>
    {/if}
</div>

<div class="order-buttons">
<button class="bar-button small" on:click={stageOrder}>Review Order</button>
</div>