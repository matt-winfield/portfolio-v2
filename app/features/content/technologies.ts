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
    icons: [],
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

export const technologies: Technology[] = [
    react,
    typescript,
    csharp,
    docker,
    angular,
    signalr,
    googleCloud,
    mysql,
];
