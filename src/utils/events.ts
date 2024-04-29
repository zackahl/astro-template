import { getCollection } from "astro:content";

export const allEvents = await getCollection("events");

export const numEvents = allEvents.length;

export const allEventsSorted = allEvents.sort(function (a, b) {
    return a.data.date.valueOf() - b.data.date.valueOf();
});