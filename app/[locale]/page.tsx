import HeroSlideshow from "@/components/hero-slideshow"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import VisaCategoriesSection from "@/components/visa-categories-section"
import BenefitsSection from "@/components/benefits-section"
import CoursesSection from "@/components/courses-section"
import TestimonialsSection from "@/components/testimonials-section"
import RecentBlogSection from "@/components/recent-blog-section"

// Remove async as this page doesn't fetch data directly
export default function Home({
  params: { locale },
}: {
  params: { locale: string }
}) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[600px] md:h-[720px] w-full flex justify-center overflow-hidden">
        <HeroSlideshow locale={locale} />
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* Visa Categories Section */}
      <VisaCategoriesSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Courses Section */}
      <CoursesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Recent Blog Section */}
      <RecentBlogSection />
    </div>
  )
}
