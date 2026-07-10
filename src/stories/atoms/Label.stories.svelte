<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Label } from '$lib/atoms/label/index.js';

	const { Story } = defineMeta({
		title: 'Atoms/Label',
		component: Label,
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<Label>Label text</Label>
</Story>

<Story name="With for attribute">
	<Label for="email">Email</Label>
</Story>
