import {
    Technology,
    angular,
    csharp,
    docker,
    googleCloud,
    mysql,
    nextjs,
    prisma,
    react,
    remix,
    signalr,
    sqlite,
    tailwind,
    typescript,
} from './technologies';
import RayTracingContent from './projects/ray-tracing.mdx';
import ChessContent from './projects/chess.mdx';
import QuizBuzzerContent from './projects/lockdown-buzzer.mdx';
import ChessChallengeContent from './projects/mini-chess-bot.mdx';
import PortfolioContent from './projects/digital-portfolio.mdx';
import type { MDXProps } from 'mdx/types';
import { ComponentType } from 'react';

export type Project = {
    slug: string;
    name: string;
    codeUrl: string;
    demoUrl?: string;
    images: Array<{
        url: string;
        altText: string;
    }>;
    content: ComponentType<MDXProps>;
    technologies: Technology[];
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
        content: RayTracingContent,
        technologies: [typescript, react],
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
        content: ChessContent,
        technologies: [
            typescript,
            csharp,
            docker,
            angular,
            signalr,
            googleCloud,
            mysql,
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
        content: QuizBuzzerContent,
        technologies: [typescript, csharp, angular, signalr],
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
        content: ChessChallengeContent,
        technologies: [csharp],
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
        content: PortfolioContent,
        technologies: [
            typescript,
            react,
            remix,
            docker,
            tailwind,
            prisma,
            sqlite,
            nextjs,
        ],
    },
];
