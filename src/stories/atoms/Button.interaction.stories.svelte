<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect, userEvent, within } from 'storybook/test';
	import { Button } from '$lib/atoms/button/index.js';

	const { Story } = defineMeta({
		title: 'Atoms/Button/Interaction',
		component: Button,
		tags: ['autodocs']
	});
</script>

<Story name="Click Test" play={async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	const button = canvas.getByRole('button', { name: /click me/i });
	
	// Verify button is rendered
	await expect(button).toBeInTheDocument();
	
	// Click the button
	await userEvent.click(button);
	
	// Verify the click was registered (you can add assertions here)
	await expect(button).toBeVisible();
}}>
	<Button>Click Me</Button>
</Story>

<Story name="Disabled Button Test" play={async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	const button = canvas.getByRole('button', { name: /disabled/i });
	
	// Verify button is disabled
	await expect(button).toBeDisabled();
}}>
	<Button disabled>Disabled</Button>
</Story>
