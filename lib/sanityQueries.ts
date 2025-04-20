import { groq } from 'next-sanity';

// Query to get all blog post slugs
export const postPathsQuery = groq`
  *[_type == "post" && defined(slug.current)][]{
    "slug": slug.current
  }
`;

// Query to get a single blog post by slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    mainImage {
      asset->{
        _id,
        url
      },
      alt,
      caption
    },
    body, // Fetch the Portable Text field
    publishedAt
    // Add other fields you need, e.g., author: author->{name, picture}
  }
`;

// Query to get all blog posts (for the blog list page)
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt,
    // Add excerpt or other fields needed for the list view
    "excerpt": pt::text(body[0...1]), // Basic plain text excerpt from the first block
  }
`;

// TODO: Add queries for other content types (services, FAQs, etc.) as needed
