<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Input } from '$lib/atoms/input/index.js';

	const { Story } = defineMeta({
		title: 'Atoms/Input',
		component: Input,
		tags: ['autodocs'],
		argTypes: {
			type: {
				control: { type: 'select' },
				options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search']
			},
			placeholder: { control: 'text' },
			disabled: { control: 'boolean' }
		}
	});
</script>

<Story name="Default" args={{ placeholder: 'Enter text...' }} />

<Story name="Password" args={{ type: 'password', placeholder: 'Enter password...' }} />

<Story name="Email" args={{ type: 'email', placeholder: 'Enter email...' }} />

<Story name="Disabled" args={{ disabled: true, placeholder: 'Disabled input' }} />
