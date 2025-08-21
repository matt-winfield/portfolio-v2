export type Article = {
    slug: string;
    title: string;
    description?: string;
    publishedAt?: Date;
    updatedAt?: Date;
    tags?: string[];
    image?: string;
};

export const articles: Article[] = [
    {
        slug: 'full-stack-testing',
        title: 'How to approach testing, for a full-stack application',
        description:
            'My thoughts on approaches and best practices for testing frontend or full-stack applications.',
        publishedAt: new Date('2025-08-21'),
        updatedAt: new Date('2025-08-21'),
        tags: ['testing', 'frontend', 'full-stack', 'test driven development'],
    },
    {
        slug: 'lazy-loading-remix-translations',
        title: 'Lazy Loading Translations in Remix using i18next',
        description:
            "A single large translation file can hurt your loading times. Here's how to split it into multiple namespaces, and only download them when needed.",
        publishedAt: new Date('2023-10-22'),
        updatedAt: new Date('2023-10-22'),
        tags: [
            'Remix',
            'i18next',
            'i18n',
            'translations',
            'localisation',
            'React',
            'TypeScript',
        ],
        image: '/images/remix-translations-cover.jpg',
    },
];
