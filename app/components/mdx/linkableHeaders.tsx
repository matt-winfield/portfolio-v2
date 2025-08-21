import { LinkIcon } from 'lucide-react';
import React from 'react';
import { generateHeaderId, scrollToHash } from '../../utils/mdx';

/**
 * Create a linkable header component that generates an ID from its content
 * and provides click-to-scroll functionality
 */
function createLinkableHeader(Component: keyof JSX.IntrinsicElements) {
    return function LinkableHeader({
        className,
        children,
        ...props
    }: React.HTMLAttributes<HTMLElement> & { className?: string }) {
        const id = generateHeaderId(children);

        const handleClick = () => {
            if (id) {
                scrollToHash(id);
            }
        };

        const componentProps = {
            id,
            className: `${className} group cursor-pointer hover:text-accent-foreground`,
            onClick: handleClick,
            ...props,
        };

        return (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <Component {...(componentProps as any)}>
                {children}
                {id && (
                    <span className="ml-2 opacity-0 transition-opacity group-hover:opacity-50">
                        <LinkIcon className="inline-block h-4 w-4 -translate-y-0.5" />
                    </span>
                )}
            </Component>
        );
    };
}

// Export specific linkable header components
export const LinkableH1 = createLinkableHeader('h1');
export const LinkableH2 = createLinkableHeader('h2');
export const LinkableH3 = createLinkableHeader('h3');
export const LinkableH4 = createLinkableHeader('h4');
export const LinkableH5 = createLinkableHeader('h5');
export const LinkableH6 = createLinkableHeader('h6');
