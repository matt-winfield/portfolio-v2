import { DateTime } from 'luxon';
import { startOfCareer } from '@/features/content/experience';
import { ArticleSummary } from '@/features/blog/articleSummary';
import { articles } from '@/features/content/articles';
import { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
    return [
        {
            title: 'Blog | Matt Winfield',
            description: "Matt Winfield's blog",
        },
    ];
};

export default function Blog() {
    const now = new Date();
    const experienceDuration = DateTime.fromJSDate(now).diff(
        DateTime.fromJSDate(startOfCareer),
        'years',
    );
    const yearsOfExperience = Math.floor(experienceDuration.years);

    return (
        <div className="container flex flex-col items-center">
            <div className="flex w-full flex-col items-center justify-center gap-2">
                <h1 className="flex w-full flex-col gap-2 text-center text-5xl sm:flex-row sm:justify-center">
                    <span>Matt Winfield</span>
                    <span className="hidden sm:block"> - </span>
                    <span className="text-3xl text-muted-foreground sm:text-5xl sm:text-foreground">
                        Blog
                    </span>
                </h1>
                <p className="my-1 max-w-2xl text-center text-2xl text-muted-foreground">
                    I&apos;m a software engineer with over {yearsOfExperience}{' '}
                    years of experience. I&apos;m passionate about building high
                    quality software and always improving. This blog is where I
                    share the things I&apos;ve learnt.
                </p>
            </div>
            <div className="my-3 flex w-full max-w-3xl flex-col gap-2">
                {articles.map((article) => (
                    <ArticleSummary article={article} key={article.slug} />
                ))}
            </div>
        </div>
    );
}
