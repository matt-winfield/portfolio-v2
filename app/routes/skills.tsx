import { motion } from 'framer-motion';
import { technologies } from '@/features/content/technologies';
import { TechnologyDisplay } from '@/features/technologyDisplay';

const skillsVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

const MotionTechnologyDisplay = motion(TechnologyDisplay);

export default function Skills() {
    return (
        <div className="container">
            <div className="flex flex-col items-center justify-center">
                <h1 className="mb-3 mt-2 text-4xl font-bold md:mb-5">
                    My Skills
                </h1>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.1 }}
                    className="flex max-w-3xl flex-wrap items-center justify-center gap-3 text-lg md:gap-5 md:text-xl"
                >
                    {technologies.map((technology) => (
                        <MotionTechnologyDisplay
                            key={technology.name}
                            variants={skillsVariants}
                            technology={technology}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
