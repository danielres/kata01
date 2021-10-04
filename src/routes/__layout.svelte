<script>
	import Menu from '../components/Menu.svelte'
	import Protected from '../components/Protected.svelte'
	import Tooltip from '../components/Tooltip.svelte'
	import '../app.postcss'
</script>

<Tooltip />

<Protected>
	<Menu />
	<slot />
</Protected>
