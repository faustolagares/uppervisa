"use client"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function PrivacyPolicyClient({ locale }: { locale: string }) {
  const { t } = useLanguage()

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16 md:py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50 z-10"></div>
          <Image
            src="/images/services/immigration-visas.jpg"
            alt="Privacy Policy"
            width={1920}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mx-auto px-4 max-w-[1350px] relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-medium text-white mb-6">{t("footer.privacyPolicy")}</h1>
            <p className="text-xl text-white/90 mb-8">
              {locale === "en-US" 
                ? "How UpperVisa collects, uses, and protects your personal information"
                : locale === "pt-BR" 
                  ? "Como a UpperVisa coleta, usa e protege suas informações pessoais"
                  : "Cómo UpperVisa recopila, utiliza y protege su información personal"}
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
              UpperVisa ("we," "our," or "us") is committed to protecting your privacy and the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, 
              use our services, or communicate with us.
            </p>
            <p>
              By accessing or using our services, you agree to this Privacy Policy. If you do not agree with our policies and practices, 
              please do not use our services. This policy may change from time to time, and we will notify you of material changes as 
              required by applicable law.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <p>
              We collect several types of information from and about users of our services, including:
            </p>
            <ul>
              <li>
                <strong>Personal Information:</strong> This includes identifiable information such as your name, postal address, 
                email address, telephone number, date of birth, nationality, passport details, and other identification information 
                necessary for immigration and visa services.
              </li>
              <li>
                <strong>Immigration History:</strong> Information about your previous visa applications, travel history, 
                immigration status, and related documentation.
              </li>
              <li>
                <strong>Financial Information:</strong> Payment details, including credit card information or bank account details 
                when you pay for our services.
              </li>
              <li>
                <strong>Employment and Education Information:</strong> Details about your employment history, educational 
                background, and qualifications that may be relevant to your immigration or visa application.
              </li>
              <li>
                <strong>Communication Records:</strong> Records of your interactions with us, including emails, phone calls, 
                and in-person consultations.
              </li>
              <li>
                <strong>Technical Data:</strong> Information about your browsing actions and patterns, including IP address, 
                browser type and version, time zone setting, operating system, and platform.
              </li>
            </ul>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">How We Collect Your Information</h2>
            <p>
              We collect information directly from you when you:
            </p>
            <ul>
              <li>Complete forms on our website</li>
              <li>Register for an account</li>
              <li>Subscribe to our newsletter</li>
              <li>Request a consultation</li>
              <li>Submit an application</li>
              <li>Communicate with us via email, phone, or in person</li>
              <li>Provide feedback or respond to surveys</li>
            </ul>
            <p>
              We may also collect information automatically as you navigate through our website using cookies and similar technologies. 
              Additionally, we may receive information about you from third parties, such as business partners, immigration authorities, 
              or other governmental entities when permitted by law.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <p>
              We use the information we collect about you for various purposes, including:
            </p>
            <ul>
              <li>Providing immigration and visa consultation services</li>
              <li>Processing and managing your applications</li>
              <li>Communicating with you about your case</li>
              <li>Sending you important updates about immigration policies and regulations</li>
              <li>Processing payments and maintaining financial records</li>
              <li>Improving our website and services</li>
              <li>Complying with legal obligations</li>
              <li>Protecting against fraud and unauthorized transactions</li>
              <li>Sending promotional communications (with your consent)</li>
            </ul>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Legal Basis for Processing</h2>
            <p>
              We process your personal information based on one or more of the following legal grounds:
            </p>
            <ul>
              <li>
                <strong>Performance of a Contract:</strong> Processing necessary for the performance of a contract to which you 
                are a party or to take steps at your request before entering into a contract.
              </li>
              <li>
                <strong>Legitimate Interests:</strong> Processing necessary for our legitimate interests, provided that your 
                fundamental rights and freedoms do not override those interests.
              </li>
              <li>
                <strong>Compliance with Legal Obligations:</strong> Processing necessary for compliance with a legal obligation 
                to which we are subject.
              </li>
              <li>
                <strong>Consent:</strong> Where you have given consent to the processing of your personal data for specific purposes.
              </li>
            </ul>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Disclosure of Your Information</h2>
            <p>
              We may disclose your personal information to:
            </p>
            <ul>
              <li>
                <strong>Immigration Authorities and Government Agencies:</strong> As necessary for processing your applications 
                or as required by law.
              </li>
              <li>
                <strong>Service Providers:</strong> Third parties who perform services on our behalf, such as payment processing, 
                data analysis, email delivery, and customer service.
              </li>
              <li>
                <strong>Professional Advisors:</strong> Including lawyers, translators, and other professionals whose services 
                are required for your case.
              </li>
              <li>
                <strong>Business Partners:</strong> In connection with specific services or offerings that we provide in partnership 
                with third parties.
              </li>
              <li>
                <strong>Legal Compliance:</strong> To comply with any court order, law, or legal process, including responding 
                to government or regulatory requests.
              </li>
            </ul>
            <p>
              We require all third parties to respect the security of your personal information and to treat it in accordance 
              with applicable laws. We do not allow our third-party service providers to use your personal data for their own 
              purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Data Security</h2>
            <p>
              We have implemented appropriate security measures to prevent your personal information from being accidentally lost, 
              used, or accessed in an unauthorized way, altered, or disclosed. These measures include:
            </p>
            <ul>
              <li>Encryption of sensitive data</li>
              <li>Secure storage systems</li>
              <li>Access controls and authentication procedures</li>
              <li>Regular security assessments</li>
              <li>Staff training on data protection</li>
            </ul>
            <p>
              While we strive to use commercially acceptable means to protect your personal information, no method of transmission 
              over the Internet or method of electronic storage is 100% secure. We cannot guarantee absolute security of your data.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Data Retention</h2>
            <p>
              We will retain your personal information only for as long as necessary to fulfill the purposes for which we collected it, 
              including for the purposes of satisfying any legal, accounting, or reporting requirements. In determining the appropriate 
              retention period, we consider:
            </p>
            <ul>
              <li>The amount, nature, and sensitivity of the personal data</li>
              <li>The potential risk of harm from unauthorized use or disclosure</li>
              <li>The purposes for which we process the data</li>
              <li>Whether we can achieve those purposes through other means</li>
              <li>Applicable legal requirements</li>
            </ul>
            <p>
              For immigration and visa services, we typically retain client files for a minimum of 7 years after the conclusion 
              of your case, as this information may be relevant for future applications or legal matters.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>
                <strong>Access:</strong> You may request access to your personal information that we hold.
              </li>
              <li>
                <strong>Correction:</strong> You may request that we correct any incomplete or inaccurate information.
              </li>
              <li>
                <strong>Erasure:</strong> You may request that we delete your personal information in certain circumstances.
              </li>
              <li>
                <strong>Restriction:</strong> You may request that we restrict the processing of your personal information 
                in certain circumstances.
              </li>
              <li>
                <strong>Data Portability:</strong> You may request the transfer of your personal information to another party 
                in certain circumstances.
              </li>
              <li>
                <strong>Objection:</strong> You may object to the processing of your personal information in certain circumstances.
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Where we rely on consent as the legal basis for processing, you may withdraw 
                your consent at any time.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below. 
              We may need to verify your identity before responding to your request.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Cookies and Similar Technologies</h2>
            <p>
              Our website uses cookies and similar tracking technologies to collect information about your browsing activities. 
              Cookies are small data files that are placed on your device when you visit a website. They allow us to recognize your 
              device and remember certain information about your visit.
            </p>
            <p>
              We use cookies for various purposes, including:
            </p>
            <ul>
              <li>Keeping you signed in to your account</li>
              <li>Understanding how you use our website</li>
              <li>Remembering your preferences</li>
              <li>Measuring the effectiveness of our marketing campaigns</li>
              <li>Improving our website and services</li>
            </ul>
            <p>
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. 
              If you disable or refuse cookies, please note that some parts of our website may become inaccessible or not function properly.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Children's Privacy</h2>
            <p>
              Our services are not intended for children under 16 years of age, and we do not knowingly collect personal information 
              from children under 16. If we learn we have collected or received personal information from a child under 16 without 
              verification of parental consent, we will delete that information. If you believe we might have any information from 
              or about a child under 16, please contact us.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">International Data Transfers</h2>
            <p>
              As an immigration and visa services provider, we may transfer your personal information to countries outside your 
              country of residence, including to countries that may not provide the same level of data protection as your home country. 
              When we transfer your personal information internationally, we take appropriate safeguards to ensure that your information 
              receives an adequate level of protection.
            </p>
            <p>
              These safeguards may include:
            </p>
            <ul>
              <li>Using specific contracts approved for use in international data transfers</li>
              <li>Ensuring that recipients are bound by data protection codes of conduct</li>
              <li>Transferring to countries that have been deemed to provide an adequate level of protection</li>
            </ul>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Changes to Our Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. If we make material changes, we will notify you by email or by 
              posting a notice on our website prior to the change becoming effective. We encourage you to review this Privacy Policy 
              periodically to stay informed about how we are protecting your information.
            </p>

            <h2 className="text-3xl font-medium text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p>
              <strong>UpperVisa</strong><br />
              1330 Avenue of the Americas, Suite 23A<br />
              New York, NY 10019<br />
              Email: privacy@uppervisa.com<br />
              Phone: +1 (929) 280-5047
            </p>
            <p>
              We will respond to your inquiry as soon as possible and within the timeframe required by applicable law.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
