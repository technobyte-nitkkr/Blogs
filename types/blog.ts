export interface BlogAuthor {
  id: string;
  name: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  coverImage: string | null;
  author: BlogAuthor;
  publishedAt: string;
  tags: string[];
  category: string | null;
}

export interface PaginatedPosts {
  posts: BlogPost[];
  page: number;
  pageSize: number;
  totalPosts: number;
  totalPages: number;
}
