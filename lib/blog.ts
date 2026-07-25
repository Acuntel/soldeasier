export type BlogPost = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  category: string;
  minutes: number;
  excerpt: string;
  sections: { h: string; p: string }[];
};

import { POSTS_1 } from "./blog-posts-1";
import { POSTS_2 } from "./blog-posts-2";

export const POSTS: BlogPost[] = [...POSTS_1, ...POSTS_2].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export function formatDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
