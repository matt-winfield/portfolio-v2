import ReactIcon from '@/icons/react.svg?react';
import TypeScriptIcon from '@/icons/typescript.svg?react';
import CSharpIcon from '@/icons/csharp.svg?react';
import DockerIcon from '@/icons/docker.svg?react';
import AngularIcon from '@/icons/angular.svg?react';
import GoogleCloudIcon from '@/icons/googlecloud.svg?react';
import MySQLIcon from '@/icons/mysql.svg?react';
import RemixIcon from '@/icons/remix.svg?react';
import TailwindIcon from '@/icons/tailwindcss.svg?react';
import PrismaIcon from '@/icons/prisma.svg?react';
import SQLiteIcon from '@/icons/sqlite.svg?react';
import NextJSIcon from '@/icons/nextdotjs.svg?react';
import HTMLIcon from '@/icons/html5.svg?react';
import CSSIcon from '@/icons/css3.svg?react';
import JavaScriptIcon from '@/icons/javascript.svg?react';
import PostgresIcon from '@/icons/postgresql.svg?react';
import StyledComponentsIcon from '@/icons/styledcomponents.svg?react';
import ReduxIcon from '@/icons/redux.svg?react';
import GitIcon from '@/icons/git.svg?react';
import ProgressiveWebAppsIcon from '@/icons/pwa.svg?react';
import AmazonWebServicesIcon from '@/icons/amazonwebservices.svg?react';
import AzureIcon from '@/icons/microsoftazure.svg?react';
import MicrosoftIcon from '@/icons/microsoft.svg?react';
import GithubActionsIcon from '@/icons/githubactions.svg?react';

import { ComponentType, SVGProps } from 'react';

export type Technology = {
    name: string;
    icons: ComponentType<SVGProps<SVGSVGElement>>[];
};

export const react: Technology = {
    name: 'React',
    icons: [ReactIcon],
};

export const typescript: Technology = {
    name: 'TypeScript',
    icons: [TypeScriptIcon],
};

export const csharp: Technology = {
    name: 'C#',
    icons: [CSharpIcon],
};

export const docker: Technology = {
    name: 'Docker',
    icons: [DockerIcon],
};

export const angular: Technology = {
    name: 'Angular',
    icons: [AngularIcon],
};

export const signalr: Technology = {
    name: 'SignalR',
    icons: [MicrosoftIcon],
};

export const googleCloud: Technology = {
    name: 'Google Cloud Platform',
    icons: [GoogleCloudIcon],
};

export const mysql: Technology = {
    name: 'MySQL',
    icons: [MySQLIcon],
};

export const remix: Technology = {
    name: 'Remix',
    icons: [RemixIcon],
};

export const tailwind: Technology = {
    name: 'Tailwind CSS',
    icons: [TailwindIcon],
};

export const prisma: Technology = {
    name: 'Prisma',
    icons: [PrismaIcon],
};

export const sqlite: Technology = {
    name: 'SQLite',
    icons: [SQLiteIcon],
};

export const htmlCssJavascript: Technology = {
    name: 'HTML, CSS, JavaScript',
    icons: [HTMLIcon, CSSIcon, JavaScriptIcon],
};

export const nextjs: Technology = {
    name: 'Next.js',
    icons: [NextJSIcon],
};

export const sql: Technology = {
    name: 'SQL',
    icons: [PostgresIcon],
};

export const postgresql: Technology = {
    name: 'PostgreSQL',
    icons: [PostgresIcon],
};

export const styledComponents: Technology = {
    name: 'styled-components',
    icons: [StyledComponentsIcon],
};

export const redux: Technology = {
    name: 'Redux',
    icons: [ReduxIcon],
};

export const git: Technology = {
    name: 'Git',
    icons: [GitIcon],
};

export const progressiveWebApps: Technology = {
    name: 'Progressive Web Apps',
    icons: [ProgressiveWebAppsIcon],
};

export const amazonWebServices: Technology = {
    name: 'Amazon Web Services',
    icons: [AmazonWebServicesIcon],
};

export const azure: Technology = {
    name: 'Azure',
    icons: [AzureIcon],
};

export const githubActions: Technology = {
    name: 'GitHub Actions',
    icons: [GithubActionsIcon],
};

export const technologies: Technology[] = [
    typescript,
    react,
    htmlCssJavascript,
    csharp,
    sql,
    mysql,
    postgresql,
    sqlite,
    tailwind,
    styledComponents,
    prisma,
    remix,
    nextjs,
    angular,
    redux,
    progressiveWebApps,
    signalr,
    googleCloud,
    azure,
    amazonWebServices,
    githubActions,
    git,
    docker,
];
