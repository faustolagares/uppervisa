import type { Metadata } from "next";
import BlogList from "@/components/blog-list";
import BlogSidebar from "@/components/blog-sidebar";
import translations from "@/translations";
import { sanityClient } from "@/lib/sanityClient";
import { postsQuery } from "@/lib/sanityQueries";
import { SanityDocument } from "next-sanity";

// Define type for list posts based on postsQuery
interface PostListItem extends SanityDocument {
  title: string;
  slug: string;
  mainImage?: {
    asset: { _id: string; url: string };
    alt?: string;
  };
  publishedAt: string;
  excerpt?: string;
}

// Server Component: fetch posts server-side
export default async function BlogPage({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams: { page?: string; category?: string };
}) {
  const locale = params.locale;
  let posts: PostListItem[] = [];
  try {
    posts = await sanityClient.fetch<PostListItem[]>(postsQuery, {}, { cache: "no-store" });
  } catch (error) {
    // Optionally log error
    posts = [];
  }

  // TODO: Fetch categories server-side if needed, or pass static/empty for now
  const categories: any[] = [];
  const selectedCategory = searchParams?.category || "";

  // Remove pagination logic for now
  const currentPage = 1;
  const totalPages = 1;

  // Get translations
  const t = translations[locale as keyof typeof translations] || translations["en-US"];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Blog Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">{t.blog.pageTitle}</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t.blog.pageDescription}</p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="py-16 bg-gray-50">
        <div className="w-full max-w-[1350px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              <BlogList posts={posts} currentPage={currentPage} totalPages={totalPages} locale={locale} />
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <BlogSidebar categories={categories} selectedCategory={selectedCategory} locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
