<script lang="ts">
	import { Input } from '$lib/atoms/input/index.js';
	import { Label } from '$lib/atoms/label/index.js';
	import { cn } from '$lib/utils/index.js';

	interface Props {
		label: string;
		id?: string;
		error?: string;
		description?: string;
		class?: string;
		type?: string;
		placeholder?: string;
		disabled?: boolean;
		value?: string;
		name?: string;
	}

	let {
		label,
		id = crypto.randomUUID(),
		error,
		description,
		class: className,
		...restProps
	}: Props = $props();
</script>

<div class={cn('space-y-2', className)}>
	<Label for={id}>{label}</Label>
	<Input id={id} aria-invalid={error ? 'true' : undefined} aria-describedby={description ? `${id}-description` : undefined} {...restProps} />
	{#if description}
		<p id="{id}-description" class="text-sm text-muted-foreground">{description}</p>
	{/if}
	{#if error}
		<p class="text-sm text-destructive">{error}</p>
	{/if}
</div>
