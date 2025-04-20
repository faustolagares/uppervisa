import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostDetail from "@/components/blog-post-detail";
import BlogSidebar from "@/components/blog-sidebar";
import { sanityClient } from "@/lib/sanityClient";
import { postBySlugQuery } from "@/lib/sanityQueries";
import { SanityDocument } from "next-sanity";

// Define a type for the fetched post data based on postBySlugQuery
interface Post extends SanityDocument {
  title: string;
  slug: { current: string };
  mainImage?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
    caption?: string;
  };
  body: any;
  publishedAt: string;
  excerpt?: string;
}

// Server Component: fetch post server-side
export default async function BlogPostPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = params;

  let post: Post | null = null;
  try {
    post = await sanityClient.fetch<Post | null>(
      postBySlugQuery,
      { slug },
      { cache: "no-store" }
    );
    if (!post) {
      notFound();
    }
  } catch (error) {
    notFound();
  }

  // TODO: Fetch categories server-side if needed
  const categories: any[] = [];

  // Generate excerpt for header if not directly available in fetched data
  const headerExcerpt = post?.excerpt || "Detailed information about the topic.";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Blog Post Header Removed */}

      {/* Blog Post Content */}
      <div className="py-16 bg-white"> {/* Change background to white */}
        {/* Adjust container for centering and width */}
        <div className="container mx-auto px-4">
          {/* Remove flex layout, center the main content */}
          <div className="w-full max-w-4xl mx-auto"> {/* Center content with max-width */}
            {/* Pass the full post object fetched from Sanity */}
            <BlogPostDetail post={post} locale={locale} />
          </div>
          {/* Sidebar Removed */}
        </div>
      </div>
    </div>
  );
}
