import Link from 'next/link';
import { getAllPosts, BlogPost } from '@/lib/blog';

export const metadata = {
  title: 'Blog | My Portfolio',
  description: 'Articles and thoughts on web development and technology.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  // Group posts by category
  const postsByCategory: Record<string, BlogPost[]> = {};

  posts.forEach(post => {
    const category = post.frontmatter.category || 'Uncategorized';
    if (!postsByCategory[category]) {
      postsByCategory[category] = [];
    }
    postsByCategory[category].push(post);
  });

  // Sort categories if needed, or keeping them as they appear could be fine.
  // For now let's use Object.keys().
  const categories = Object.keys(postsByCategory).sort();

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-16 tracking-tight text-center">Blog</h1>

      {categories.length === 0 ? (
        <p className="text-muted-foreground text-center text-lg">No posts found. Check back soon!</p>
      ) : (
        <div className="space-y-16">
          {categories.map((category) => (
            <section key={category}>
              <h2 className="text-2xl font-bold mb-6 text-foreground">{category}</h2>
              <div className="flex flex-col space-y-8">
                {postsByCategory[category].map((post) => (
                  <div key={post.slug} className="group">
                    <Link href={`/blog/${post.slug}`} className="block">
                      <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                        - {post.frontmatter.title}
                      </h3>
                      <time className="text-sm text-muted-foreground block mt-1 pl-4">
                        {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </time>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}