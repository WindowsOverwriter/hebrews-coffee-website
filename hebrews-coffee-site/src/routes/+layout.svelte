<script>
	import { sideMenuOpen } from '../lib/stores/stores.js';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { base } from '$app/paths';
	import '$lib/styles/app.css';

	let buttonArea;
	let menuArea;

	onMount(() => {
		if (browser) {
			document.addEventListener('click', handleClickOutside);
		}
	});

	onDestroy(() => {
		if (browser) {
			document.removeEventListener('click', handleClickOutside);
		}
	});

	function handleClickOutside(event) {
		if (
			buttonArea &&
			!buttonArea.contains(event.target) &&
			menuArea &&
			!menuArea.contains(event.target)
		) {
			closeMenu();
		}
	}

	afterNavigate(() => {
		sideMenuOpen.set(false);
	});

	function closeMenu() {
		sideMenuOpen.set(false);
	}
</script>

<header class="top-bar">
	<button
		class="hamburger-menu-icon"
		on:click={() => sideMenuOpen.set(true)}
		bind:this={buttonArea}
	>
		<img src="{base}/icons/hamburger_menu.svg" alt="Menu" />
	</button>

	<a class="logo-button" href="/"><img src="{base}/icons/logo.svg" alt="Hebrews Coffee Logo" class="logo" /></a>

	<div class="login-link">
		<a href="/login">LOGIN</a>
	</div>
</header>

<div class="side-menu" class:open={$sideMenuOpen} bind:this={menuArea}>
	<button class="menu-close-icon" on:click={() => sideMenuOpen.set(false)}>
		<img src="{base}/icons/x_icon.svg" alt="Close Menu" />
	</button>

	<nav>
		<a href="/">Home</a>
		<a href="/place-order">Place Order</a>
		<a href="/check-order">Check Order Status</a>
	</nav>

	<div id="login"><a href="/login">Login</a></div>
</div>

<main>
	<slot />
</main>

<style>
	main {
		background-color: #fffaea;
	}

	.top-bar {
		position: relative;
		top: 0;
		box-sizing: border-box;
		width: 100%;
		height: 16vh;
		background-color: #ae7040;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-items: space-between;
		padding: 1em;
	}

	.hamburger-menu-icon {
		background: none;
		border: none;
		cursor: pointer;
	}

	.hamburger-menu-icon img {
		width: 8vh;
		height: 8vh;
		background-color: transparent;
	}

	.menu-close-icon {
		position: absolute;
		top: 1em;
		right: 1em;
		background: none;
		border: none;
		cursor: pointer;
	}

	.menu-close-icon img {
		width: 2em;
		height: 2em;
		background-color: transparent;
	}

	.logo-button {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		justify-content: center;
		height: 14vh;
	}

	.logo {
		width: 100%;
		height: 100%;
		background-color: transparent;
	}

	.login-link {
		position: absolute;
		right: 1em;
		color: #311f16;
	}

	.login-link a {
		text-decoration: none;
		color: #311f16;
	}

	.side-menu {
		position: fixed;
		top: 0;
		left: 0;
		width: 25vw;
		min-height: 100dvh;
		background-color: #fffaea;
		border-right: 3px solid #311f16;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		transition: transform 0.3s ease-in-out;
		transform: translateX(-100%);
	}

	@media (max-width: 768px) {
		.side-menu {
			width: 100vw;
			min-height: 100dvh;
		}
	}

	.side-menu.open {
		transform: translateX(0);
		z-index: 1000;
	}

	.side-menu nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 1em;
		padding-top: 1em;
		width: 100%;
	}

	.side-menu a {
		margin: 0.5em 0;
		text-decoration: none;
	}

	#login {
		margin-top: auto;
		margin-bottom: 0em;
		padding: 1em 0em;
		width: 100%;
		text-align: center;
		border-top: 3px solid #311f16;
	}

	.side-menu a:link {
		color: #311f16;
	}

	.side-menu a:visited {
		color: #311f16;
	}
</style>
