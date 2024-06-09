import type { Technology } from './content/technologies';

interface TechnologyProps {
    technology: Technology;
}

export const TechnologyDisplay = ({ technology }: TechnologyProps) => (
    <div
        key={technology.name}
        className="my-1 flex items-center justify-center gap-2 rounded-md bg-card px-3 py-2"
    >
        {technology.icons && (
            <div className="flex items-center justify-center gap-1">
                {technology.icons.map((Icon, index) => (
                    <Icon
                        key={`${technology.name}-${index}`}
                        className="h-[1em] w-[1em] fill-accent-foreground"
                    />
                ))}
            </div>
        )}
        <span>{technology.name}</span>
    </div>
);
