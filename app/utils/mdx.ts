/**
 * Utility functions for MDX content processing
 */

/**
 * Generate URL-friendly IDs from header text content
 */
export function generateHeaderId(children: React.ReactNode): string {
    if (!children) return '';

    // Convert children to string, handling various React node types
    let text = '';
    if (typeof children === 'string') {
        text = children;
    } else if (Array.isArray(children)) {
        text = children
            .map((child) => (typeof child === 'string' ? child : ''))
            .join('');
    } else if (
        typeof children === 'object' &&
        children !== null &&
        'props' in children
    ) {
        // Handle React elements that might contain text
        text = String(children);
    }

    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Scroll to an element with a hash ID
 */
export function scrollToHash(id: string): void {
    window.history.pushState(null, '', `#${id}`);
    const element = document.getElementById(id);
    if (element) {
        const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth',
        });
    }
}
