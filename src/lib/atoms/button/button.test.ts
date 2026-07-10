import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Button } from '$lib/index.js';

describe('Button', () => {
	it('renders button with text', () => {
		render(Button);
		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('applies default variant', () => {
		render(Button);
		const button = screen.getByRole('button');
		expect(button).toHaveClass('bg-primary');
	});

	it('applies destructive variant', () => {
		render(Button, { props: { variant: 'destructive' } });
		const button = screen.getByRole('button');
		expect(button).toHaveClass('text-destructive');
	});

	it('can be disabled', () => {
		render(Button, { props: { disabled: true } });
		const button = screen.getByRole('button');
		expect(button).toBeDisabled();
	});
});
