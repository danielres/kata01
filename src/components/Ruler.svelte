<div class="flex items-center justify-between">
	<span class="line" />
	<span class="text"> <slot>Text</slot></span>
	<span class="line" />
</div>

<style lang="postcss">
	.line {
		@apply lg:w-1/4 w-1/4 border-b border-gray-300;
	}
	.text {
		@apply text-xs text-center text-gray-600 uppercase;
	}
</style>
