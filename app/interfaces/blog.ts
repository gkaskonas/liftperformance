import { ElementNode } from "@graphcms/rich-text-types";

export interface IPost {
  id: string;
  excerpt: string;
  title: string;
  publishedAt: string;
  publishedBy: {
    id: string;
    name: string;
  };
  description: string;
  date: string;
  slug: string;
  coverImage: {
    id: string;
    height: number;
    width: number;
    url: string;
  };
  content: {
    markdown?: string;
    html?: string;
    json: {
      children: ElementNode[];
    };
  };
}

export interface IBlog {
  posts: IPost[];
}

export interface IBlogPost {
  post: IPost;
}
