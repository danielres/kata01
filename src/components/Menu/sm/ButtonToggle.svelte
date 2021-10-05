<script>
	import Burger from '../../icons/Burger.svelte'
	import X from '../../icons/X.svelte'

	export let isOpen

	const toggle = () => (isOpen = !isOpen)
</script>

<button on:click={toggle} type="button" aria-controls="mobile-menu" aria-expanded={isOpen}>
	<span class="sr-only">Open main menu</span>

	{#if isOpen}
		<X />
	{:else}
		<Burger />
	{/if}
</button>

<style lang="postcss">
	button {
		@apply hover:text-white hover:bg-gray-700 text-gray-400 bg-gray-800;
		@apply inline-flex items-center justify-center p-2;
		@apply rounded-md;
		@apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white;
	}
	button > :global(svg) {
		@apply w-6 h-6;
	}
</style>
