import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getPostSlugs } from '@/lib/blog';
import { useMDXComponents } from '@/components/mdx-components';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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
            title: `${post.frontmatter.title} | My Portfolio`,
            description: post.frontmatter.description,
        };
    } catch (error) {
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
    } catch (error) {
        notFound();
    }

    const components = useMDXComponents({});

    return (
        <article className="container mx-auto px-6 py-12 max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-12 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
            </Link>

            <header className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{post.frontmatter.title}</h1>
                <div className="flex flex-col items-center gap-4 text-muted-foreground">
                    <time dateTime={post.frontmatter.date}>
                        {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                        })}
                    </time>

                    {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-2">
                            {post.frontmatter.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </header>

            <div className="prose prose-lg dark:prose-invert mx-auto break-words prose-img:rounded-xl">
                <MDXRemote source={post.content} components={components} />
            </div>
        </article>
    );
}
