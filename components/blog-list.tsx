"use client"
import Link from "next/link"
import { Calendar, MessageSquare, ArrowRight } from "lucide-react";
import { useLanguage } from "./language-provider"; // Restore hook import
import SafeImage from "./safe-image";
import { urlFor } from "@/lib/sanityClient";
import { SanityDocument } from "next-sanity";

interface PostListItem extends SanityDocument {
  title: string;
  slug: string; // Slug is projected as a string
  mainImage?: {
    asset: { _id: string; url: string };
    alt?: string;
  };
  publishedAt: string;
  excerpt?: string;
}

interface BlogListProps {
  posts: PostListItem[];
  currentPage: number;
  totalPages: number;
  locale: string;
}

export default function BlogList({ posts, currentPage, totalPages, locale }: BlogListProps) {
  const { t } = useLanguage(); // Restore hook usage

  // Restore formatDate function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  return (
    <div>
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div key={post._id} className="bg-white overflow-hidden group shadow-sm">
            {/* Post Image */}
            <div className="relative h-60 overflow-hidden">
              {post.mainImage?.asset ? (
                <SafeImage
                  src={urlFor(post.mainImage).width(600).height(400).url()}
                  alt={post.mainImage.alt || post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                 <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
                   <span>Image not available</span>
                 </div>
               )}
              <div className="absolute top-4 left-4 bg-red-600 text-white py-1 px-3 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">{formatDate(post.publishedAt)}</span>
              </div>
            </div>

            {/* Post Content */}
            <div className="p-6">
              <h2 className="text-xl font-medium text-gray-900 mb-3 line-clamp-2">
                <Link href={`/${locale}/blog/${post.slug}`} className="hover:text-red-600 transition-colors">
                  {post.title}
                </Link>
              </h2>
              {post.excerpt && (
                /* Apply text-sm class correctly */
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
              )}
            </div>

            {/* Read More Link */}
            <div className="px-6 pb-6 pt-0">
              <Link
                href={`/${locale}/blog/${post.slug}`}
                className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors"
              >
                {t("blog.readMore")} {/* Use t() function */}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
