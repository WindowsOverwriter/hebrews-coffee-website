<script>
    export let data;
    export let drink = data.drink;

    let espressoOptions = ['Regular Espresso', 'Decaf Espresso'];
    let milkOptions = ['Whole Milk', '2% Milk', 'Half and Half', 'Oat Milk', 'Coconut Milk'];
    let flavorOptions = ['Vanilla', 'Caramel', 'Hazelnut', 'Mocha', 'Cinnamon', 'Macadamia Nut', 'Simple Syrup', 'No Flavor'];

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

    $: options = customizationOptions[drink] ?? {hot: true, iced: true, espresso: true, milk: true, flavor: true};
    $: temp = options.hot;
    
    function formatDrinkName(name) {
        return name.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
    }
</script>

<h1>{formatDrinkName(drink)}</h1>

<div class="temp-select">
{#if options.hot}
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button on:click={() => temp = true} class="temp-button">
        <!-- svelte-ignore a11y_missing_attribute -->
        <img 
        src={temp ? "/icons/hot_selected.svg" : "/icons/hot_deselected.svg"}>
    </button>
{/if}

{#if options.iced}
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button on:click={() => temp = false} class="temp-button">
        <!-- svelte-ignore a11y_missing_attribute -->
        <img 
        src={!temp ? "/icons/iced_selected.svg" : "/icons/iced_deselected.svg"}>
    </button>
{/if}
</div>

{#if !temp}
    <h2>Iced</h2>
{:else}
    <h2>Hot</h2>
{/if}

<div class="drop-options">
    {#if options.espresso}
        <div class="customizer-select">
            <select id="espresso" bind:value={drink.espresso}>
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
            <select id="milk" bind:value={drink.milk}>
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
            <select id="flavor" bind:value={drink.flavor}>
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

<div>
</div>