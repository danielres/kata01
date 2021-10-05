<script>
	import { page } from '$app/stores'
	export let items
</script>

<div class="flex items-baseline ml-10 space-x-4">
	{#each items as item}
		<a href={item.href} class="link" class:current={$page.path === item.href} aria-current="page"
			>{item.text}
		</a>
	{/each}
</div>

<style lang="postcss">
	.link:not(.current) {
		@apply hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium text-gray-300 rounded-md;
	}
	.link.current {
		@apply px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md;
	}
</style>
