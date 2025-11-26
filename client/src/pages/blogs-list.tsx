import { Link } from 'wouter';
import { BinaryRain } from '@/components/abdelrahman_atef_binary_rain';
import { useState, useEffect } from 'react';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  createdAt: string;
}

export default function BlogsList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching posts:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <BinaryRain />
      
      <div className="relative z-10 min-h-screen px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/"
              className="text-primary hover:text-primary/80 transition-all mb-6 inline-block"
            >
              ← Back to Home
            </Link>
            <h1 
              className="text-4xl md:text-5xl font-mono font-bold text-primary mb-2"
              style={{
                textShadow: '0 0 10px rgba(0, 255, 65, 0.8), 0 0 20px rgba(0, 255, 65, 0.6)',
              }}
            >
              b0oda
            </h1>
            <p className="text-primary/80 font-mono">Blog Posts & Security Research</p>
          </div>

          {/* Posts List */}
          <div className="space-y-6">
            {loading ? (
              <div className="text-primary/60 font-mono">Loading posts...</div>
            ) : posts.length > 0 ? (
              posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <a className="block border-2 border-primary p-6 hover:bg-primary hover:text-background transition-all duration-300 cursor-pointer group">
                    <h2 className="text-2xl font-mono font-bold text-primary group-hover:text-background mb-2">
                      {post.title}
                    </h2>
                    <p className="text-primary/70 text-sm font-mono mb-3">
                      {new Date(post.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    {post.excerpt && (
                      <p className="text-primary/80 font-mono line-clamp-3 group-hover:text-background/80">
                        {post.excerpt}
                      </p>
                    )}
                  </a>
                </Link>
              ))
            ) : (
              <div className="text-primary/60 font-mono">No blog posts yet.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
