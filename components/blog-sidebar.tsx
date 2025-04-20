"use client"

import type React from "react"
import { useState, useEffect } from "react" // Added useEffect back
import Link from "next/link"
import { Search, Calendar } from "lucide-react" // Added icons back
import { useLanguage } from "./language-provider" // Use the hook
// import { getRecentPosts } from "@/lib/blog-data" // Keep old data fetching commented for now
import SafeImage from "./safe-image" // Added back
import type { BlogPost } from "@/lib/blog-data" // Import BlogPost type for recent posts placeholder

interface BlogSidebarProps {
  categories: string[]
  selectedCategory: string
  locale: string
}

export default function BlogSidebar({ categories, selectedCategory, locale }: BlogSidebarProps) {
  const { t } = useLanguage() // Use the hook
  const [searchQuery, setSearchQuery] = useState("")
  // Placeholder for recent posts - replace with Sanity fetch later if needed
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([])

  // Simulate fetching recent posts (replace with actual fetch if needed)
  useEffect(() => {
     // const posts = getRecentPosts(3); // Keep commented
     // setRecentPosts(posts);
     // For now, just set an empty array or placeholder data
     setRecentPosts([]);
  }, []);


  // Format date based on locale
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would redirect to search results
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="space-y-8">
      {/* Search Widget */}
      <div className="bg-white p-6 shadow-sm">
        <h3 className="text-xl font-medium text-gray-900 mb-4">{t("blog.search")}</h3>
        <form onSubmit={handleSearch}>
          <div className="relative">
            <input
              type="text"
              placeholder={t("blog.searchPlaceholder")}
              className="w-full border border-gray-300 rounded-md py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-600"
              aria-label={t("blog.search")}
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

      {/* Categories Widget */}
      <div className="bg-white p-6 shadow-sm">
        <h3 className="text-xl font-medium text-gray-900 mb-4">{t("blog.categories")}</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href={`/${locale}/blog`}
              className={`block py-2 px-3 rounded-md transition-colors ${
                selectedCategory === "" ? "bg-red-600 text-white" : "hover:bg-gray-100"
              }`}
            >
              {t("blog.allCategories")}
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/${locale}/blog?category=${category.toLowerCase()}`}
                className={`block py-2 px-3 rounded-md transition-colors ${
                  selectedCategory && selectedCategory.toLowerCase() === category.toLowerCase()
                    ? "bg-red-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Widget */}
      <div className="bg-white p-6 shadow-sm">
        <h3 className="text-xl font-medium text-gray-900 mb-4">{t("blog.recentPosts")}</h3>
        <div className="space-y-4">
          {recentPosts.length > 0 ? (
             recentPosts.map((post) => (
               <div key={post.id} className="flex items-start">
                 <div className="relative w-20 h-20 flex-shrink-0">
                   <SafeImage
                     src={post.image || "/placeholder.svg"}
                     alt={post.title}
                     fill
                     className="object-cover rounded-md"
                   />
                 </div>
                 <div className="ml-4">
                   <h4 className="text-sm font-medium line-clamp-2">
                     <Link href={`/${locale}/blog/${post.slug}`} className="hover:text-red-600 transition-colors">
                       {post.title}
                     </Link>
                   </h4>
                   <div className="flex items-center text-gray-500 text-xs mt-1">
                     <Calendar className="w-3 h-3 mr-1" />
                     <span>{formatDate(post.publishedAt)}</span>
                   </div>
                 </div>
               </div>
             ))
           ) : (
             <p className="text-gray-500 text-sm">No recent posts available.</p> // Placeholder if no posts
           )}
        </div>
      </div>

      {/* Subscribe Widget */}
      <div className="bg-red-600 p-6 text-white shadow-sm">
        <h3 className="text-xl font-medium mb-4">{t("blog.subscribe")}</h3>
        <p className="mb-4 text-white/90">{t("blog.subscribeText")}</p>
        <form>
          <input
            type="email"
            placeholder={t("blog.emailPlaceholder")}
            className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-md py-3 px-4 mb-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          />
          <button
            type="submit"
            className="w-full bg-white text-red-600 py-3 px-4 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            {t("blog.subscribeButton")}
          </button>
        </form>
      </div>
    </div>
  )
}
