<script>
	import Login from './forms/Login.svelte'

	let user = false
</script>

{#if user}
	<slot />
{:else}
	<Login />
{/if}
