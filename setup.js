#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function question(query) {
	return new Promise((resolve) => rl.question(query, resolve));
}

function run(command) {
	console.log(`\n> ${command}`);
	execSync(command, { stdio: 'inherit' });
}

async function main() {
	console.log('\n🎨 svelte-shadcn-daisyui Setup Script\n');

	const role = await question('What is your role?\n  1. Consumer (I just want to use components)\n  2. Maintainer (I want to contribute or fork)\n\nEnter choice (1 or 2): ');

	if (role !== '1' && role !== '2') {
		console.error('Invalid choice. Please enter 1 or 2.');
		process.exit(1);
	}

	const isMaintainer = role === '2';

	console.log(`\n✓ Role: ${isMaintainer ? 'Maintainer' : 'Consumer'}\n`);

	// Check if Tailwind is already installed
	const packageJsonPath = join(process.cwd(), 'package.json');
	const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
	const hasTailwind = packageJson.devDependencies?.tailwindcss || packageJson.dependencies?.tailwindcss;

	if (!hasTailwind) {
		console.log('📦 Installing Tailwind CSS...');
		run('pnpm add -D tailwindcss @tailwindcss/vite');

		// Update vite.config.ts
		const viteConfigPath = join(process.cwd(), 'vite.config.ts');
		if (existsSync(viteConfigPath)) {
			let viteConfig = readFileSync(viteConfigPath, 'utf-8');
			if (!viteConfig.includes('@tailwindcss/vite')) {
				viteConfig = viteConfig.replace(
					/import.*from 'vite';/,
					`import tailwindcss from '@tailwindcss/vite';\nimport { defineConfig } from 'vite';`
				);
				viteConfig = viteConfig.replace(
					/plugins: \[/,
					'plugins: [\n\t\ttailwindcss(),'
				);
				writeFileSync(viteConfigPath, viteConfig);
			}
		}

		// Create app.css if it doesn't exist
		const appCssPath = join(process.cwd(), 'src/routes/layout.css');
		if (!existsSync(appCssPath)) {
			writeFileSync(appCssPath, "@import 'tailwindcss';\n");
		}
	} else {
		console.log('✓ Tailwind CSS already installed');
	}

	// Install shadcn-svelte
	console.log('\n📦 Installing shadcn-svelte...');
	run('pnpm add bits-ui clsx tailwind-variants tailwind-merge');

	// Install DaisyUI
	console.log('\n📦 Installing DaisyUI...');
	run('pnpm add -D daisyui@beta');

	// Create theme.css if it doesn't exist
	const themeCssPath = join(process.cwd(), 'src/lib/theme.css');
	if (!existsSync(themeCssPath)) {
		writeFileSync(themeCssPath, `/* Theme Bridge: Maps DaisyUI theme variables to shadcn-svelte CSS variables */

:root {
  --primary: var(--color-primary);
  --primary-foreground: var(--color-primary-content);
  --secondary: var(--color-secondary);
  --secondary-foreground: var(--color-secondary-content);
  --destructive: var(--color-error);
  --destructive-foreground: var(--color-error-content);
  --muted: var(--color-base-200);
  --muted-foreground: var(--color-base-content);
  --accent: var(--color-accent);
  --accent-foreground: var(--color-accent-content);
  --border: var(--color-neutral);
  --background: var(--color-base-100);
  --foreground: var(--color-base-content);
  --card: var(--color-base-100);
  --card-foreground: var(--color-base-content);
  --popover: var(--color-base-100);
  --popover-foreground: var(--color-base-content);
  --input: var(--color-neutral);
  --ring: var(--color-primary);
  --radius: var(--radius-box);
}
`);
	}

	if (isMaintainer) {
		console.log('\n📦 Installing maintainer dependencies...');

		// Install Storybook
		run('pnpm add -D storybook @storybook/sveltekit @storybook/addon-svelte-csf @storybook/addon-vitest @storybook/addon-a11y @storybook/addon-docs @storybook/addon-interactions @chromatic-com/storybook');

		// Install changesets
		run('pnpm add -D @changesets/cli @changesets/changelog-github');

		// Install testing dependencies
		run('pnpm add -D vitest @testing-library/svelte @testing-library/jest-dom jsdom @vitest/browser-playwright @vitest/coverage-v8 playwright');

		// Initialize changesets
		if (!existsSync(join(process.cwd(), '.changeset'))) {
			run('npx changeset init');
		}

		console.log('\n✓ Maintainer setup complete!');
		console.log('\nNext steps:');
		console.log('  - Run `pnpm storybook` to start Storybook');
		console.log('  - Run `pnpm test` to run tests');
		console.log('  - Run `pnpm changeset` to create a changeset');
	} else {
		console.log('\n✓ Consumer setup complete!');
		console.log('\nNext steps:');
		console.log('  - Import components: import { Button } from "@ss-devs/svelte-components"');
		console.log('  - Add DaisyUI theme to your app.css');
	}

	rl.close();
}

main().catch((error) => {
	console.error('Setup failed:', error);
	process.exit(1);
});
