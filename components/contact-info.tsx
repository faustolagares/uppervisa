"use client"

import { MapPin, Mail, Phone, Clock, Calendar } from "lucide-react"
import Link from "next/link"
// Removed unused import: import { useLanguage } from "./language-provider"

export default function ContactInfo({ locale }: { locale: string }) {
  // Removed unused variable: const { t } = useLanguage()

  return (
    <div className="bg-white p-6 md:p-8 shadow-sm rounded-lg h-full">
      <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">Contact Information</h2> {/* Increased size */}

      <div className="space-y-6">
        {/* Office Address */}
        <div className="flex">
         <MapPin className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" />
         <div>
           {/* Changed to h4 and added text-lg */}
           <h4 className="text-lg font-medium text-gray-900">Main Office</h4> 
           <p className="text-gray-600 text-sm">
             1250 Broadway, 27th Floor
             <br />
              New York, NY 10001
              <br />
              United States
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex">
         <Mail className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" />
         <div>
           {/* Changed to h4 and added text-lg */}
           <h4 className="text-lg font-medium text-gray-900">Email Us</h4> 
           <a href="mailto:hello@uppervisa.com" className="text-gray-600 text-sm hover:text-red-600 transition-colors">
             hello@uppervisa.com
           </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex">
         <Phone className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" />
         <div>
           {/* Changed to h4 and added text-lg */}
           <h4 className="text-lg font-medium text-gray-900">Call Us</h4> 
           <a href="tel:+19292805047" className="text-gray-600 text-sm hover:text-red-600 transition-colors">
             +1 (929) 280-5047
           </a>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex">
         <Clock className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" />
         <div>
           {/* Changed to h4 and added text-lg */}
           <h4 className="text-lg font-medium text-gray-900">Business Hours</h4> 
           <p className="text-gray-600 text-sm">
             Monday - Friday: 8:00 AM - 6:00 PM
             <br />
              Saturday: 9:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        {/* Appointment */}
        <div className="flex">
         <Calendar className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" />
         <div>
           {/* Changed to h4 and added text-lg */}
           <h4 className="text-lg font-medium text-gray-900">Book an Appointment</h4> 
           <p className="text-gray-600 text-sm mb-2">Schedule a consultation with one of our immigration experts.</p>
           <Link href={`/${locale}/book-appointment`}>
             <button className="bg-gray-900 text-white px-4 py-2 text-sm rounded-md hover:bg-gray-800 transition-colors">
               Book Appointment
              </button>
           </Link>
          </div>
        </div>
      </div>

     {/* Social Media */}
     <div className="mt-8 pt-6 border-t border-gray-200">
       {/* Changed to h4 and added text-lg */}
       <h4 className="text-lg font-medium text-gray-900 mb-4">Connect With Us</h4> 
       <div className="flex space-x-3">
         <a
           href="#"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
