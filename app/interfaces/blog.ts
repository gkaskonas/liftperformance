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
    json?: {
      children: [
        {
          type: string;
          src: string;
          title: string;
          width: number;
          height: number;
          mimeType: string;
          children: [
            {
              text: string;
            },
          ];
        },
      ];
    };
  };
}

export interface IBlog {
  posts: IPost[];
}

export interface IBlogPost {
  post: IPost;
}
