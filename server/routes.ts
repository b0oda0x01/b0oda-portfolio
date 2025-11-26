import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs";
import path from "path";

// Posts data file
const postsFile = path.join(process.cwd(), "data", "posts.json");

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Load posts from file
function loadPosts() {
  ensureDataDir();
  try {
    if (fs.existsSync(postsFile)) {
      const data = fs.readFileSync(postsFile, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error loading posts:", error);
  }
  return [];
}

// Save posts to file
function savePosts(posts: any[]) {
  ensureDataDir();
  try {
    fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2));
  } catch (error) {
    console.error("Error saving posts:", error);
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Blog API endpoints
  app.get("/api/posts", async (req, res) => {
    try {
      const posts = loadPosts();
      // Sort by createdAt in descending order (newest first)
      const sortedPosts = posts.sort((a: any, b: any) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      res.json(sortedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ error: "Failed to fetch posts" });
    }
  });

  app.get("/api/posts/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const posts = loadPosts();
      const post = posts.find((p: any) => p.slug === slug);

      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }

      res.json(post);
    } catch (error) {
      console.error("Error fetching post:", error);
      res.status(500).json({ error: "Failed to fetch post" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
