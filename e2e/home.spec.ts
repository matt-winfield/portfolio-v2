import { test, expect } from '@playwright/test';

test('home page loads', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Matt Winfield | Digital Portfolio/);
    await expect(page.getByText('Matt Winfield')).toBeVisible();
});
