import { MDXComponents } from 'mdx/types';
import {
    LinkableH1,
    LinkableH2,
    LinkableH3,
    LinkableH4,
    LinkableH5,
    LinkableH6,
} from './linkableHeaders';

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
export const mdxComponents: MDXComponents = {
    h1: (props) => (
        <LinkableH1 className="mb-4 mt-10 text-4xl font-bold" {...props} />
    ),
    h2: (props) => (
        <LinkableH2 className="mb-4 mt-10 text-3xl font-bold" {...props} />
    ),
    h3: (props) => (
        <LinkableH3 className="mb-4 mt-8 text-2xl font-bold" {...props} />
    ),
    h4: (props) => (
        <LinkableH4 className="mb-3 mt-6 text-xl font-bold" {...props} />
    ),
    h5: (props) => <LinkableH5 className="mb-2 mt-6 font-bold" {...props} />,
    h6: (props) => (
        <LinkableH6 className="mb-1 mt-6 font-semibold" {...props} />
    ),
    p: (props) => <p className="my-2" {...props} />,
    a: (props) => (
        <a className="text-accent-foreground hover:underline" {...props} />
    ),
    ul: (props) => <ul className="list-inside list-disc pl-10" {...props} />,
    ol: (props) => <ol className="list-inside list-decimal pl-10" {...props} />,
    li: (props) => <li className="my-2" {...props} />,
    blockquote: (props) => (
        <blockquote
            className="mx-4 my-8 border-l-4 border-gray-300 pl-2"
            {...props}
        />
    ),
    pre: (props) => (
        <pre
            className="max-w-full overflow-x-auto rounded-lg bg-card text-foreground"
            {...props}
        />
    ),
    code: (props) => (
        <code
            className="w-fit rounded-lg bg-card p-1 text-foreground"
            {...props}
        />
    ),
    img: (props) => (
        <div className="m-2 flex w-full items-center justify-center">
            <img className="max-h-[500px] w-auto" {...props} />
        </div>
    ),
};
