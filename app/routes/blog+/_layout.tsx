/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
import { TagList } from '@/features/blog/tagList';
import { articles } from '@/features/content/articles';
import { cn, useImageFadeIn } from '@/utils/misc';
import { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';
import { Link, Outlet, useLoaderData } from '@remix-run/react';
import { format } from 'date-fns';
import { ChevronLeft } from 'lucide-react';
import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from 'node_modules/@mdx-js/react/lib';
import syntaxHighlightingStyles from '@/styles/syntax-highlighting.css?url';

export const links: LinksFunction = () => {
    return [
        { rel: 'stylesheet', href: syntaxHighlightingStyles, as: 'style' },
    ].filter(Boolean);
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const pathName = new URL(request.url).pathname;
    const articleSlug = pathName.toLowerCase().split('/').pop();

    const article = articles.find((a) => a.slug.toLowerCase() === articleSlug);

    if (!article) {
        throw new Response('Not Found', { status: 404 });
    }

    return { article };
};

const mdxComponents: MDXComponents = {
    h1: (props) => <h1 className="mb-2 mt-5 text-4xl font-bold" {...props} />,
    h2: (props) => <h2 className="mb-2 mt-4 text-3xl font-bold" {...props} />,
    h3: (props) => <h3 className="mb-2 mt-3 text-2xl font-bold" {...props} />,
    h4: (props) => <h4 className="mb-2 mt-2 text-xl font-bold" {...props} />,
    h5: (props) => <h5 className="mb-2 mt-1 font-bold" {...props} />,
    h6: (props) => <h6 className="mb-2 mt-0.5 font-semibold" {...props} />,
    p: (props) => <p className="my-2" {...props} />,
    a: (props) => (
        <a className="text-accent-foreground hover:underline" {...props} />
    ),
    ul: (props) => <ul className="list-inside list-disc" {...props} />,
    ol: (props) => <ol className="list-inside list-decimal" {...props} />,
    li: (props) => <li {...props} />,
    blockquote: (props) => (
        <blockquote className="border-l-4 border-gray-300 pl-2" {...props} />
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
        <div className="flex w-full items-center justify-center">
            <img className="max-h-[500px] w-auto" {...props} />
        </div>
    ),
};

const ArticleLayout = () => {
    const { article } = useLoaderData<typeof loader>();
    const { imageRef, imageClasses, props } = useImageFadeIn();

    return (
        <div className="container">
            <div className="mb-2">
                <Link to="/blog" className="flex gap-1">
                    <ChevronLeft />
                    <span>Back to blog</span>
                </Link>
            </div>
            <div className="my-8 flex flex-col items-center gap-3">
                <h1 className="text-center text-5xl">{article.title}</h1>
                <div className="flex items-center justify-center">
                    {article.tags && <TagList tags={article.tags} />}
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-full sm:w-4/5">
                    <div className="mb-3 text-sm text-muted-foreground">
                        {article.publishedAt && (
                            <div>
                                Published{' '}
                                {format(article.publishedAt, 'd MMM yyyy')}
                            </div>
                        )}
                        {article.updatedAt &&
                            article.publishedAt !== article.updatedAt && (
                                <div>
                                    Updated{' '}
                                    {format(article.updatedAt, 'd MMM yyyy')}
                                </div>
                            )}
                    </div>
                    {article.image && (
                        <div className="my-3">
                            <img
                                className={cn(
                                    'h-48 w-full object-cover sm:h-[30vh]',
                                    imageClasses,
                                )}
                                ref={imageRef}
                                src={article.image}
                                alt=""
                                {...props}
                            />
                        </div>
                    )}
                    <MDXProvider components={mdxComponents}>
                        <div className="text-lg">
                            <Outlet />
                        </div>
                    </MDXProvider>
                </div>
            </div>
        </div>
    );
};
export default ArticleLayout;
