<script>
	import { todo } from '../../actions/todo'
	import Button from './Button.svelte'
	import IconGoogle from '../icons/social/Google.svelte'
	import IconTwitter from '../icons/social/Twitter.svelte'
	import Ruler from '../Ruler.svelte'
</script>

<form class="space-y-6">
	<div class="space-y-4">
		<div>
			<label for="email">Email</label>
			<input id="email" type="email" name="email" required />
		</div>

		<div>
			<div class="flex items-center justify-between">
				<label for="password">Password</label>
				<a href="/todo" class="muted" use:todo>Forgot Password?</a>
			</div>
			<input id="password" type="password" name="password" required />
		</div>
	</div>

	<Button type="submit">Sign in</Button>
</form>

<Ruler>Or continue with</Ruler>

<div class="flex space-x-4">
	<div class="w-full" use:todo>
		<Button class="text-gray-600 bg-gray-200">
			<IconGoogle />
			<span class="sr-only">Google</span>
		</Button>
	</div>

	<div class="w-full" use:todo>
		<Button class="text-gray-600 bg-gray-200">
			<IconTwitter />
			<span class="sr-only">Twitter</span>
		</Button>
	</div>
</div>

<p class="muted font-light text-center">
	Don't have an account?
	<a use:todo href="/signup" class="hover:underline inline-block font-medium text-gray-500"
		>Create One</a
	>
</p>

<style lang="postcss">
	label {
		@apply block text-sm text-gray-800;
	}
	input {
		@apply block w-full px-4 py-2 mt-2;
		@apply text-gray-700 bg-white border rounded-md;
		@apply focus:border-blue-500 focus:outline-none focus:ring;
	}
	.muted {
		@apply text-xs text-gray-400;
	}
	a.muted {
		@apply hover:underline;
	}
</style>
