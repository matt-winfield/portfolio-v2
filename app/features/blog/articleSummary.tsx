import { Link } from '@remix-run/react';
import { Article } from '../content/articles';
import { format } from 'date-fns';
import { TagList } from './tagList';

interface ArticleSummaryProps {
    article: Article;
}

export const ArticleSummary = ({ article }: ArticleSummaryProps) => {
    return (
        <Link
            to={`/blog/${article.slug}`}
            className="group rounded bg-card px-5 py-3"
        >
            <div className="flex flex-col sm:flex-row">
                <div className="flex-1 text-xl transition-colors group-hover:text-accent-foreground">
                    {article.title}
                </div>
                {article.publishedAt && (
                    <div className="text-sm text-muted-foreground">
                        {format(new Date(article.publishedAt), 'd MMM yyyy')}
                    </div>
                )}
            </div>
            {article.description && (
                <div className="text-muted-foreground">
                    {article.description}
                </div>
            )}
            {article.tags && <TagList tags={article.tags} />}
        </Link>
    );
};
