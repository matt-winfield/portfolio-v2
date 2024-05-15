import { Button } from '@/components/ui/button';
import { projects } from '@/features/content/projects';
import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';

const fallbackImageUrl = 'images/default-project-image.png';

export default function Projects() {
    return (
        <div className="container">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center justify-center gap-5"
            >
                {projects.map((project) => (
                    <div
                        key={project.slug}
                        className="group relative flex w-fit flex-col items-center rounded-md bg-card px-3 py-2 transition hover:scale-105"
                    >
                        <div className="my-2 w-fit text-3xl transition-colors group-hover:text-accent-foreground">
                            {project.name}
                        </div>
                        <div className="my-1 h-60">
                            <img
                                className="max-h-full max-w-full"
                                src={
                                    project.images.length > 0
                                        ? `${project.images[0]?.url}`
                                        : fallbackImageUrl
                                }
                                alt={project.images[0]?.altText ?? project.name}
                            />
                        </div>
                        <div className="absolute bottom-0 flex w-full flex-col items-center bg-background/90 transition-opacity group-hover:opacity-100 sm:opacity-80">
                            <div className="my-1 px-2">
                                <Button className="text-xl" asChild>
                                    <Link
                                        to={`/projects/${encodeURIComponent(
                                            project.slug,
                                        )}`}
                                    >
                                        Details
                                    </Link>
                                </Button>
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
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
