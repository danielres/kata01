<script>
	import { fade } from 'svelte/transition'
	import Avatar from '../../Avatar.svelte'
	import Bell from '../../icons/Bell.svelte'

	export let items = []

	let isOpen = false
	const toggle = () => (isOpen = !isOpen)
</script>

<div class="md:ml-6 flex items-center ml-4">
	<button
		type="button"
		class="hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white p-1 text-gray-400 bg-gray-800 rounded-full"
	>
		<span class="sr-only">View notifications</span>
		<Bell />
	</button>

	<!-- Profile dropdown -->
	<div class="relative ml-3">
		<div>
			<button
				on:click={toggle}
				type="button"
				class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white flex items-center max-w-xs text-sm bg-gray-800 rounded-full"
				id="user-menu-button"
				aria-expanded="false"
				aria-haspopup="true"
			>
				<span class="sr-only">Open user menu</span>

				<div class="w-8 h-8">
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
		@apply absolute right-0 w-48 mt-2 origin-top-right;
		@apply py-1 bg-white rounded-md shadow-lg;
		@apply ring-1 ring-black ring-opacity-5 focus:outline-none;
	}
	button > :global(svg) {
		@apply w-6 h-6;
	}
</style>
