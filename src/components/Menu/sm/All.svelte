<script>
	import Avatar2 from './Avatar2.svelte'

	import Bell from '../../icons/Bell.svelte'

	import { page } from '$app/stores'
	export let items = {
		main: [],
		sub: []
	}
</script>

<div class="sm:px-3 px-2 pt-2 pb-3 space-y-1">
	{#each items.main as item}
		<a href={item.href} class="link" class:current={$page.path === item.href} aria-current="page">
			{item.text}
		</a>
	{/each}
</div>

<div class="pt-4 pb-3 border-t border-gray-700">
	<div class="flex items-center px-5">
		<div class="flex-shrink-0">
			<div class="w-10 h-10">
				<Avatar2 />
			</div>
		</div>

		<div class="ml-3">
			<div class="text-base font-medium leading-none text-white">Tom Cook</div>
			<div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
		</div>

		<button
			type="button"
			class="hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 rounded-full"
		>
			<span class="sr-only">View notifications</span>
			<Bell />
		</button>
	</div>

	<div class="px-2 mt-3 space-y-1">
		{#each items.sub as item}
			<a href={item.href} class="link">{item.text}</a>
		{/each}
	</div>
</div>

<style lang="postcss">
	.link {
		@apply hover:text-white hover:bg-gray-700 block px-3 py-2 text-base font-medium text-gray-400 rounded-md;
	}
	.link.current {
		@apply bg-black;
	}

	button > :global(svg) {
		@apply w-6 h-6;
	}
</style>
