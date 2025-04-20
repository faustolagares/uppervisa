import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-6xl font-medium text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-medium text-gray-700 mb-6">Page Not Found</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
      >
        Return to UpperVisa Homepage
      </Link>
    </div>
  )
}
