<script>
	import Burger from '../../icons/Burger.svelte'
	import X from '../../icons/X.svelte'

	export let isOpen

	const toggle = () => {
		isOpen = !isOpen
	}
</script>

<button type="button" aria-controls="mobile-menu" aria-expanded="false" on:click={toggle}>
	<span class="sr-only">Open main menu</span>

	{#if isOpen}
		<X />
	{:else}
		<Burger />
	{/if}
</button>

<style lang="postcss">
	button {
		@apply bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700;
		@apply inline-flex items-center justify-center p-2;
		@apply rounded-md;
		@apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white;
	}
</style>
