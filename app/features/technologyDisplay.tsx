import { forwardRef } from 'react';
import type { Technology } from './content/technologies';

interface TechnologyDisplayProps {
    technology: Technology;
}

export const TechnologyDisplay = forwardRef<
    HTMLDivElement,
    TechnologyDisplayProps
>(({ technology }, ref) => (
    <div
        key={technology.name}
        ref={ref}
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
));
TechnologyDisplay.displayName = 'TechnologyDisplay';
