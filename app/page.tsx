import Image from "next/image"
import Link from "next/link"
import { MapPin, Mail, Clock, Search, Volume2, Facebook, Twitter, Instagram, ChevronDown } from "lucide-react"
// Removed unused import: import HeroSlideshow from "@/components/hero-slideshow"
import { redirect } from 'next/navigation'

// Create a server action to check user agent
function checkUserAgent() {
  try {
    // This is a workaround for the headers() function in Next.js
    const userAgent = typeof window === 'undefined' ? 
      (process.env.USER_AGENT || '') : 
      window.navigator.userAgent;
    
    // List of social media crawler user agents to check for
    const socialMediaCrawlers = ['whatsapp', 'facebook', 'instagram', 'telegram'];
    
    // Check if the user agent includes any of the social media crawler identifiers
    return socialMediaCrawlers.some(crawler => 
      userAgent.toLowerCase().includes(crawler)
    );
  } catch (error) {
    console.error('Error checking user agent:', error);
    return false;
  }
}

export default function Home() {
  // If the request is from a social media crawler, redirect to the preview page
  if (checkUserAgent()) {
    return redirect('/whatsapp-preview.html');
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Info Bar */}
      <div className="bg-gray-100 py-1 px-4 md:px-8 text-sm hidden md:block">
        <div className="w-full max-w-[1350px] mx-auto flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1">
              <MapPin size={16} className="text-red-500" />
              <span className="text-gray-700">30 Broklyn Golden Street, USA</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={16} className="text-red-500" />
              <span className="text-gray-700">hello@uppervisa.com</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} className="text-red-500" />
              <span className="text-gray-700">Mon - Fri 8.00 am - 6.00 pm</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Login
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Faq's
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white py-4 px-4 md:px-8 shadow-sm">
        <div className="w-full max-w-[1350px] mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center mr-8">
              <div className="h-10 w-auto flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UpperVisa%20Red%20and%20Black%20Logo-g3G6RcEG5GYCnk9IuZ0F189LULPzZ2.webp"
                  alt="UPPERVISA Logo"
                  width={180}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <nav className="hidden lg:flex items-center space-x-6">
              <a
                href="#"
                className="font-medium text-black relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-red-500"
              >
                Home
              </a>
              <a href="#" className="font-medium text-gray-600 hover:text-black">
                About Us
              </a>
              <div className="relative group">
                <a href="#" className="font-medium text-gray-600 hover:text-black flex items-center gap-1">
                  Services
                  <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                </a>
                <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black">
                      Visas & Green Cards
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black">
                      Citizenship
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black">
                      Business Services
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black">
                      Additional Services
                    </a>
                  </div>
                </div>
              </div>
              <a href="#" className="font-medium text-gray-600 hover:text-black">
                Blog
              </a>
              <a href="#" className="font-medium text-gray-600 hover:text-black">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/en-US/book-appointment">
              <button className="hidden md:block bg-gray-100 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-200 transition">
                Book Appointment
              </button>
            </Link>
            <div className="flex items-center">
              <Search className="h-5 w-5 text-gray-600" />
              <span className="hidden md:inline ml-2 text-gray-500">Search...</span>
            </div>
          </div>
        </div>
      </header>

      {/* Announcement Bar */}
      <div className="w-full flex justify-center bg-gray-900">
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row">
          <div className="bg-gray-900 text-white py-3 px-6 flex items-center justify-center md:w-1/5">
            <Volume2 className="mr-2" />
            <span>Updates</span>
          </div>
          <div className="bg-red-600 text-white py-3 px-6 flex-1 flex items-center justify-between">
            <div className="flex-1 text-center md:text-left">
              The United States Mission is Pleased to Announce the Expansion of Interview.
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <button className="text-white p-1">
                  <span className="sr-only">Previous</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button className="text-white p-1">
                  <span className="sr-only">Next</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
              <div className="hidden md:flex items-center gap-1">
                <span>Follow us:</span>
                <div className="flex gap-2">
                  <a href="#" className="bg-black rounded-full p-1 flex items-center justify-center hover:bg-gray-800">
                    <Facebook size={16} />
                  </a>
                  <a href="#" className="bg-black rounded-full p-1 flex items-center justify-center hover:bg-gray-800">
                    <Twitter size={16} />
                  </a>
                  <a href="#" className="bg-black rounded-full p-1 flex items-center justify-center hover:bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </a>
                  <a href="#" className="bg-black rounded-full p-1 flex items-center justify-center hover:bg-gray-800">
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Removed HeroSlideshow due to missing locale prop */}
      <div className="relative h-[500px] md:h-[600px] w-full flex justify-center overflow-hidden">
        {/* <HeroSlideshow /> */}
      </div>
    </div>
  )
}
