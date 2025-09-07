<script>
	import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    import { uppercaseComplexString } from '$lib/utils/helpers.js';
    import { storedOrder } from '$lib/stores/storedOrder.js';
    import '$lib/styles/app.css';

    export let data;
    export let drink = data.drink;
    $storedOrder.drink = drink;

    let mounted = false;

    let espressoOptions = ['regular-espresso', 'decaf-espresso'];
    let milkOptions = ['whole-milk', '2%-milk', 'half-and-half', 'oat-milk', 'coconut-milk'];
    let flavorOptions = ['no-flavor', 'vanilla', 'caramel', 'hazelnut', 'mocha', 'cinnamon', 'macadamia-nut', 'simple-syrup'];

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

    onMount(() => { mounted = true; });

    function stageOrder() {
        // Redirect to the order confirmation page
        goto('/place-order/${drink}/confirm');
    }
</script>
{#if mounted}
<h1>{uppercaseComplexString(drink)}</h1>

<div class="temp-select">
{#if options.hot}
    <button 
    on:click={() => storedOrder.update(o => ({...o, temp:'hot'}))} 
    class="temp-button">
        <img src={$storedOrder.temp === 'hot' 
        ? "/icons/hot_selected.svg" 
        : "/icons/hot_deselected.svg"} 
        alt="hot drink selector">
    </button>
{/if}

{#if options.iced}
    <button 
    on:click={() => storedOrder.update(o => ({...o, temp:'iced'}))} 
    class="temp-button">
        <img src={$storedOrder.temp === 'iced' 
        ? "/icons/iced_selected.svg" 
        : "/icons/iced_deselected.svg"} 
        alt="iced drink selector">
    </button>
{/if}
</div>

{#if $storedOrder.temp === 'iced' && options.iced}
    <h2>Iced</h2>
{:else}
    <h2>Hot</h2>
{/if}

<div class="drop-options">
    {#if options.espresso}
        <div class="customizer-select">
            <select id="espresso" class="bg-none" bind:value={$storedOrder.espresso}>
                {#each espressoOptions as option}
                    <option value={option}>{uppercaseComplexString(option)}</option>
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
            <select id="milk" class="bg-none" bind:value={$storedOrder.milk}>
                {#each milkOptions as option}
                    <option value={option}>{uppercaseComplexString(option)}</option>
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
            <select id="flavor" class="bg-none" bind:value={$storedOrder.flavor}>
                {#each flavorOptions as option}
                    <option value={option}>{uppercaseComplexString(option)}</option>
                {/each}
            </select>

            <span class="drop-arrow">
                <img src="/icons/simple_tailless_nav_arrow.svg" alt="Dropdown Arrow">
            </span>

            <span class="border-text">Flavor</span>
        </div>
    {/if}
</div>
{/if}

<div class="order-buttons">
<button class="bar-button small" on:click={stageOrder}>Review Order</button>
</div>