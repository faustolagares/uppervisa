"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Phone, Clock, ArrowUp, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { useLanguage } from "./language-provider"
import SafeImage from "./safe-image"

export default function SiteFooter() {
  const { t, locale } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-[#111113] text-white">
      {/* Top Banner */}
      <div className="w-full bg-[#111113] py-6"> {/* Changed background and padding */}
        <div className="container mx-auto px-4 max-w-[1350px] flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="flex -space-x-2 mr-4">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <SafeImage
                  src="/diverse-group-city.png"
                  alt="Client"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <SafeImage
                  src="/confident-professional.png"
                  alt="Client"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <SafeImage
                  src="/lone-mountain-path.png"
                  alt="Client"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-gray-300 text-sm">
                {t("footer.approvedApplications") || "Approved Traveler Visa Applications."}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="flex flex-col sm:flex-row items-center w-full md:w-auto justify-center md:justify-normal">
              <Link
                href={`/${locale}/contact`}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 transition-colors mr-0 md:mr-6 mb-4 md:mb-0 rounded-sm" // Added rounded-sm
              >
                {t("footer.getYourVisa") || "Get Your Visa"}
              </Link>

              <div className="flex items-center sm:mt-0">
                <div className="mr-4">
                  <p className="text-gray-300 text-sm">{t("footer.haveQuestion") || "Have Question?"}</p>
                  <p className="text-white font-medium">{t("common.phoneNumber") || "+1 (929) 280-5047"}</p>
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <Phone size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 text-sm">
        <div className="container mx-auto px-4 max-w-[1350px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1 - About */}
            <div>
              <div className="mb-6">
                <Link href={`/${locale || "en-US"}`}>
                  <Image
                    src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/UpperVisa/Logos/UpperVisa%20Red%20and%20White%20Logo-bGPbT5IpzOQVR82SlnYcd1bTqGIMm7.webp"
                    alt="UpperVisa Logo"
                    width={180}
                    height={40}
                    className="object-contain"
                  />
                </Link>
              </div>
              <p className="text-gray-400 mb-6 text-xs">
                {t("footer.about") ||
                  "We provide expert guidance through every step of your immigration journey, ensuring a smooth and successful visa application process."}
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* Column 2 - Explore */}
            <div>
              <h3 className="text-base font-medium mb-6">{t("footer.explore") || "Explore"}</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={`/${locale || "en-US"}/about`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("footer.aboutUs") || "About Us"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale || "en-US"}/immigration-visas`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("footer.ourServices") || "Our Services"}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/blog`} className="text-gray-400 hover:text-white transition-colors">
                    {t("footer.latestNews") || "Latest News"}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/testimonials`} className="text-gray-400 hover:text-white transition-colors">
                    {t("footer.testimonials") || "Testimonials"}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/contact`} className="text-gray-400 hover:text-white transition-colors">
                    {t("footer.contactUs") || "Contact Us"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/book-appointment`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("footer.bookAppointment") || "Book Appointment"}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/faqs`} className="text-gray-400 hover:text-white transition-colors">
                    {t("footer.faqs") || "FAQ"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Visa Services */}
            <div>
              <h3 className="text-base font-medium mb-6">{t("footer.visaServices") || "Visa Services"}</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={`/${locale}/services/work-visa`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("footer.workVisa") || "Work Visa"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/services/student-visa`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("footer.studentVisa") || "Student Visa"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/services/business-visa`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("footer.businessVisa") || "Business Visa"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/services/family-visa`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("footer.familyVisa") || "Family Visa"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/services/tourist-visa`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("footer.touristVisa") || "Tourist Visa"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h3 className="text-base font-medium mb-6">{t("footer.contactTitle") || "Contact"}</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <MapPin className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">
                    {t("common.addressLine1") || "1330 Avenue of the Americas, Suite 23A"}
                    <br />
                    {t("common.addressLine2") || "New York, NY 10019"}
                  </span>
                </li>
                <li className="flex">
                  <Mail className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <a
                    href={`mailto:${t("common.emailAddress") || "hello@uppervisa.com"}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("common.emailAddress") || "hello@uppervisa.com"}
                  </a>
                </li>
                <li className="flex">
                  <Phone className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <a
                    href={`tel:${t("common.phoneNumber") || "+19292805047"}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("common.phoneNumber") || "+1 (929) 280-5047"}
                  </a>
                </li>
                <li className="flex">
                  <Clock className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div className="text-gray-400">
                    <p>{t("common.workHoursWeekday") || "Mon - Fri: 8:00 am - 6:00 pm"}</p>
                    <p>{t("common.workHoursSaturday") || "Sat: 9:00 am - 4:00 pm"}</p>
                    <p>{t("common.workHoursSunday") || "Sunday: Closed"}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-[#051525] py-8">
        <div className="container mx-auto px-4 max-w-[1350px] flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} UpperVisa. {t("footer.allRightsReserved") || "All rights reserved."}
          </p>

          <div className="flex items-center">
            <ul className="flex space-x-6 mr-6">
              <li>
                <Link
                  href={`/${locale}/privacy-policy`}
                  className="text-gray-500 text-xs hover:text-white transition-colors"
                >
                  {t("footer.privacyPolicy") || "Privacy Policy"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms-of-service`}
                  className="text-gray-500 text-xs hover:text-white transition-colors"
                >
                  {t("footer.termsOfService") || "Terms of Service"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/sitemap`} className="text-gray-500 text-xs hover:text-white transition-colors">
                  {t("footer.sitemap") || "Sitemap"}
                </Link>
              </li>
            </ul>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
