<!-- Credit: Based on Renderless svelte https://github.com/stephane-vanraes/renderless-svelte/ -->
<script context="module">
	import { writable } from 'svelte/store'
	const defaultOptions = { visible: false, text: '' }

	const options = writable(defaultOptions)
	const dimensions = writable({
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		bottom: 0,
		left: 0,
		right: 0,
		top: 0
	})

	export const tooltip = (node, opts) => {
		let _opts = { ...opts, visible: true }

		const mouseover = () => {
			document.addEventListener('scroll', scroll)

			options.set(_opts)
			let dim = node.getBoundingClientRect()

			dimensions.set({
				x: dim.x,
				y: dim.y,
				width: dim.width,
				height: dim.height,
				bottom: dim.bottom,
				left: dim.bottom,
				right: dim.right,
				top: dim.top
			})
		}

		const mouseout = () => {
			document.addEventListener('scroll', scroll)
			options.set(defaultOptions)
		}

		const scroll = () => {
			let dim = node.getBoundingClientRect()

			dimensions.set({
				x: dim.x,
				y: dim.y,
				width: dim.width,
				height: dim.height,
				bottom: dim.bottom + window.scrollY,
				left: dim.bottom + window.scrollX,
				right: dim.right + window.scrollX,
				top: dim.top + window.scrollX
			})
		}

		node.addEventListener('mouseover', mouseover)
		node.addEventListener('mouseout', mouseout)

		return {
			destroy() {
				node.removeEventListener('mouseover', mouseover)
				node.removeEventListener('mouseout', mouseout)
			},
			update(opts) {
				_opts = opts
			}
		}
	}
</script>

<slot options={$options} dimensions={$dimensions} />
