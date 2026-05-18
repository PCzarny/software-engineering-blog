# Post Creation Guidelines

## File Naming Convention

When creating a new blog post in `src/content/posts/`, the filename (slug) MUST start with the creation date in format `YYYY-MM-DD` followed by a hyphen and a descriptive slug.

**Format:** `YYYY-MM-DD-descriptive-slug.mdx` or `YYYY-MM-DD-descriptive-slug.md`

**Examples:**

- `2025-12-17-react-easy-wins.mdx`
- `2025-12-20-backend-project-setup-cheatsheet.mdx`

## Required Frontmatter Metadata

Every post file MUST include the following frontmatter fields:

```yaml
---
title: "Post Title"
description: "A brief description of the post content"
tags:
  - tag1
  - tag2
  - tag3
createdAt: "2025-12-17T21:40:00+02:00" # ISO 8601 format
lastUpdatedAt: "2025-12-17T21:40:00+02:00" # ISO 8601 format
---
```

### Field Requirements:

- **title** (string, required): The post title
- **description** (string, required): Brief description of the post (can be empty string but field must exist)
- **tags** (array, required): Array of tag strings (can be empty array but field must exist)
- **createdAt** (string, required): ISO 8601 formatted date-time when the post was created
- **lastUpdatedAt** (string, required): ISO 8601 formatted date-time when the post was last updated

### Date Format:

- Use ISO 8601 format: `YYYY-MM-DDTHH:mm:ss+TZ:TZ`
- Example: `2025-12-17T21:40:00+02:00`

## Post Creation Checklist

When creating a new post:

1. ✅ Use current date in filename: `YYYY-MM-DD-slug.mdx`
2. ✅ Include all required frontmatter fields
3. ✅ Set `createdAt` to current date-time
4. ✅ Set `lastUpdatedAt` to current date-time (same as createdAt for new posts)
5. ✅ Provide a meaningful `title`
6. ✅ Provide a `description` (even if brief)
7. ✅ Add relevant `tags` (at least one tag recommended)

## Example Post Template

```mdx
---
title: "Your Post Title"
description: "A brief description of what this post covers"
tags:
  - react
  - frontend
  - best-practices
createdAt: "2025-12-20T10:00:00+02:00"
lastUpdatedAt: "2025-12-20T10:00:00+02:00"
---

# Your Post Title

Your post content goes here...
```

## Updating Posts

When updating an existing post:

- ✅ Update the `lastUpdatedAt` field to the current date-time
- ✅ Keep the `createdAt` field unchanged
- ✅ DON'T update filename slug even when topic was changed
