import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getPostSlugs } from '@/lib/blog';
import { useMDXComponents } from '@/components/mdx-components';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export async function generateStaticParams() {
    const slugs = getPostSlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.mdx$/, ''),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    try {
        const post = getPostBySlug(slug);
        return {
            title: `${post.frontmatter.title} | André Vinícius`,
            description: post.frontmatter.description,
        };
    } catch {
        return {
            title: 'Post Not Found',
        };
    }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let post;

    try {
        post = getPostBySlug(slug);
    } catch {
        notFound();
    }

    const components = useMDXComponents({});

    return (
        <article className="container mx-auto px-6 py-12 max-w-3xl">
            <div className="flex items-center justify-between mb-10">
                <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Articles
                </Link>
                {typeof post.frontmatter.devtoUrl === 'string' && (
                    <Link
                        href={post.frontmatter.devtoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-secondary text-secondary-foreground rounded-full text-xs font-semibold hover:bg-secondary/80 transition-colors"
                    >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Read on Dev.to
                    </Link>
                )}
            </div>

            <header className="mb-10 pb-8 border-b border-border">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
                    {post.frontmatter.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <time dateTime={post.frontmatter.date}>
                        {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                        })}
                    </time>

                    {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {post.frontmatter.tags.map((tag) => (
                                <span key={tag} className="px-2.5 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </header>

            <div className="max-w-none break-words">
                <MDXRemote source={post.content} components={components} />
            </div>

            <div className="h-24" />
        </article>
    );
}
