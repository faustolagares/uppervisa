"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { MessageSquare } from "lucide-react"
import { getRecentPosts, type BlogPost } from "@/lib/blog-data"
import SafeImage from "./safe-image"

export default function RecentBlogSection() {
  const { t, locale } = useLanguage()
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    // Fetch recent posts
    const posts = getRecentPosts(3)
    setRecentPosts(posts)
  }, [])

  // Format date based on locale
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  return (
    <section className="py-20 bg-gray-50 w-full flex justify-center">
      <div className="w-full max-w-[1350px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex flex-col items-center mb-4">
            <span className="text-sm uppercase tracking-wider text-gray-500 mb-1">{t("blog.recentLabel")}</span>
            <div className="w-12 h-1 bg-red-600 mt-1"></div>
          </div>
          <h2 className="text-4xl font-medium text-gray-900 mb-6">{t("blog.recentTitle")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("blog.recentDescription")}</p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <div key={post.id} className="bg-white overflow-hidden group shadow-sm">
              {/* Post Image with Date */}
              <div className="relative h-60 overflow-hidden">
                <SafeImage src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center mb-4 space-x-2">
                  <span className="inline-block bg-red-600 text-white px-3 py-1 text-sm font-medium rounded-sm">
                    {post.category}
                  </span>
                  <div className="text-gray-500">
                    <span className="text-sm">by {post.author.name}</span>
                  </div>
                </div>

                <h3 className="text-xl font-medium text-gray-900 mb-4 line-clamp-2 min-h-[3.5rem]">
                  <Link href={`/${locale}/blog/${post.slug}`} className="hover:text-red-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>

                <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                  <div className="flex items-center text-gray-500">
                    <MessageSquare className="w-4 h-4 mr-2 text-red-600" />
                    <span className="text-sm">
                      {post.comments} {t("blog.comments")}
                    </span>
                  </div>
                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="w-8 h-8 flex items-center justify-center hover:text-red-600 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transform rotate-45"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7H17V17" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href={`/${locale}/blog`}
            className="inline-block bg-red-600 text-white px-8 py-3 font-medium hover:bg-red-700 transition-colors"
          >
            {t("blog.viewAll")}
          </Link>
        </div>
      </div>
    </section>
  )
}
