<script>
	import { fade } from 'svelte/transition'
	import Avatar from '../../Avatar.svelte'
	import Bell from '../../icons/Bell.svelte'

	export let items = []

	let isOpen = false
	const toggle = () => (isOpen = !isOpen)
</script>

<div class="ml-4 flex items-center md:ml-6">
	<button
		type="button"
		class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
	>
		<span class="sr-only">View notifications</span>
		<Bell />
	</button>

	<!-- Profile dropdown -->
	<div class="ml-3 relative">
		<div>
			<button
				on:click={toggle}
				type="button"
				class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
				id="user-menu-button"
				aria-expanded="false"
				aria-haspopup="true"
			>
				<span class="sr-only">Open user menu</span>

				<div class="h-8 w-8">
					<Avatar />
				</div>
			</button>
		</div>

		{#if isOpen}
			<div
				transition:fade={{ duration: 100 }}
				class="dropdown"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="user-menu-button"
				tabindex="-1"
			>
				<!-- Active: "bg-gray-100", Not Active: "" -->
				{#each items as item}
					<a
						href={item.href}
						class="block px-4 py-2 text-sm text-gray-700"
						role="menuitem"
						tabindex="-1"
					>
						{item.text}
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	.dropdown {
		@apply absolute origin-top-right right-0 mt-2 w-48;
		@apply rounded-md shadow-lg py-1 bg-white;
		@apply ring-1 ring-black ring-opacity-5 focus:outline-none;
	}
</style>
