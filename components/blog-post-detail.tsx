"use client"

import Link from "next/link"
import { Calendar, MessageSquare, User, Tag, Facebook, Twitter, Linkedin } from "lucide-react"
import { useLanguage } from "./language-provider"
// import type { BlogPost } from "@/lib/blog-data" // Remove old type
import SafeImage from "./safe-image"
import { PortableText } from "@portabletext/react" // Import PortableText
import { urlFor } from "@/lib/sanityClient" // Import urlFor helper
import { SanityDocument } from "next-sanity" // Import base type

// Define the expected shape of the post object from Sanity
// Match this with the fields in your postBySlugQuery
interface Post extends SanityDocument {
  title: string;
  mainImage?: { // Make optional if not required
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
    caption?: string;
  };
  body: any; // Portable Text content (type any for simplicity here)
  publishedAt: string;
  // Add other fields as needed, e.g., author, category references
}

interface BlogPostDetailProps {
  post: Post // Use the new Post interface
  locale: string
}

export default function BlogPostDetail({ post, locale }: BlogPostDetailProps) {
  const { t } = useLanguage()

  // Format date based on locale
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "Date not available"; // Handle undefined date
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  return (
    <article className="bg-white shadow-sm">
      {/* Featured Image - Use Sanity image data */}
      {post.mainImage?.asset ? (
        <div className="relative h-[400px] w-full">
          <SafeImage
            src={urlFor(post.mainImage).width(1200).height(800).url()} // Use urlFor helper
            alt={post.mainImage.alt || post.title} // Use alt text from Sanity or fallback to title
            fill
            className="object-cover"
            priority
          />
          {/* Optional: Display caption */}
          {post.mainImage.caption && (
             <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm text-center">
               {post.mainImage.caption}
             </p>
           )}
        </div>
      ) : (
        <div className="relative h-[400px] w-full bg-gray-200 flex items-center justify-center text-gray-500">
          <span>Image not available</span> {/* Placeholder if no image */}
        </div>
      )}

      {/* Post Title and Meta */}
      <div className="p-8">
        {/* Add Post Title Here */}
        <h1 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          {/* TODO: Add Author when schema is defined and data fetched */}
          {/* <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            <span>{post.author?.name || 'Author Unknown'}</span>
          </div> */}
          {/* TODO: Add Category when schema is defined and data fetched */}
          {/* <div className="flex items-center">
            <Tag className="w-4 h-4 mr-2" />
            <span>{post.category || 'Uncategorized'}</span>
          </div> */}
          {/* TODO: Add Comments if needed */}
          {/* <div className="flex items-center">
            <MessageSquare className="w-4 h-4 mr-2" />
            <span>
              {post.comments || 0} {t("blog.comments")}
            </span>
          </div> */}
        </div>

        {/* Post Content - Render Portable Text with Inter font, medium headings, and normal paragraphs */}
        <div className="prose prose-lg max-w-none font-inter prose-headings:font-medium prose-p:font-normal"> {/* Add paragraph weight */}
          {post.body ? (
            <PortableText value={post.body} />
          ) : (
            <p>Content not available.</p>
          )}
        </div>

        {/*
          TODO: Add Tags and Share section when category/tag data is available
          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-gray-700 font-medium mb-2">{t("blog.tags")}:</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href={`/${locale}/blog?category=${post.category?.toLowerCase()}`} // Adjust based on category data structure
                className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-md hover:bg-gray-200 transition-colors"
              >
                {post.category || 'Tag'}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-gray-700 font-medium mb-2">{t("blog.share")}:</h3>
            <div className="flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        */}
      </div>
    </article>
  )
}
