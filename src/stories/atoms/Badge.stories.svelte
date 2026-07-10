<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Badge } from '$lib/atoms/badge/index.js';

	const { Story } = defineMeta({
		title: 'Atoms/Badge',
		component: Badge,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['default', 'secondary', 'destructive', 'outline']
			}
		}
	});
</script>

<Story name="Default" args={{ variant: 'default' }}>
	<Badge>Badge</Badge>
</Story>

<Story name="Secondary" args={{ variant: 'secondary' }}>
	<Badge>Secondary</Badge>
</Story>

<Story name="Destructive" args={{ variant: 'destructive' }}>
	<Badge>Destructive</Badge>
</Story>

<Story name="Outline" args={{ variant: 'outline' }}>
	<Badge>Outline</Badge>
</Story>
