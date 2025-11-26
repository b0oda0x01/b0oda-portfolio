import { Link, useParams } from 'wouter';
import { BinaryRain } from '@/components/abdelrahman_atef_binary_rain';
import { useState, useEffect } from 'react';
import { Streamdown } from 'streamdown';

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
}

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug || '';
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    
    fetch(`/api/posts/${slug}`)
      .then(res => {
        if (!res.ok) throw new Error('Post not found');
        return res.json();
      })
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching post:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <BinaryRain />
      
      <div className="relative z-10 min-h-screen px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/blogs"
              className="text-primary hover:text-primary/80 transition-all mb-6 inline-block"
            >
              ← Back to Blogs
            </Link>
          </div>

          {/* Content */}
          {loading ? (
            <div className="text-primary/60 font-mono">Loading post...</div>
          ) : error ? (
            <div className="text-red-400 font-mono">Error: {error}</div>
          ) : post ? (
            <article className="border-2 border-primary p-8">
              <h1 
                className="text-4xl md:text-5xl font-mono font-bold text-primary mb-4"
                style={{
                  textShadow: '0 0 10px rgba(0, 255, 65, 0.8), 0 0 20px rgba(0, 255, 65, 0.6)',
                }}
              >
                {post.title}
              </h1>
              <p className="text-primary/70 text-sm font-mono mb-8 border-b border-primary/50 pb-4">
                Published on {new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <div className="prose prose-invert max-w-none text-primary/90 font-mono">
                <Streamdown>{post.content}</Streamdown>
              </div>
            </article>
          ) : (
            <div className="text-primary/60 font-mono">Post not found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
