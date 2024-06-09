import { Button } from '@/components/ui/button';
import { projects } from '@/features/content/projects';
import { TechnologyDisplay } from '@/features/technologyDisplay';
import { cn } from '@/utils/misc';
import { motion } from 'framer-motion';
import { useState, MouseEvent } from 'react';

const fallbackImageUrl = 'images/default-project-image.png';

export default function Projects() {
    const [activeProject, setActiveProject] = useState(projects[0].slug);

    const onProjectClick = (slug: string, event: MouseEvent) => {
        setActiveProject(slug);
        // Scroll the project button into the center if on mobile
        if (matchMedia('(min-width: 768px)').matches) return;
        (event.nativeEvent.target as HTMLElement | null)?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container flex flex-col gap-5 overflow-hidden md:flex-row"
        >
            <div className="flex overflow-x-auto md:flex-col md:overflow-y-auto md:overflow-x-visible">
                {projects.map((project) => (
                    <Button
                        key={project.slug}
                        variant="secondary"
                        className={cn(
                            'mx-1 md:mx-0 md:my-1',
                            activeProject === project.slug &&
                                'text-accent-foreground',
                        )}
                        onClick={(e) => onProjectClick(project.slug, e)}
                    >
                        {project.name}
                    </Button>
                ))}
            </div>
            <div className="relative flex-1">
                {projects.map((project) => (
                    <div
                        key={project.slug}
                        className={cn(
                            'flex h-full w-full flex-col items-center transition-opacity',
                            project.slug === activeProject
                                ? 'opacity-100 delay-100 duration-300'
                                : 'pointer-events-none absolute left-0 top-0 opacity-0 duration-200',
                        )}
                    >
                        <div className="my-2 w-full text-center text-3xl">
                            {project.name}
                        </div>
                        <img
                            className="my-1 max-h-60 max-w-full"
                            src={
                                project.images.length > 0
                                    ? `${project.images[0]?.url}`
                                    : fallbackImageUrl
                            }
                            alt={project.images[0]?.altText ?? project.name}
                        />
                        <div className="flex flex-wrap justify-center gap-1">
                            {project.technologies.map((technology) => (
                                <TechnologyDisplay
                                    key={technology.name}
                                    technology={technology}
                                />
                            ))}
                        </div>
                        <div>
                            <project.content />
                        </div>
                        <div className="my-1 flex flex-row gap-2 px-2">
                            {project.codeUrl && (
                                <Button asChild>
                                    <a
                                        href={project.codeUrl}
                                        className="text-xl"
                                    >
                                        Code
                                    </a>
                                </Button>
                            )}
                            {project.demoUrl && (
                                <Button asChild>
                                    <a
                                        href={project.demoUrl}
                                        className="text-xl"
                                    >
                                        Demo
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
