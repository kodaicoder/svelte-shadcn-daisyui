<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { SearchBar } from '$lib/molecules/search-bar/index.js';
	import { fn } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'Molecules/SearchBar',
		component: SearchBar,
		tags: ['autodocs'],
		argTypes: {
			placeholder: { control: 'text' },
			disabled: { control: 'boolean' }
		},
		args: {
			onsearch: fn()
		}
	});
</script>

<Story name="Default" args={{ placeholder: 'Search...' }} />

<Story name="Custom Placeholder" args={{ placeholder: 'Search for products...' }} />

<Story name="Disabled" args={{ placeholder: 'Search...', disabled: true }} />
