import {
    easeInOut,
    motion,
    useAnimate,
    useMotionTemplate,
    useMotionValue,
} from 'framer-motion';
import { useEffect } from 'react';

export const AnimatedGradients = () => {
    const [scope, animate] = useAnimate();
    const x1 = useMotionValue(90);
    const y1 = useMotionValue(80);
    const x2 = useMotionValue(10);
    const y2 = useMotionValue(20);
    const background = useMotionTemplate`radial-gradient(at ${x1}% ${y1}%, rgb(240, 109, 0), transparent 70%),
        radial-gradient(at ${x2}% ${y2}%, rgb(62, 245, 220), transparent 70%)`;

    useEffect(() => {
        animate(x1, 55, {
            repeat: Infinity,
            repeatType: 'reverse',
            ease: easeInOut,
            duration: 5,
        });

        animate(y1, 20, {
            repeat: Infinity,
            repeatType: 'reverse',
            ease: easeInOut,
            duration: 10,
        });

        animate(x2, 40, {
            repeat: Infinity,
            repeatType: 'reverse',
            ease: easeInOut,
            duration: 8,
        });

        animate(y2, 80, {
            repeat: Infinity,
            repeatType: 'reverse',
            ease: easeInOut,
            duration: 12,
        });
    }, [animate, x1, y1, x2, y2]);

    return (
        <div className="h-full w-full overflow-hidden">
            <motion.div
                className="fixed left-0 top-0 -z-10 h-full w-full"
                ref={scope}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={{
                    background,
                }}
            />
            <div className="container flex h-full items-center justify-center md:justify-start">
                <div className="flex flex-col items-center md:items-start">
                    <div className="text-center text-5xl font-bold md:text-7xl">
                        Matt Winfield
                    </div>
                    <div className="text-center text-2xl text-muted-foreground md:text-3xl">
                        Software Developer
                    </div>
                </div>
            </div>
        </div>
    );
};

export const SidebarGradient = () => {
    const [scope, animate] = useAnimate();
    const opacity = useMotionValue(0);
    const background = useMotionTemplate`radial-gradient(at 100% 100%, rgba(62, 245, 220, ${opacity}), transparent 70%)`;

    useEffect(() => {
        animate(opacity, 0.3, {
            repeat: Infinity,
            repeatType: 'reverse',
            ease: easeInOut,
            duration: 5,
        });
    }, [animate, opacity]);

    return (
        <motion.div
            className="absolute left-0 top-0 -z-10 h-full w-full"
            ref={scope}
            style={{
                background,
            }}
        />
    );
};
