<script lang="ts">
	import { Input } from '$lib/atoms/input/index.js';
	import { Button } from '$lib/atoms/button/index.js';
	import { cn } from '$lib/utils/index.js';

	interface Props {
		placeholder?: string;
		class?: string;
		onsearch?: (value: string) => void;
		value?: string;
		disabled?: boolean;
	}

	let {
		placeholder = 'Search...',
		class: className,
		onsearch,
		value = $bindable(''),
		...restProps
	}: Props = $props();

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		onsearch?.(value);
	}
</script>

<form onsubmit={handleSubmit} class={cn('flex w-full items-center space-x-2', className)}>
	<Input
		type="search"
		{placeholder}
		bind:value
		class="flex-1"
		{...restProps}
	/>
	<Button type="submit" variant="outline" size="icon">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<circle cx="11" cy="11" r="8"></circle>
			<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
		</svg>
	</Button>
</form>
