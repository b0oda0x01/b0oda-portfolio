# Blog System Setup Guide

This project now includes a blog system integrated with your existing portfolio website.

## What's New

- **Blog Pages**: `/blogs` (list all posts) and `/blog/:slug` (individual post)
- **Database**: PostgreSQL table `posts` for storing blog content
- **API Endpoints**: 
  - `GET /api/posts` - Get all blog posts
  - `GET /api/posts/:slug` - Get a specific blog post

## Setup Steps

1. **Update Database Schema**
   ```bash
   npm run db:push
   ```

2. **Add Your First Blog Post** (Optional)
   ```bash
   node seed-posts.mjs
   ```
   This adds the "How I Started Finding Vulnerabilities Consistently" post.

3. **Start the Development Server**
   ```bash
   npm run dev
   ```

4. **Visit Your Blog**
   - Blog list: `http://localhost:5173/blogs`
   - Individual post: `http://localhost:5173/blog/how-i-started-finding-vulnerabilities-consistently`

## Adding More Blog Posts

You can add blog posts by:

1. **Using the API** (if you add a POST endpoint):
   ```
   POST /api/posts
   {
     "title": "Your Post Title",
     "slug": "your-post-slug",
     "content": "Your markdown content...",
     "excerpt": "Brief summary...",
     "published": "2025-11-26T00:00:00Z"
   }
   ```

2. **Directly in Database**:
   Insert records into the `posts` table with the required fields.

3. **Using Seed Script**:
   Modify `seed-posts.mjs` and run it again.

## Styling

The blog pages use the same color scheme as your portfolio:
- **Dark Background**: HSL(215, 28%, 7%)
- **Neon Green Text**: HSL(135, 100%, 50%)
- **Font**: Source Code Pro (monospace)

All styling is done with Tailwind CSS and matches your existing design.

## Files Added/Modified

- `shared/schema.ts` - Added `posts` table
- `server/routes.ts` - Added blog API endpoints
- `server/db.ts` - Database connection setup
- `client/src/pages/blogs-list.tsx` - Blog listing page
- `client/src/pages/blog-post.tsx` - Individual blog post page
- `client/src/App.tsx` - Added blog routes
- `seed-posts.mjs` - Seed script for initial data

## Notes

- Blog posts support Markdown formatting
- Posts are displayed in reverse chronological order (newest first)
- The blog system doesn't affect your existing pages
