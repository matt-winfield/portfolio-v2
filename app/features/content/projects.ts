export type Project = {
    slug: string;
    name: string;
    codeUrl: string;
    demoUrl?: string;
    images: Array<{
        url: string;
        altText: string;
    }>;
};

export const projects: Project[] = [
    {
        slug: 'ray-tracing',
        name: 'Ray Tracing',
        codeUrl: 'https://github.com/matt-winfield/raytracing',
        demoUrl: 'https://raytracing.matt-winfield.com/',
        images: [
            {
                url: '/images/ray-tracing-screenshot.webp',
                altText: 'Ray tracing screenshot',
            },
        ],
    },
    {
        slug: 'chess',
        name: 'Chess',
        codeUrl: 'https://github.com/matt-winfield-chess',
        demoUrl: undefined,
        images: [
            {
                url: '/images/chess-screenshot.webp',
                altText: 'Chess screenshot',
            },
        ],
    },
    {
        slug: 'lockdown-buzzer',
        name: 'Lockdown Quiz Buzzer',
        codeUrl: 'https://github.com/matt-winfield-quiz',
        demoUrl: undefined,
        images: [
            {
                url: '/images/buzzer-screenshot.webp',
                altText: 'Buzzer Screenshot',
            },
        ],
    },
    {
        slug: 'mini-chess-bot',
        name: 'Mini Chess Bot Challenge',
        codeUrl: 'https://github.com/matt-winfield/SebLague-Chess-Challenge',
        demoUrl: undefined,
        images: [
            {
                url: '/images/chess-challenge-screenshot.png',
                altText: 'Chess Challenge Screenshot',
            },
        ],
    },
    {
        slug: 'portfolio',
        name: 'Digital Portfolio',
        codeUrl: 'https://github.com/matt-winfield/portfolio-remix/',
        demoUrl: 'https://www.matt-winfield.com/',
        images: [
            {
                url: '/images/portfolio-screenshot.png',
                altText: 'Digital portfolio screenshot',
            },
        ],
    },
];
