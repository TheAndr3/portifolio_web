import Link from 'next/link';
import { ArrowLeft, BookOpen, ExternalLink } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Articles & Technical Blog | André Vinícius',
  description: 'Technical articles on Multi-Agent Systems, Model Context Protocol (MCP), Recommender Systems (LSH Forest & MinHash), and Neural Networks.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-12 md:py-20 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        <header className="space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold uppercase tracking-wider">
            Technical Writing
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Articles & Engineering Notes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Deep dives into Multi-Agent Systems, Model Context Protocol (MCP), LLM Evaluation (τ-bench), Recommender Systems (LSH Forest & MinHash), and Neural Networks from scratch.
          </p>
        </header>

        <div className="grid gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between p-6 md:p-8 bg-card border border-border rounded-2xl hover:shadow-lg hover:border-primary/40 transition-all"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                  <span className="font-semibold text-primary uppercase tracking-wider">
                    {post.frontmatter.category || 'Engineering'}
                  </span>
                  <time dateTime={post.frontmatter.date}>
                    {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                </div>

                <Link href={`/blog/${post.slug}`} className="block">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.frontmatter.title}
                  </h2>
                </Link>

                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {post.frontmatter.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
                {post.frontmatter.tags && (
                  <div className="flex flex-wrap gap-2">
                    {post.frontmatter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-full text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Read Article
                  </Link>
                  {typeof post.frontmatter.devtoUrl === 'string' && (
                    <Link
                      href={post.frontmatter.devtoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-xs font-semibold hover:bg-secondary/80 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Dev.to
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="h-20" />
      </div>
    </main>
  );
}
