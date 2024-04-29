// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection

// Events
const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string()),
    category: z.string()
  })
});

export interface Event {
title: string
date: Date
pubDate: Date
description: string
author: string
image: {
  url: string
  alt: string
}
tags: string[]
category: string
}

// Posts
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string()),
      category: z.string()
    })
});

export interface Post {
  title: string
  pubDate: Date
  description: string
  author: string
  image: {
    url: string
    alt: string
  }
  tags: string[]
  category: string
}

// Products
const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    price: z.number(),
    discountPercentage: z.number(),
    tags: z.array(z.string()),
    category: z.string(),
    images: z.array(z.object({
      url: z.string(),
      alt: z.string()
    }))
  })
});

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  category: string
  tags: string[]
  images: {
    url: string
    alt: string
  }[]
}

// Export a single `collections` object to register your collection(s)
export const collections = {
  events: eventsCollection,
  posts: postsCollection,
  products: productsCollection
};