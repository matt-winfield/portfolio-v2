import { forwardRef, type ComponentProps } from 'react';
import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { Hero } from '@/features/hero';

const StyledLink = forwardRef<HTMLAnchorElement, ComponentProps<typeof Link>>(
    (props, ref) => (
        <span className="group relative duration-500 hover:scale-125 hover:transition-transform">
            <Link className="text-xl sm:text-3xl" ref={ref} {...props} />
            <motion.div className="absolute -bottom-1 h-[2px] w-full scale-x-0 bg-accent-foreground transition-transform group-hover:scale-x-100" />
        </span>
    ),
);
StyledLink.displayName = 'StyledLink';

const MotionLink = motion(StyledLink);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
    },
};

const linkVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export default function Index() {
    return (
        <main className="container relative min-h-screen">
            <Hero />
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="absolute bottom-10 left-1/2 right-0 z-10 flex w-full -translate-x-1/2 flex-wrap justify-center gap-x-6 gap-y-1 py-5 md:bottom-auto md:left-auto md:top-1/2 md:w-fit md:-translate-y-1/2 md:flex-col md:items-end md:gap-y-6 md:p-0"
            >
                <MotionLink variants={linkVariants} to="/blog">
                    <motion.div>Blog</motion.div>
                </MotionLink>
                <MotionLink variants={linkVariants} to="/about">
                    <motion.div layoutId="about-title">About</motion.div>
                </MotionLink>
                <MotionLink variants={linkVariants} to="/projects">
                    <motion.div layoutId="projects">Projects</motion.div>
                </MotionLink>
                <MotionLink variants={linkVariants} to="/skills">
                    <motion.div layoutId="skills">Skills</motion.div>
                </MotionLink>
            </motion.div>
        </main>
    );
}
