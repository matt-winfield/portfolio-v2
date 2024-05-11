import { articles } from '@/features/content/articles';
import { test, expect } from '@playwright/test';

test('blog articles list loads and can navigate to an article', async ({
    page,
}) => {
    await page.goto('/blog');

    await expect(page).toHaveTitle(/Blog/);
    const element = page.getByText(articles[0].title);
    await expect(element).toBeVisible();

    element.click();

    await page.waitForURL(`/blog/${articles[0].slug}`);
    expect(new URL(page.url()).pathname).toBe(`/blog/${articles[0].slug}`);
});

test('invalid blog article slug shows not found page', async ({ page }) => {
    await page.goto('/blog/some-invalid-slug');

    await expect(page.getByText("We can't find this page")).toBeVisible();
});
