<script>
	import { page } from '$app/stores'
	export let items
</script>

<div class="ml-10 flex items-baseline space-x-4">
	{#each items as item}
		<a href={item.href} class="link" class:current={$page.path === item.href} aria-current="page"
			>{item.text}
		</a>
	{/each}
</div>

<style lang="postcss">
	.link:not(.current) {
		@apply text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium;
	}
	.link.current {
		@apply bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium;
	}
</style>
