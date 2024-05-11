import { cn } from '@/utils/misc';

type TagListProps = {
    tags: string[];
    className?: string;
};

export const TagList = ({ tags, className }: TagListProps) => {
    return (
        <div className={cn('flex flex-wrap justify-center gap-2', className)}>
            {tags.map((tag) => (
                <div key={tag} className="rounded bg-card-foreground px-2 py-1">
                    {tag}
                </div>
            ))}
        </div>
    );
};
