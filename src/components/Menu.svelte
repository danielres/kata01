<script>
	import Wide from './responsive/Wide.svelte'
	import Narrow from './responsive/Narrow.svelte'

	import SmAll from './Menu/sm/All.svelte'

	import ButtonToggle from './Menu/sm/ButtonToggle.svelte'
	import Logo from './Menu/Logo.svelte'
	import MdMain from './Menu/md/Main.svelte'

	import MdSub from './Menu/md/Sub.svelte'

	const items = {
		main: [
			{ text: 'Home', href: '/' },
			{ text: 'Todos', href: '/todos' }
		],
		sub: [
			{ text: 'Settings', href: '/settings' },
			{ text: 'Sign out', href: '/sign-out' }
		]
	}

	let isOpen
</script>

<nav class="bg-gray-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<Logo />
				</div>

				<Wide>
					<MdMain items={items.main} />
				</Wide>
			</div>

			<Wide>
				<MdSub items={items.sub} />
			</Wide>

			<Narrow>
				<div class="-mr-2 flex ">
					<ButtonToggle bind:isOpen />
				</div>
			</Narrow>
		</div>
	</div>

	{#if isOpen}
		<Narrow>
			<SmAll {items} />
		</Narrow>
	{/if}
</nav>
