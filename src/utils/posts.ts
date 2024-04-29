import { getCollection } from "astro:content";

export const allPosts = await getCollection("posts");

export const numPosts = allPosts.length;

export const allPostsSorted = allPosts.sort(function (a, b) {
    return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
});