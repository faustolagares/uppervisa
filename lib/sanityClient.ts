import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// It's recommended to store these in environment variables
// especially if you plan to use tokens for authenticated requests (e.g., previews)
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'rpq5jyro';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-04-18'; // Use current date or a specific version

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: typeof document !== 'undefined', // server-side is statically generated, the CDN is only necessary beneficial if queries are called on the client-side
  // useCdn: process.env.NODE_ENV === 'production', // Use CDN only in production
  // perspective: 'published', // Default perspective
});

// Helper function for generating Image URLs with only the asset reference data in your documents.
// Read more: https://www.sanity.io/docs/image-url
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Helper function to check if we are in preview mode
// export const isPreviewMode = process.env.NEXT_PUBLIC_SANITY_PREVIEW_MODE === 'true';

// If you need authenticated requests (e.g., for previews or mutations)
// export const previewClient = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: false, // Preview should always fetch fresh data
//   token: process.env.SANITY_API_READ_TOKEN, // Store securely!
//   perspective: 'previewDrafts', // Fetch drafts
// });
