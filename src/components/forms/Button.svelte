<script>
	export let type = 'button'
	const className = $$props.class ?? 'text-white bg-blue-500'
</script>

<button {type} class={className}>
	<slot />
</button>

<style lang="postcss">
	button {
		@apply w-full flex justify-center items-center;
		@apply px-3 py-2;
		@apply rounded-md text-sm font-medium;
		@apply opacity-80 hover:opacity-100 focus:opacity-100 focus:outline-none;
		@apply transition-opacity duration-200;
	}
	button > :global(*) {
		@apply mx-[0.2em];
	}
	button > :global(svg) {
		@apply flex-shrink-0 w-4 h-4;
	}
</style>
