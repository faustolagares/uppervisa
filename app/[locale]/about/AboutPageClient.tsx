"use client"
import Image from "next/image"
import Link from "next/link" // Add Link import
import FAQSection from "@/components/contact-faq-section"
import { Check, Award, Globe, Users } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function AboutPageClient({ locale }: { locale: string }) {
  const { t } = useLanguage()

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16 md:py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50 z-10"></div>
          <Image
            src="/images/services/immigration-visas.jpg"
            alt="UpperVisa Office"
            width={1920}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mx-auto px-4 max-w-[1350px] relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-medium text-white mb-6">{t("about.pageTitle")}</h1> {/* Increased size */}
            <p className="text-xl text-white/90 mb-8">{t("about.pageSubtitle")}</p>
            {/* Stats elements removed as requested */}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-4 max-w-[1350px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-sm font-medium text-red-600 mb-4 border-b-2 border-red-600 pb-1">
                {t("about.mission.label")}
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">{t("about.mission.title")}</h2> {/* Increased size */}
              <p className="text-gray-600 mb-6">{t("about.mission.description1")}</p>
              <p className="text-gray-600 mb-8">{t("about.mission.description2")}</p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-xl font-medium text-gray-900">{t("about.mission.features.expertGuidance.title")}</h3> {/* Added text-xl */}
                    <p className="text-gray-600">{t("about.mission.features.expertGuidance.description")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-xl font-medium text-gray-900"> {/* Added text-xl */}
                      {t("about.mission.features.transparentProcess.title")}
                    </h3>
                    <p className="text-gray-600">{t("about.mission.features.transparentProcess.description")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-xl font-medium text-gray-900"> {/* Added text-xl */}
                      {t("about.mission.features.comprehensiveSupport.title")}
                    </h3>
                    <p className="text-gray-600">{t("about.mission.features.comprehensiveSupport.description")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-100 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-100 rounded-full z-0"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/confident-professional.png"
                  alt="UpperVisa Mission"
                  width={600}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto px-4 max-w-[1350px]">
          <div className="text-center max-w-3xl mx-auto mb-16 px-4">
            <div className="inline-block text-sm font-medium text-red-600 mb-4 border-b-2 border-red-600 pb-1">
              {t("about.services.label")}
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">{t("about.services.title")}</h2> {/* Increased size */}
            <p className="text-gray-600">{t("about.services.description")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:-translate-y-1">
              <div className="h-72 overflow-hidden">
                <Image
                  src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/UpperVisa/Images/Immigrant%20Visas-QyojLY0BAErSBbMYGAPylXpl6cDtK4.webp"
                  alt="Immigrant Visas"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-gray-900 mb-3"> {/* Increased size */}
                  {t("about.services.items.immigrantVisas.title")}
                </h3>
                <p className="text-gray-600 mb-4">{t("about.services.items.immigrantVisas.description")}</p>
                <Link href="/immigration-visas/immigrant-visas" className="text-red-600 font-medium hover:text-red-700">
                  {t("about.services.learnMore")} →
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:-translate-y-1">
              <div className="h-72 overflow-hidden">
                <Image
                  src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/UpperVisa/Images/Non-Immigrant%20Visa-jwLKvvz3z6K03ILb5Dc76NJ5xGJNYk.webp"
                  alt="Non-Immigrant Visas"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-gray-900 mb-3"> {/* Increased size */}
                  {t("about.services.items.nonImmigrantVisas.title")}
                </h3>
                <p className="text-gray-600 mb-4">{t("about.services.items.nonImmigrantVisas.description")}</p>
                <Link
                  href="/immigration-visas/non-immigrant-visas"
                  className="text-red-600 font-medium hover:text-red-700"
                >
                  {t("about.services.learnMore")} →
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:-translate-y-1">
              <div className="h-72 overflow-hidden">
                <Image
                  src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/UpperVisa/Images/Business%20Immigration-z5bEJxKbajP2z5aB7iGZZdLyzb6yYP.webp"
                  alt="Business Immigration"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-gray-900 mb-3"> {/* Increased size */}
                  {t("about.services.items.businessImmigration.title")}
                </h3>
                <p className="text-gray-600 mb-4">{t("about.services.items.businessImmigration.description")}</p>
                <Link href="/business-services" className="text-red-600 font-medium hover:text-red-700">
                  {t("about.services.learnMore")} →
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:-translate-y-1">
              <div className="h-72 overflow-hidden">
                <Image
                  src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/UpperVisa/Images/Permanent%20Residency-W5jFdYVABo10pSyBHXibEgThAp3B1C.webp"
                  alt="Permanent Residency"
                  width={500}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-gray-900 mb-3"> {/* Increased size */}
                  {t("about.services.items.permanentResidency.title")}
                </h3>
                <p className="text-gray-600 mb-4">{t("about.services.items.permanentResidency.description")}</p>
                <Link
                  href="/immigration-visas/permanent-residency"
                  className="text-red-600 font-medium hover:text-red-700"
                >
                  {t("about.services.learnMore")} →
                </Link>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:-translate-y-1">
              <div className="h-72 overflow-hidden">
                <Image
                  src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/UpperVisa/Images/Citizenship%20Services%201-KgZKZvGanqDv7D5bTWcehQEtmPPQfy.webp"
                  alt="Citizenship Services"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-gray-900 mb-3"> {/* Increased size */}
                  {t("about.services.items.citizenshipServices.title")}
                </h3>
                <p className="text-gray-600 mb-4">{t("about.services.items.citizenshipServices.description")}</p>
                <Link href="/services" className="text-red-600 font-medium hover:text-red-700">
                  {t("about.services.learnMore")} →
                </Link>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:-translate-y-1">
              <div className="h-72 overflow-hidden">
                <Image
                  src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/UpperVisa/Images/Relocation-hkDHdqsj5TibYoioPQtv9rvzoiANA4.webp"
                  alt="Relocation Services"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-gray-900 mb-3"> {/* Increased size */}
                  {t("about.services.items.relocationServices.title")}
                </h3>
                <p className="text-gray-600 mb-4">{t("about.services.items.relocationServices.description")}</p>
                <Link
                  href="/immigration-visas/relocation-settlement"
                  className="text-red-600 font-medium hover:text-red-700"
                >
                  {t("about.services.learnMore")} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto px-4 max-w-[1350px]">
          <div className="text-center max-w-3xl mx-auto mb-16 px-4">
            <div className="inline-block text-sm font-medium text-red-600 mb-4 border-b-2 border-red-600 pb-1">
              {t("about.team.label")}
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">{t("about.team.title")}</h2> {/* Increased size */}
            <p className="text-gray-600">{t("about.team.description")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 - Fausto Lagares */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              {/* Apply aspect ratio */}
              <div className="aspect-w-5 aspect-h-7 overflow-hidden"> {/* Remove scale from container */}
                <Image
                  src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/UpperVisa/Team/Profile%20Photos/Lagares%20-%20Photo%20Profile-oyhIClQVXgS4JpDpC1ZBrMonacJDAl.webp" // Updated URL
                  alt="Fausto Lagares"
                  width={425} // Reduced width to simulate zoom
                  height={595} // Reduced height to simulate zoom (maintaining approx ratio)
                  className="w-full h-full object-cover" // Remove scale/transform
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-gray-900 mb-1">{t("about.team.members.sarahJohnson.name")}</h3> {/* Increased size */} {/* Assuming this key maps to Fausto Lagares */}
                <p className="text-red-600 mb-4">{t("about.team.members.sarahJohnson.role")}</p>
                <p className="text-gray-600 text-sm">{t("about.team.members.sarahJohnson.bio")}</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              {/* Apply aspect ratio */}
              <div className="aspect-w-5 aspect-h-7 overflow-hidden">
                <Image
                  src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/UpperVisa/Team/Profile%20Photos/Temporary/ChatGPT%20Image%20Apr%2017%2C%202025%2C%2004_39_46%20PM-qxiVzpkS6gK7YvHjdwjM5k45YYNYpV.webp"
                  alt="Michael Chen"
                  width={500}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-gray-900 mb-1">{t("about.team.members.michaelChen.name")}</h3> {/* Increased size */}
                <p className="text-red-600 mb-4">{t("about.team.members.michaelChen.role")}</p>
                <p className="text-gray-600 text-sm">{t("about.team.members.michaelChen.bio")}</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              {/* Apply aspect ratio */}
              <div className="aspect-w-5 aspect-h-7 overflow-hidden">
                <Image
                  src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/UpperVisa/Team/Profile%20Photos/Temporary/ChatGPT%20Image%20Apr%2017%2C%202025%2C%2004_59_51%20PM-LwPepoeFgwk58TtBwba2oiFOIgLfuY.webp"
                  alt="Elena Rodriguez"
                  width={500}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-gray-900 mb-1">{t("about.team.members.elenaRodriguez.name")}</h3> {/* Increased size */}
                <p className="text-red-600 mb-4">{t("about.team.members.elenaRodriguez.role")}</p>
                <p className="text-gray-600 text-sm">{t("about.team.members.elenaRodriguez.bio")}</p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              {/* Apply aspect ratio */}
              <div className="aspect-w-5 aspect-h-7 overflow-hidden">
                <Image
                  src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/UpperVisa/Team/Profile%20Photos/Temporary/ChatGPT%20Image%20Apr%2017%2C%202025%2C%2004_49_15%20PM-KiyFJqZF9UxXoMpnR1ekOinlJcQ67u.webp"
                  alt="David Okafor"
                  width={500}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-gray-900 mb-1">{t("about.team.members.davidOkafor.name")}</h3> {/* Increased size */}
                <p className="text-red-600 mb-4">{t("about.team.members.davidOkafor.role")}</p>
                <p className="text-gray-600 text-sm">{t("about.team.members.davidOkafor.bio")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-red-600 text-white">
        <div className="mx-auto px-4 max-w-[1350px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-medium mb-2">15k+</div>
              <p className="text-white/80">{t("about.stats.successfulCases")}</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-medium mb-2">99%</div>
              <p className="text-white/80">{t("about.stats.successRate")}</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-medium mb-2">50+</div>
              <p className="text-white/80">{t("about.stats.destinationCountries")}</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-medium mb-2">13</div>
              <p className="text-white/80">{t("about.stats.yearsOfExperience")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection locale={locale} />
    </main>
  )
}
