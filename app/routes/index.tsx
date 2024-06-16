import { forwardRef, type ComponentProps } from 'react';
import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import {
    AnimatedGradients,
    SidebarGradient,
} from '@/features/animatedGradients';

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

const linkVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export default function Index() {
    return (
        <main className="container relative h-full">
            <AnimatedGradients />
            <motion.div
                initial="hidden"
                animate="visible"
                className={
                    `fixed bottom-0 left-1/2 right-0 z-10 w-full -translate-x-1/2 rounded-t-xl ` +
                    `lg:bottom-auto lg:left-auto lg:top-0 lg:h-full lg:w-fit lg:translate-x-0 lg:rounded-l-xl lg:rounded-t-none`
                }
            >
                <div
                    className={
                        `flex h-full w-full flex-wrap justify-center gap-x-6 gap-y-1 rounded-t-xl bg-gray-900 bg-opacity-10 bg-clip-padding px-5 py-5 pb-7 backdrop-blur-[150px] backdrop-filter ` +
                        `lg:flex-col lg:items-end lg:gap-y-6 lg:pr-20 2xl:pr-52`
                    }
                >
                    <SidebarGradient />
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
                </div>
            </motion.div>
        </main>
    );
}
