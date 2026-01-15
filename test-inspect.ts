import { getPostBySlug, getAllPosts } from './src/lib/blog';

try {
    console.log('Testing getAllPosts...');
    const posts = getAllPosts();
    console.log('Found posts:', posts.length);
    console.log('First post slug:', posts[0]?.slug);

    console.log('Testing getPostBySlug...');
    const post = getPostBySlug('hello-world');
    console.log('Post title:', post.frontmatter.title);
    console.log('Post content length:', post.content.length);

    console.log('Success!');
} catch (error) {
    console.error('Error:', error);
}
