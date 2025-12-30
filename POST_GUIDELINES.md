# Blog Post Creation Guidelines

This document outlines the standards and requirements for creating blog posts in this repository.

## File Naming Convention

**Rule:** All post filenames MUST start with the creation date in `YYYY-MM-DD` format.

### Format

```
YYYY-MM-DD-descriptive-slug.mdx
```

### Examples

- ✅ `2025-12-17-react-easy-wins.mdx`
- ✅ `2025-12-20-backend-project-setup-cheatsheet.mdx`
- ❌ `react-easy-wins.mdx` (missing date prefix)
- ❌ `12-17-2025-react-easy-wins.mdx` (wrong date format)

### Slug Guidelines

- Use lowercase letters
- Separate words with hyphens
- Keep it descriptive but concise
- Avoid special characters except hyphens

## Required Frontmatter Metadata

Every post file MUST include the following frontmatter fields in YAML format:

```yaml
---
title: "Post Title"
description: "A brief description of the post content"
tags:
  - tag1
  - tag2
createdAt: "2025-12-17T21:40:00+02:00"
lastUpdatedAt: "2025-12-17T21:40:00+02:00"
---
```

### Field Specifications

#### `title` (string, required)

- The main title of the blog post
- Should be descriptive and engaging
- Example: `"Easy wins in React"`

#### `description` (string, required)

- A brief summary or description of the post content
- Used for SEO and post previews
- Can be an empty string but the field must exist
- Example: `"Discover simple React patterns that can improve your code quality"`

#### `tags` (array, required)

- Array of tag strings for categorizing the post
- Should be lowercase
- Can be an empty array but the field must exist
- Example:
  ```yaml
  tags:
    - react
    - frontend
    - best-practices
  ```

#### `createdAt` (string, required)

- ISO 8601 formatted date-time when the post was created
- Format: `YYYY-MM-DDTHH:mm:ss+TZ:TZ`
- Should match the date in the filename
- Example: `"2025-12-17T21:40:00+02:00"`

#### `lastUpdatedAt` (string, required)

- ISO 8601 formatted date-time when the post was last updated
- For new posts, set to the same value as `createdAt`
- Update this field whenever you modify the post content
- Example: `"2025-12-17T21:40:00+02:00"`

### Date Format Details

Use ISO 8601 format with timezone:

- Format: `YYYY-MM-DDTHH:mm:ss+TZ:TZ`
- Examples:
  - `2025-12-17T21:40:00+02:00` (Central European Time)
  - `2025-12-17T19:40:00Z` (UTC)
  - `2025-12-17T14:40:00-05:00` (Eastern Standard Time)

## Post Creation Checklist

When creating a new post, ensure:

- [ ] Filename starts with current date: `YYYY-MM-DD-slug.mdx`
- [ ] All required frontmatter fields are present
- [ ] `createdAt` is set to current date-time
- [ ] `lastUpdatedAt` is set to current date-time (same as createdAt for new posts)
- [ ] `title` is provided and descriptive
- [ ] `description` is provided (even if brief)
- [ ] At least one `tag` is included (recommended)
- [ ] Content follows markdown/MDX best practices

## Example Post Template

```mdx
---
title: "Your Post Title"
description: "A brief description of what this post covers and why it's valuable"
tags:
  - react
  - frontend
  - best-practices
createdAt: "2025-12-20T10:00:00+02:00"
lastUpdatedAt: "2025-12-20T10:00:00+02:00"
---

# Your Post Title

Your post content goes here. You can use:

- Markdown syntax
- **Bold** and _italic_ text
- Code blocks
- Lists
- And MDX components!
```

## Updating Existing Posts

When updating an existing post:

- ✅ Update the `lastUpdatedAt` field to the current date-time
- ✅ Keep the `createdAt` field unchanged (preserve original creation date)
- ✅ DON'T update filename slug even when topic was changed

## File Location

All posts should be created in:

```
src/content/posts/
```

## Supported Formats

Posts can be created as:

- `.mdx` files (recommended for React component support)
- `.md` files (standard markdown)

Both formats support the same frontmatter structure.
