import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
	await expect(page.getByText('Create a new chart using the navigation above.')).toBeVisible();
});

test('has ', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText('No savikjbkjbjkhed charts yet.\n' +
		'\n')).toBeVisible();
});
