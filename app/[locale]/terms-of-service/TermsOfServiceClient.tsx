"use client"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function TermsOfServiceClient({ locale }: { locale: string }) {
  const { t } = useLanguage()

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16 md:py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50 z-10"></div>
          <Image
            src="/images/services/immigration-visas.jpg"
            alt="Terms of Service"
            width={1920}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mx-auto px-4 max-w-[1350px] relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-medium text-white mb-6">{t("footer.termsOfService")}</h1>
            <p className="text-xl text-white/90 mb-8">
              {locale === "en-US" 
                ? "The terms and conditions governing the use of UpperVisa's services"
                : locale === "pt-BR" 
                  ? "Os termos e condições que regem o uso dos serviços da UpperVisa"
                  : "Los términos y condiciones que rigen el uso de los servicios de UpperVisa"}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-4 max-w-[1000px]">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              Last Updated: April 20, 2025
            </p>
            
            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Introduction</h2>
            <p>
              Welcome to UpperVisa. These Terms of Service ("Terms") govern your use of our website, services, and applications 
              (collectively, the "Services") provided by UpperVisa ("we," "our," or "us"). By accessing or using our Services, 
              you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
            </p>
            <p>
              Please read these Terms carefully, as they contain important information about your legal rights, remedies, and 
              obligations. By using our Services, you are entering into a legal contract with UpperVisa.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Services Description</h2>
            <p>
              UpperVisa provides immigration and visa consultation services, including but not limited to:
            </p>
            <ul>
              <li>Immigration and visa application assistance</li>
              <li>Document preparation and review</li>
              <li>Legal advice related to immigration matters</li>
              <li>Representation before immigration authorities</li>
              <li>Case status monitoring and updates</li>
              <li>Educational resources about immigration processes</li>
            </ul>
            <p>
              Our Services are provided by qualified immigration consultants and legal professionals. However, the use of our 
              Services does not create an attorney-client relationship unless explicitly established through a separate engagement 
              agreement.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Eligibility</h2>
            <p>
              To use our Services, you must:
            </p>
            <ul>
              <li>Be at least 18 years of age or the age of legal majority in your jurisdiction</li>
              <li>Have the legal capacity to enter into a binding contract</li>
              <li>Not be prohibited from using the Services under applicable laws</li>
              <li>Provide accurate and complete information when requested</li>
            </ul>
            <p>
              By using our Services, you represent and warrant that you meet all eligibility requirements.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Account Registration</h2>
            <p>
              Some of our Services may require you to create an account. When you register for an account, you agree to:
            </p>
            <ul>
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your account credentials confidential</li>
              <li>Be responsible for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate your account if any information provided is inaccurate, outdated, 
              or incomplete, or if we have reason to believe that there has been unauthorized access to your account.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Service Fees and Payment</h2>
            <p>
              Our fees for Services are as described on our website or as communicated to you during the consultation process. 
              By engaging our Services, you agree to pay all applicable fees.
            </p>
            <p>
              Payment terms:
            </p>
            <ul>
              <li>Fees are due at the time specified in your service agreement or invoice</li>
              <li>We accept payment via credit card, bank transfer, or other methods specified on our website</li>
              <li>All fees are non-refundable unless otherwise specified in writing or required by law</li>
              <li>For ongoing services, you authorize us to charge the payment method on file</li>
              <li>Prices are subject to change with notice</li>
            </ul>
            <p>
              If you fail to make payments when due, we reserve the right to suspend or terminate your Services and pursue 
              collection of outstanding amounts, plus any applicable interest and collection costs.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Refund Policy</h2>
            <p>
              Our refund policy is as follows:
            </p>
            <ul>
              <li>
                <strong>Consultation Fees:</strong> Initial consultation fees are non-refundable once the consultation has been provided.
              </li>
              <li>
                <strong>Service Retainers:</strong> If you cancel services before work has begun, we may refund a portion of your 
                retainer, less an administrative fee, at our discretion.
              </li>
              <li>
                <strong>Ongoing Services:</strong> For services already in progress, refunds will be prorated based on the work 
                completed and expenses incurred.
              </li>
              <li>
                <strong>Government Fees:</strong> Fees paid to government agencies are subject to the refund policies of those agencies 
                and are generally non-refundable through us.
              </li>
            </ul>
            <p>
              Refund requests must be submitted in writing within 30 days of payment. All refund requests are reviewed on a 
              case-by-case basis and are at the discretion of UpperVisa management.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Client Responsibilities</h2>
            <p>
              As a client using our Services, you are responsible for:
            </p>
            <ul>
              <li>Providing accurate, truthful, and complete information</li>
              <li>Responding promptly to requests for additional information or documentation</li>
              <li>Reviewing all documents prepared on your behalf before submission</li>
              <li>Informing us of any changes in your circumstances that may affect your case</li>
              <li>Attending all required appointments and interviews</li>
              <li>Complying with all immigration laws and regulations</li>
              <li>Meeting all deadlines associated with your case</li>
            </ul>
            <p>
              Failure to fulfill these responsibilities may result in delays, additional costs, or unsuccessful outcomes for 
              which UpperVisa cannot be held responsible.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">No Guarantee of Outcomes</h2>
            <p>
              While we strive to provide high-quality services and achieve favorable outcomes for our clients, we cannot and do 
              not guarantee specific results or outcomes of any immigration application or process. Immigration decisions are made 
              by government authorities at their discretion, and approval is never guaranteed.
            </p>
            <p>
              Our Services include professional advice and assistance with the application process, but the final decision rests 
              with the relevant immigration authorities. By using our Services, you acknowledge and accept this limitation.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Intellectual Property Rights</h2>
            <p>
              All content on our website and materials provided as part of our Services, including but not limited to text, graphics, 
              logos, images, audio clips, digital downloads, data compilations, and software, is the property of UpperVisa or our 
              content suppliers and is protected by international copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You may access, download, and print materials from our website for your personal, non-commercial use only. You must not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            <p>
              This permission terminates automatically if you breach any of these Terms. Upon termination, you must destroy any 
              downloaded materials in your possession.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Confidentiality and Privacy</h2>
            <p>
              We respect your privacy and are committed to protecting your personal information. Our collection, use, and disclosure 
              of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
            <p>
              We maintain strict confidentiality regarding all client information and documents. However, by using our Services, 
              you authorize us to disclose your information as necessary to:
            </p>
            <ul>
              <li>Provide the Services you have requested</li>
              <li>Submit applications and documents to relevant authorities on your behalf</li>
              <li>Comply with legal obligations, court orders, or governmental requests</li>
              <li>Protect our rights, property, or safety, or that of our users or others</li>
            </ul>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, UpperVisa and its officers, directors, employees, agents, and affiliates shall 
              not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use the Services</li>
              <li>Any conduct or content of any third party on the Services</li>
              <li>Any content obtained from the Services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              <li>Government decisions regarding your immigration or visa applications</li>
              <li>Delays in processing by government agencies</li>
              <li>Changes in immigration laws or policies</li>
            </ul>
            <p>
              In no event shall our total liability to you for all claims exceed the amount you paid to us for the Services 
              giving rise to the liability.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless UpperVisa and its officers, directors, employees, agents, and 
              affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and 
              expenses (including but not limited to attorney's fees) arising from:
            </p>
            <ul>
              <li>Your use of and access to the Services</li>
              <li>Your violation of any term of these Terms</li>
              <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
              <li>Any claim that your content or information caused damage to a third party</li>
              <li>Any misrepresentation made by you</li>
              <li>Your violation of any law or regulation</li>
            </ul>
            <p>
              This defense and indemnification obligation will survive these Terms and your use of the Services.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Termination</h2>
            <p>
              We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any 
              reason whatsoever, including without limitation if you breach these Terms.
            </p>
            <p>
              You may terminate your engagement with us by providing written notice. Upon termination:
            </p>
            <ul>
              <li>All rights and licenses granted to you under these Terms will immediately cease</li>
              <li>You must cease all use of the Services</li>
              <li>You remain liable for all fees incurred before termination</li>
              <li>We will provide you with your case file in accordance with applicable legal and ethical obligations</li>
              <li>Provisions of these Terms that by their nature should survive termination shall survive termination</li>
            </ul>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard 
              to its conflict of law provisions.
            </p>
            <p>
              Any dispute arising out of or relating to these Terms or your use of the Services shall be subject to the exclusive 
              jurisdiction of the state and federal courts located in New York County, New York, and you consent to the personal 
              jurisdiction of these courts.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Dispute Resolution</h2>
            <p>
              Before filing a claim against UpperVisa, you agree to attempt to resolve the dispute informally by contacting us. 
              If we are unable to resolve the dispute informally, both parties agree to resolve any claim, dispute, or controversy 
              arising out of or in connection with these Terms through binding arbitration in accordance with the rules of the 
              American Arbitration Association.
            </p>
            <p>
              The arbitration will be conducted in New York, New York, unless you and UpperVisa agree otherwise. Each party will 
              be responsible for paying any filing, administrative, and arbitrator fees in accordance with the rules of the 
              American Arbitration Association.
            </p>
            <p>
              Notwithstanding the foregoing, either party may seek injunctive or other equitable relief in any court of competent 
              jurisdiction to prevent the actual or threatened infringement, misappropriation, or violation of a party's copyrights, 
              trademarks, trade secrets, patents, or other intellectual property rights.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, 
              we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will 
              be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our Services after those revisions become effective, you agree to be bound by the 
              revised Terms. If you do not agree to the new Terms, please stop using the Services.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Severability</h2>
            <p>
              If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these 
              Terms will remain in effect. An invalid or unenforceable provision will be deemed modified to the extent necessary to 
              make it valid and enforceable while preserving the intent of the original provision.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and any other legal notices or additional terms and conditions or 
              policies published by UpperVisa on the website, shall constitute the entire agreement between you and UpperVisa 
              concerning the Services.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>UpperVisa</strong><br />
              1330 Avenue of the Americas, Suite 23A<br />
              New York, NY 10019<br />
              Email: legal@uppervisa.com<br />
              Phone: +1 (929) 280-5047
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
