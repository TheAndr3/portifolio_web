import Link from 'next/link';
import { MDXRemoteProps } from 'next-mdx-remote/rsc';

export function useMDXComponents(components: MDXRemoteProps['components']): MDXRemoteProps['components'] {
    return {
        h1: ({ children }) => <h1 className="text-3xl md:text-4xl font-bold mt-10 mb-4 tracking-tight">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-3 tracking-tight text-foreground">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">{children}</h3>,
        p: ({ children }) => <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>,
        ul: ({ children }) => <ul className="list-disc pl-6 mb-5 space-y-2 text-muted-foreground">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-6 mb-5 space-y-2 text-muted-foreground">{children}</ol>,
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
        hr: () => <hr className="my-8 border-border" />,
        pre: ({ children }) => (
            <pre className="p-4 my-5 rounded-xl bg-secondary/70 border border-border overflow-x-auto text-sm font-mono text-foreground">
                {children}
            </pre>
        ),
        code: ({ children }) => (
            <code className="px-1.5 py-0.5 rounded bg-secondary text-foreground font-mono text-sm">
                {children}
            </code>
        ),
        a: ({ children, href }) => {
            const isExternal = href?.startsWith('http');
            return (
                <Link
                    href={href as string}
                    className="text-primary font-medium underline underline-offset-4 hover:opacity-80"
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
