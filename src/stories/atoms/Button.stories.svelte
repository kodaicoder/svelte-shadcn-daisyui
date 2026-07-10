<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Button } from '$lib/atoms/button/index.js';
	import { fn } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'Atoms/Button',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
			},
			size: {
				control: { type: 'select' },
				options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg']
			},
			disabled: { control: 'boolean' }
		},
		args: {
			onclick: fn()
		}
	});
</script>

<Story name="Default" args={{ variant: 'default' }}>
	<Button>Click me</Button>
</Story>

<Story name="Destructive" args={{ variant: 'destructive' }}>
	<Button>Delete</Button>
</Story>

<Story name="Outline" args={{ variant: 'outline' }}>
	<Button>Outline</Button>
</Story>

<Story name="Secondary" args={{ variant: 'secondary' }}>
	<Button>Secondary</Button>
</Story>

<Story name="Ghost" args={{ variant: 'ghost' }}>
	<Button>Ghost</Button>
</Story>

<Story name="Link" args={{ variant: 'link' }}>
	<Button>Link</Button>
</Story>

<Story name="Sizes">
	<div style="display: flex; gap: 0.5rem; align-items: center;">
		<Button size="xs">XS</Button>
		<Button size="sm">SM</Button>
		<Button size="default">Default</Button>
		<Button size="lg">LG</Button>
	</div>
</Story>

<Story name="Disabled" args={{ disabled: true }}>
	<Button>Disabled</Button>
</Story>
