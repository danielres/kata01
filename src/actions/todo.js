import { tooltip } from '../components/renderless/Tooltip.svelte'

export const todo = (node, opts) => {
	node.onclick = (e) => e.preventDefault()
	node.classList.add('hover:ring-1')
	node.classList.add('ring-offset-4')
	node.classList.add('ring-gray-600')
	return tooltip(node, { ...opts, text: 'Todo' })
}
