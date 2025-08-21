import { TagList } from '@/features/blog/tagList';
import { articles } from '@/features/content/articles';
import syntaxHighlightingStyles from '@/styles/syntax-highlighting.css?url';
import { cn, useImageFadeIn } from '@/utils/misc';
import { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';
import { Link, Outlet, useLoaderData } from '@remix-run/react';
import { format } from 'date-fns';
import { ChevronLeft } from 'lucide-react';

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
            <div className="relative my-8 flex flex-col items-center gap-3 pb-2">
                <h1 className="text-center text-5xl">{article.title}</h1>
                <div className="flex items-center justify-center">
                    {article.tags && <TagList tags={article.tags} />}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px">
                    <div className="h-full w-full animate-pulse bg-gradient-to-r from-transparent via-accent-foreground to-transparent [animation-duration:4s]"></div>
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
                    <div className="text-lg">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ArticleLayout;
