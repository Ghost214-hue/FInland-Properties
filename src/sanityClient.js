import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '5f1f4a00', // ← find this in fineland/sanity.config.js
  dataset: 'hero',              // ← the dataset name you chose
  apiVersion: '2024-01-01',
  useCdn: true,
});

// This lets us build image URLs from Sanity image objects
const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}