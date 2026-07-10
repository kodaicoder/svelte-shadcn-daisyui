<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { FormField } from '$lib/molecules/form-field/index.js';

	const { Story } = defineMeta({
		title: 'Molecules/FormField',
		component: FormField,
		tags: ['autodocs'],
		argTypes: {
			label: { control: 'text' },
			placeholder: { control: 'text' },
			error: { control: 'text' },
			description: { control: 'text' },
			disabled: { control: 'boolean' }
		}
	});
</script>

<Story name="Default" args={{ label: 'Email', placeholder: 'Enter your email' }} />

<Story name="With Description" args={{ label: 'Email', placeholder: 'Enter your email', description: 'We will never share your email.' }} />

<Story name="With Error" args={{ label: 'Email', placeholder: 'Enter your email', error: 'Please enter a valid email address.' }} />

<Story name="Disabled" args={{ label: 'Email', placeholder: 'Enter your email', disabled: true }} />
