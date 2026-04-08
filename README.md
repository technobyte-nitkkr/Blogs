# Technobyte Blog Renderer

Production-grade Next.js App Router setup for statically rendering blogs from:

- https://github.com/technobyte-nitkkr/Techno-Blog-Garden

## Key Architecture

- Server Components by default
- SSG + ISR for homepage, listing pages, and blog detail pages
- 12-hour revalidation for all blog data fetches (43200 seconds)
- Optional tag-based manual revalidation with revalidateTag("posts")

## Routes

- / latest 3 published posts
- /blog page 1 listing, 6 posts per page
- /blog/page/[page] static paginated listing pages
- /blog/[slug] blog detail page with pre-generated slugs + ISR

## Environment

Copy .env.example to .env.local and configure values as needed.

```env
NEXT_PUBLIC_SITE_URL=https://technobyte.vercel.app
BLOG_SOURCE_OWNER=technobyte-nitkkr
BLOG_SOURCE_REPO=Techno-Blog-Garden
BLOG_SOURCE_BRANCH=master
BLOG_SOURCE_GITHUB_TOKEN=
REVALIDATE_SECRET=replace-with-a-long-random-secret
```

## Manual Revalidation

Trigger tag revalidation after CMS/content updates:

```bash
curl -X POST "http://localhost:3000/api/revalidate?secret=YOUR_SECRET"
```

This invalidates the posts tag and refreshes all affected pages.

## Data Layer Notes

- Markdown and metadata are fetched from GitHub using Next.js cached fetch.
- Frontmatter is parsed via gray-matter.
- Markdown content is rendered with next-mdx-remote/rsc.
- Draft posts are filtered out server-side.
- Slug uniqueness is enforced at runtime.
