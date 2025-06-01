import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
	await expect(page.getByText('Create a new chart using the navigation above.')).toBeVisible();
});
