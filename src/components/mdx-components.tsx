import Link from 'next/link';
import Image from 'next/image';
import { MDXRemoteProps } from 'next-mdx-remote/rsc';

export function useMDXComponents(components: MDXRemoteProps['components']): MDXRemoteProps['components'] {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>,
        p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
        a: ({ children, href }) => {
            const isExternal = href?.startsWith('http');
            return (
                <Link
                    href={href as string}
                    className="text-primary hover:underline"
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                    {children}
                </Link>
            );
        },
        ...components,
    };
}
