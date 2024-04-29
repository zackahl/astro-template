import { getCollection } from "astro:content";

export const allProducts = await getCollection("products");

export const numProducts = allProducts.length;

export const allProductsSorted = allProducts.sort(function (a, b) {
  return b.data.id.valueOf() - a.data.id.valueOf();
});