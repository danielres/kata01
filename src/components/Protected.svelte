<script>
	import Backdrop from './Backdrop.svelte'
	import FadeIn from './FadeIn.svelte'
	import FormLogin from './forms/FormLogin.svelte'

	let user = false
</script>

{#if user}
	<slot />
{:else}
	<FadeIn>
		<Backdrop>
			<div class="box w-full max-w-sm space-y-5">
				<h1 class="heading">Sigin in to your account</h1>
				<FormLogin />
			</div>
		</Backdrop>
	</FadeIn>
{/if}

<style lang="postcss">
	.box {
		@apply p-6 bg-white rounded-md shadow-md;
	}
	.heading {
		@apply text-2xl font-light text-center text-gray-700;
	}
</style>
