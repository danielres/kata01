<script>
	import { fade } from 'svelte/transition'
	import RenderlessTooltip from '../components/renderless/Tooltip.svelte'
</script>

<RenderlessTooltip let:options let:dimensions>
	{#if options.visible}
		<div
			in:fade={{ duration: 200 }}
			out:fade={{ delay: 200, duration: 200 }}
			class={`tooltip`}
			style="left: {dimensions.x + dimensions.width / 2}px; top: {dimensions.top}px;"
		>
			<span>{options.text}</span>
		</div>
	{/if}
</RenderlessTooltip>

<style lang="postcss">
	.tooltip {
		@apply fixed px-3 py-2 text-sm text-gray-100 bg-gray-800 rounded-md;
		@apply shadow-md;
		transform: translateX(-50%) translateY(calc(-100% - 9px));
		max-width: 10rem;
		z-index: 1000;
	}

	.tooltip:before {
		border-style: solid;
		border-width: 5px 5px 0 5px;
		border-color: theme('colors.gray.800') transparent transparent transparent;
		content: '';
		height: 0;
		position: absolute;
		left: calc(50% - 5px);
		bottom: -4px;
		width: 0;
	}
</style>
