import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export interface PostMetadata {
  title: string;
  description: string;
  tags: string[];
  createdAt: string;
  lastUpdatedAt: string;
  slug: string;
}

/**
 * Get all posts from the content directory.
 * This function only works on the server side and will throw an error if called on the client.
 */
export async function getAllPosts(): Promise<PostMetadata[]> {
  // Ensure this only runs on the server side
  if (typeof window !== "undefined") {
    throw new Error("getAllPosts() can only be called on the server side");
  }

  if (typeof process === "undefined") {
    throw new Error("getAllPosts() requires Node.js environment");
  }

  try {
    // Check if posts directory exists
    await fs.access(postsDirectory);
  } catch {
    return [];
  }

  const fileNames = await fs.readdir(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames
      .filter(
        (fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx")
      )
      .map(async (fileName) => {
        const slug = fileName.replace(/\.(md|mdx)$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
          slug,
          title: data.title || slug,
          description: data.description || "",
          tags: data.tags || [],
          createdAt: data.createdAt || "",
          lastUpdatedAt: data.lastUpdatedAt || data.createdAt || "",
          ...data,
        } as PostMetadata;
      })
  );

  return allPostsData;
}

/**
 * Get post content without frontmatter.
 * This function only works on the server side.
 */
export async function getPostContent(slug: string): Promise<string> {
  // Ensure this only runs on the server side
  if (typeof window !== "undefined") {
    throw new Error("getPostContent() can only be called on the server side");
  }

  if (typeof process === "undefined") {
    throw new Error("getPostContent() requires Node.js environment");
  }

  // Try .mdx first, then .md
  let fullPath: string;
  try {
    fullPath = path.join(postsDirectory, `${slug}.mdx`);
    await fs.access(fullPath);
  } catch {
    fullPath = path.join(postsDirectory, `${slug}.md`);
    await fs.access(fullPath);
  }

  const fileContents = await fs.readFile(fullPath, "utf8");
  const { content } = matter(fileContents);

  return content.trim();
}
