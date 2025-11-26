# Blog System Setup Guide

Your blog system is now ready! No database needed - everything works with simple JSON files.

## What's New

- **Blog Pages**: `/blogs` (list all posts) and `/blog/:slug` (individual post)
- **API Endpoints**: 
  - `GET /api/posts` - Get all blog posts
  - `GET /api/posts/:slug` - Get a specific blog post
- **Data Storage**: Posts are stored in `data/posts.json`

## How to Use

### 1. First Blog Post is Already Added
Your first blog post "How I Started Finding Vulnerabilities Consistently" is already in the system!

### 2. Add More Blog Posts
Edit the file `data/posts.json` and add new posts like this:

```json
{
  "id": "2",
  "title": "Your Post Title",
  "slug": "your-post-slug",
  "content": "# Your Post Title\n\nYour markdown content here...",
  "excerpt": "Brief summary of your post...",
  "published": "2025-11-26T00:00:00Z",
  "createdAt": "2025-11-26T14:00:00Z",
  "updatedAt": "2025-11-26T14:00:00Z"
}
```

### 3. View Your Blog
- Blog list: `https://b0oda.site/blogs`
- Individual post: `https://b0oda.site/blog/how-i-started-finding-vulnerabilities-consistently`

## Styling

The blog uses your existing color scheme:
- **Dark Background**: HSL(215, 28%, 7%)
- **Neon Green Text**: HSL(135, 100%, 50%)
- **Font**: Source Code Pro (monospace)

## Files Added/Modified

- `client/src/pages/blogs-list.tsx` - Blog listing page
- `client/src/pages/blog-post.tsx` - Individual blog post page
- `client/src/App.tsx` - Added blog routes
- `server/routes.ts` - Blog API endpoints
- `data/posts.json` - Blog posts data
- `shared/schema.ts` - Updated (no longer used, kept for reference)

## Notes

- Blog posts support Markdown formatting
- Posts are displayed in reverse chronological order (newest first)
- The blog system doesn't affect your existing pages
- No database needed - everything is stored in JSON files
