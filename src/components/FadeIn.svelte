<script>
	import { fade } from 'svelte/transition'

	let visible = false
	setTimeout(() => (visible = true), 250)
</script>

{#if visible}
	<div in:fade={{ duration: 1000 }}>
		<slot />
	</div>
{/if}
