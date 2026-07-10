<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Dialog from '$lib/organisms/dialog/index.js';
	import { Button } from '$lib/atoms/button/index.js';

	const { Story } = defineMeta({
		title: 'Organisms/Dialog',
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<Dialog.Root>
		<Dialog.Trigger>
			<Button>Open Dialog</Button>
		</Dialog.Trigger>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Edit Profile</Dialog.Title>
				<Dialog.Description>
					Make changes to your profile here. Click save when you're done.
				</Dialog.Description>
			</Dialog.Header>
			<Dialog.Footer>
				<Button variant="outline">Cancel</Button>
				<Button>Save changes</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</Story>
