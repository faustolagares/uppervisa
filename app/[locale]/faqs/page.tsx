"use client"

import { useState, useMemo } from "react"
// Removed unused import: import { useLanguage } from "@/components/language-provider"
import FAQSearch from "@/components/faq/faq-search"
import FAQCategories from "@/components/faq/faq-categories"
import FAQAccordion from "@/components/faq/faq-accordion"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"

// FAQ data
const faqData = {
  "Immigration Visas": [
    {
      question: "What is the difference between immigrant and non-immigrant visas?",
      answer: `<p>Immigrant visas are for individuals who intend to live permanently in the United States, while non-immigrant visas are for temporary stays.</p>
      <p><strong>Immigrant visas</strong> lead to permanent residency (Green Card) and include categories like:</p>
      <ul>
        <li>EB-1: For individuals with extraordinary abilities</li>
        <li>EB-2: For professionals with advanced degrees</li>
        <li>EB-3: For skilled workers and professionals</li>
        <li>EB-5: For investors creating jobs in the U.S.</li>
      </ul>
      <p><strong>Non-immigrant visas</strong> are temporary and include:</p>
      <ul>
        <li>B1/B2: For business and tourism</li>
        <li>F-1: For academic students</li>
        <li>J-1: For exchange visitors</li>
        <li>L-1: For intra-company transferees</li>
      </ul>`,
    },
    {
      question: "What is an EB-1 visa and who qualifies for it?",
      answer: `<p>The EB-1 visa is a first-preference employment-based immigrant visa for individuals with extraordinary abilities in sciences, arts, education, business, or athletics.</p>
      <p>To qualify for an EB-1 visa, you must meet one of these criteria:</p>
      <ul>
        <li><strong>Extraordinary Ability (EB-1A)</strong>: You must demonstrate extraordinary ability in your field through sustained national or international acclaim.</li>
        <li><strong>Outstanding Professor or Researcher (EB-1B)</strong>: You must demonstrate international recognition for outstanding achievements in a specific academic field.</li>
        <li><strong>Multinational Manager or Executive (EB-1C)</strong>: You must have been employed outside the U.S. in a managerial or executive capacity for at least one year in the three years preceding the petition.</li>
      </ul>
      <p>The advantage of the EB-1 category is that it doesn't require labor certification, and priority dates are often current, meaning shorter waiting times.</p>`,
    },
    {
      question: "What is the EB-2 National Interest Waiver (NIW)?",
      answer: `<p>The EB-2 National Interest Waiver (NIW) allows foreign nationals to obtain permanent residency without a job offer or labor certification if their work is in the national interest of the United States.</p>
      <p>To qualify for an EB-2 NIW, you must:</p>
      <ul>
        <li>Have an advanced degree (master's or higher) or exceptional ability in your field</li>
        <li>Demonstrate that your proposed endeavor has substantial merit and national importance</li>
        <li>Show that you are well-positioned to advance this endeavor</li>
        <li>Prove that it would be beneficial to the United States to waive the job offer and labor certification requirements</li>
      </ul>
      <p>The NIW is particularly valuable for entrepreneurs, researchers, and professionals whose work benefits the U.S. but who may not have a specific employer sponsoring them.</p>`,
    },
    {
      question: "How long does the visa application process typically take?",
      answer: `<p>Visa processing times vary significantly depending on the visa type, your country of origin, and current USCIS workloads. Here are general timeframes:</p>
      <ul>
        <li><strong>Non-immigrant visas</strong> (B1/B2, F-1, J-1): Usually 2-4 weeks after the interview, though interview wait times can vary from days to months depending on the embassy/consulate.</li>
        <li><strong>Employment-based immigrant visas</strong> (EB-1, EB-2, EB-3): 6 months to several years, depending on the category, country of birth (due to per-country limits), and current priority dates.</li>
        <li><strong>Family-based immigrant visas</strong>: 1-5+ years, depending on the relationship and country of birth.</li>
      </ul>
      <p>Premium processing is available for certain petition types, which guarantees a response (not necessarily approval) within 15 calendar days for an additional fee.</p>
      <p>At UpperVisa, we work to optimize your application to minimize delays and keep you informed throughout the process.</p>`,
    },
    {
      question: "What documents are typically required for visa applications?",
      answer: `<p>While specific requirements vary by visa type, most applications require:</p>
      <ul>
        <li>Valid passport (valid for at least 6 months beyond your intended period of stay)</li>
        <li>Completed visa application forms (DS-160 for non-immigrant visas, DS-260 for immigrant visas)</li>
        <li>Application fee payment receipt</li>
        <li>Photo(s) meeting specific requirements</li>
        <li>Evidence of intent to return to your home country (for non-immigrant visas)</li>
        <li>Financial documentation showing ability to support yourself</li>
        <li>Supporting documents specific to your visa category (educational credentials, employment verification, etc.)</li>
      </ul>
      <p>Additional documents may include:</p>
      <ul>
        <li>Invitation letters or employment offers</li>
        <li>Educational diplomas and transcripts</li>
        <li>Marriage or birth certificates (for dependent applications)</li>
        <li>Police clearance certificates</li>
        <li>Medical examination results</li>
      </ul>
      <p>Our team at UpperVisa provides a customized document checklist for your specific visa type and situation.</p>`,
    },
  ],
  "Relocation & Settlement": [
    {
      question: "How can I find housing in the United States?",
      answer: `<p>Finding housing in the U.S. involves several approaches:</p>
      <ul>
        <li><strong>Online platforms</strong>: Websites like Zillow, Apartments.com, and Realtor.com list rentals and properties for sale.</li>
        <li><strong>Real estate agents</strong>: Licensed professionals who can help you find properties matching your criteria (typically free for renters, as landlords pay their commission).</li>
        <li><strong>University housing offices</strong>: For students, these offices can help with on-campus housing or provide resources for off-campus options.</li>
        <li><strong>Corporate housing</strong>: For temporary stays, furnished apartments are available for short-term leases.</li>
      </ul>
      <p>When renting in the U.S., you'll typically need:</p>
      <ul>
        <li>Proof of income (usually 2-3 times the monthly rent)</li>
        <li>Credit history (which can be challenging for new arrivals)</li>
        <li>Security deposit (usually one month's rent)</li>
        <li>First and sometimes last month's rent upfront</li>
      </ul>
      <p>UpperVisa's relocation services can help you navigate these requirements, including providing guidance on neighborhoods, lease agreements, and establishing rental history without U.S. credit.</p>`,
    },
    {
      question: "How do I set up a bank account in the U.S.?",
      answer: `<p>Setting up a bank account in the U.S. is an important first step after arrival. Here's what you'll need:</p>
      <ul>
        <li><strong>Identification</strong>: Your passport and visa</li>
        <li><strong>Secondary ID</strong>: This could be your I-94 arrival record, driver's license, or other government-issued ID</li>
        <li><strong>Proof of address</strong>: Utility bill, lease agreement, or letter from your employer/school</li>
        <li><strong>Initial deposit</strong>: The amount varies by bank (typically $25-$100)</li>
        <li><strong>Social Security Number (SSN)</strong>: While helpful, many banks now offer accounts to non-citizens without an SSN</li>
      </ul>
      <p>Steps to open an account:</p>
      <ol>
        <li>Research banks and credit unions to find one that meets your needs (consider fees, branch/ATM locations, and services for non-citizens)</li>
        <li>Schedule an appointment (recommended but not always required)</li>
        <li>Visit the branch with your documents</li>
        <li>Complete the application process</li>
      </ol>
      <p>Major U.S. banks like Bank of America, Chase, and Wells Fargo offer programs specifically for newcomers to the U.S. Some online banks like Wise (formerly TransferWise) also offer multi-currency accounts that can be useful during transition.</p>`,
    },
    {
      question: "How does the U.S. healthcare system work?",
      answer: `<p>The U.S. healthcare system is primarily private and insurance-based, which can be complex for newcomers. Here's a basic overview:</p>
      <p><strong>Types of health insurance:</strong></p>
      <ul>
        <li><strong>Employer-sponsored insurance</strong>: Many employers offer health insurance as a benefit</li>
        <li><strong>Marketplace plans</strong>: Individual insurance plans available through Healthcare.gov</li>
        <li><strong>Medicaid</strong>: Government program for low-income individuals (eligibility varies by state and immigration status)</li>
        <li><strong>Medicare</strong>: Government program primarily for those 65+ (generally requires 40 quarters of work history in the U.S.)</li>
        <li><strong>Student health insurance</strong>: Available through many universities</li>
        <li><strong>Travel insurance</strong>: Short-term coverage for new arrivals</li>
      </ul>
      <p><strong>Key healthcare terms:</strong></p>
      <ul>
        <li><strong>Premium</strong>: Monthly payment to maintain insurance</li>
        <li><strong>Deductible</strong>: Amount you pay before insurance begins covering costs</li>
        <li><strong>Copay</strong>: Fixed amount you pay for covered services</li>
        <li><strong>Coinsurance</strong>: Percentage of costs you pay after meeting your deductible</li>
        <li><strong>Network</strong>: Doctors and facilities that contract with your insurance (using "in-network" providers is less expensive)</li>
      </ul>
      <p>For new immigrants, we recommend obtaining health insurance as soon as possible, as medical costs without insurance can be extremely high. UpperVisa can help you understand your options based on your specific situation.</p>`,
    },
    {
      question: "How do I obtain a Social Security Number (SSN)?",
      answer: `<p>A Social Security Number (SSN) is essential for working legally in the U.S. and accessing many services. Here's how to obtain one:</p>
      <p><strong>Who can apply:</strong></p>
      <ul>
        <li>U.S. citizens</li>
        <li>Permanent residents (Green Card holders)</li>
        <li>Non-immigrants authorized to work in the U.S. (e.g., H-1B, L-1, O-1 visa holders)</li>
        <li>Some non-immigrants who need an SSN for non-work purposes</li>
      </ul>
      <p><strong>Application process:</strong></p>
      <ol>
        <li>Wait at least 10 days after arriving in the U.S. (to ensure your immigration records are available in the SSA system)</li>
        <li>Complete Form SS-5 (Application for a Social Security Card)</li>
        <li>Gather required documents:
          <ul>
            <li>Passport</li>
            <li>I-94 arrival record</li>
            <li>Visa and supporting documents (I-797 approval notice, DS-2019, etc.)</li>
          </ul>
        </li>
        <li>Visit your local Social Security Administration office in person (appointments are recommended)</li>
      </ol>
      <p>Processing typically takes 2-4 weeks. Once issued, your SSN is valid for life, even if your immigration status changes.</p>
      <p>Note: Some visa holders can apply for an SSN as part of their visa application process. If you did this, you should receive your card within 3 weeks of arriving in the U.S.</p>`,
    },
  ],
  "Study & Professional Growth": [
    {
      question: "What is the difference between F-1 and J-1 student visas?",
      answer: `<p>Both F-1 and J-1 visas allow international students to study in the U.S., but they have important differences:</p>
      <p><strong>F-1 Student Visa:</strong></p>
      <ul>
        <li><strong>Purpose</strong>: Primary purpose is academic study at an accredited U.S. institution</li>
        <li><strong>Funding</strong>: Can be self-funded or sponsored</li>
        <li><strong>Work Authorization</strong>: Limited on-campus employment (20 hours/week during school, full-time during breaks); off-campus work only through CPT or OPT</li>
        <li><strong>Duration</strong>: Valid for the duration of your academic program plus OPT</li>
        <li><strong>Home Residency Requirement</strong>: None</li>
      </ul>
      <p><strong>J-1 Exchange Visitor Visa:</strong></p>
      <ul>
        <li><strong>Purpose</strong>: Cultural and educational exchange programs</li>
        <li><strong>Funding</strong>: Often requires substantial funding from scholarships, grants, or the exchange program itself</li>
        <li><strong>Work Authorization</strong>: Similar on-campus work limits; off-campus work through Academic Training</li>
        <li><strong>Duration</strong>: Specific to the exchange program (typically 1-2 years)</li>
        <li><strong>Home Residency Requirement</strong>: Many J-1 visitors must return to their home country for 2 years after completing their program before being eligible for certain U.S. visas</li>
      </ul>
      <p>F-1 visas are generally more flexible for those planning to stay in the U.S. long-term, while J-1 visas are designed for cultural exchange with the expectation of returning to your home country.</p>`,
    },
    {
      question: "What are CPT and OPT for F-1 students?",
      answer: `<p>Curricular Practical Training (CPT) and Optional Practical Training (OPT) are work authorization programs for F-1 students:</p>
      <p><strong>Curricular Practical Training (CPT):</strong></p>
      <ul>
        <li><strong>Definition</strong>: Employment that is an integral part of your curriculum or academic program</li>
        <li><strong>Eligibility</strong>: Must have completed one academic year and the training must be related to your major</li>
        <li><strong>Timing</strong>: Available during your academic program</li>
        <li><strong>Duration</strong>: Part-time (20 hours/week) during the academic year; can be full-time during breaks</li>
        <li><strong>Application</strong>: Processed by your school's DSO (Designated School Official)</li>
        <li><strong>Impact on OPT</strong>: Using 12+ months of full-time CPT eliminates OPT eligibility</li>
      </ul>
      <p><strong>Optional Practical Training (OPT):</strong></p>
      <ul>
        <li><strong>Definition</strong>: Temporary employment directly related to your field of study</li>
        <li><strong>Eligibility</strong>: Must have completed one academic year</li>
        <li><strong>Types</strong>:
          <ul>
            <li>Pre-completion OPT: Before completing your program</li>
            <li>Post-completion OPT: After completing your program</li>
            <li>STEM OPT Extension: Additional 24 months for STEM graduates</li>
          </ul>
        </li>
        <li><strong>Duration</strong>: Up to 12 months total (plus 24-month extension for STEM fields)</li>
        <li><strong>Application</strong>: Requires USCIS approval (Form I-765)</li>
        <li><strong>Unemployment limits</strong>: Maximum 90 days of unemployment during regular OPT; additional 60 days for STEM OPT extension</li>
      </ul>
      <p>Both programs provide valuable U.S. work experience and can be stepping stones to longer-term work visas like H-1B.</p>`,
    },
    {
      question: "How can I transition from a student visa to a work visa?",
      answer: `<p>Transitioning from a student visa (F-1) to a work visa involves several potential pathways:</p>
      <p><strong>Common transition paths:</strong></p>
      <ol>
        <li><strong>F-1 → OPT → H-1B</strong>: The most common path
          <ul>
            <li>Complete your degree program on F-1 status</li>
            <li>Apply for post-completion OPT (12 months)</li>
            <li>If eligible, apply for STEM OPT extension (additional 24 months)</li>
            <li>During OPT, find an employer willing to sponsor an H-1B visa</li>
          </ul>
        </li>
        <li><strong>F-1 → O-1</strong>: For individuals with extraordinary ability
          <ul>
            <li>Demonstrate extraordinary ability in your field</li>
            <li>Find an employer or agent to sponsor your O-1 petition</li>
          </ul>
        </li>
        <li><strong>F-1 → EB Green Card</strong>: Direct path to permanent residency
          <ul>
            <li>Find an employer willing to sponsor an employment-based green card</li>
            <li>For EB-1 or EB-2 NIW, you may self-petition without employer sponsorship</li>
          </ul>
        </li>
      </ol>
      <p><strong>Key considerations:</strong></p>
      <ul>
        <li><strong>Timing</strong>: Plan ahead, as H-1B has an annual lottery with limited slots</li>
        <li><strong>Maintain status</strong>: Ensure no gaps in legal status during transitions</li>
        <li><strong>Dual intent</strong>: F-1 is a non-immigrant visa without dual intent, so be careful about green card applications while on F-1</li>
        <li><strong>Cap-exempt employers</strong>: Consider working for universities, non-profits, or research organizations that are exempt from the H-1B cap</li>
      </ul>
      <p>UpperVisa can help you develop a personalized strategy for transitioning from student to professional status in the U.S., including timing your applications and preparing documentation to maximize your chances of approval.</p>`,
    },
    {
      question: "What are the best universities in the U.S. for international students?",
      answer: `<p>The "best" university depends on your field of study, budget, and personal preferences, but these institutions are known for strong international student support:</p>
      <p><strong>Top universities with large international student populations:</strong></p>
      <ul>
        <li><strong>New York University (NYU)</strong>: Located in NYC with global campuses and strong programs in business, arts, and humanities</li>
        <li><strong>University of Southern California (USC)</strong>: Known for engineering, business, and film programs</li>
        <li><strong>Northeastern University</strong>: Famous for its co-op program that integrates work experience</li>
        <li><strong>Columbia University</strong>: Ivy League institution with strengths across disciplines</li>
        <li><strong>University of Illinois at Urbana-Champaign</strong>: Excellent for engineering and computer science</li>
        <li><strong>Purdue University</strong>: Strong in engineering and sciences with a large international community</li>
      </ul>
      <p><strong>Factors to consider when choosing a university:</strong></p>
      <ul>
        <li><strong>Academic reputation</strong> in your specific field of study</li>
        <li><strong>International student services</strong> (dedicated advisors, orientation programs)</li>
        <li><strong>Location</strong> (urban vs. rural, climate, proximity to industries in your field)</li>
        <li><strong>Cost and financial aid</strong> (tuition, living expenses, scholarship opportunities)</li>
        <li><strong>OPT/CPT opportunities</strong> and career services for international students</li>
        <li><strong>Community</strong> (presence of students from your country/region)</li>
      </ul>
      <p>UpperVisa can provide personalized guidance on university selection based on your academic background, career goals, and budget, as well as assistance with the application and visa process.</p>`,
    },
  ],
  "Business & Investment": [
    {
      question: "What is the EB-5 Immigrant Investor Program?",
      answer: `<p>The EB-5 Immigrant Investor Program offers permanent residency (green cards) to foreign investors who make a qualifying investment in a U.S. business that creates jobs.</p>
      <p><strong>Key requirements:</strong></p>
      <ul>
        <li><strong>Investment amount</strong>: 
          <ul>
            <li>$1,050,000 for standard investments</li>
            <li>$800,000 for investments in Targeted Employment Areas (TEAs) - rural areas or areas with high unemployment</li>
          </ul>
        </li>
        <li><strong>Job creation</strong>: Must create or preserve at least 10 full-time jobs for qualifying U.S. workers within 2 years</li>
        <li><strong>Investment types</strong>:
          <ul>
            <li>Direct investment in your own commercial enterprise</li>
            <li>Investment through a Regional Center (pre-approved investment vehicles)</li>
          </ul>
        </li>
      </ul>
      <p><strong>Process overview:</strong></p>
      <ol>
        <li>Select and make a qualifying investment</li>
        <li>File Form I-526 (Immigrant Petition by Alien Entrepreneur)</li>
        <li>Upon approval, apply for conditional permanent residence</li>
        <li>After 2 years, file Form I-829 to remove conditions by proving the investment maintained and jobs created</li>
      </ol>
      <p>The EB-5 program offers several advantages, including no education or business experience requirements, no language requirements, and the ability to include spouse and unmarried children under 21 in the application.</p>
      <p>UpperVisa provides comprehensive guidance on EB-5 investments, including due diligence on regional centers and projects, documentation preparation, and compliance monitoring throughout the conditional residency period.</p>`,
    },
    {
      question: "How can I start a business in the U.S. as a foreign national?",
      answer: `<p>Foreign nationals can start businesses in the U.S. through several approaches:</p>
      <p><strong>Business formation options:</strong></p>
      <ul>
        <li><strong>Limited Liability Company (LLC)</strong>: Most popular structure offering liability protection and tax flexibility</li>
        <li><strong>C Corporation</strong>: Separate legal entity with more formal requirements but attractive to investors</li>
        <li><strong>S Corporation</strong>: Tax benefits but restrictions on foreign ownership</li>
        <li><strong>Branch Office</strong>: Extension of a foreign company</li>
      </ul>
      <p><strong>Steps to establish a U.S. business:</strong></p>
      <ol>
        <li>Develop a business plan</li>
        <li>Choose a business structure</li>
        <li>Select a state for registration (Delaware, Wyoming, and Nevada are popular for foreign owners)</li>
        <li>Register your business with the state</li>
        <li>Obtain an Employer Identification Number (EIN) from the IRS</li>
        <li>Open a U.S. business bank account</li>
        <li>Comply with local licensing requirements</li>
      </ol>
      <p><strong>Visa options for business owners:</strong></p>
      <ul>
        <li><strong>E-2 Treaty Investor Visa</strong>: For nationals of treaty countries making a substantial investment</li>
        <li><strong>L-1 Intracompany Transferee</strong>: For transferring from a foreign company to its U.S. affiliate</li>
        <li><strong>EB-5 Immigrant Investor</strong>: For substantial investments creating jobs</li>
        <li><strong>O-1 Extraordinary Ability</strong>: For individuals with exceptional skills in business</li>
      </ul>
      <p>UpperVisa offers comprehensive business formation services, including legal structure advice, state selection guidance, registration assistance, and visa strategy development tailored to your business goals.</p>`,
    },
    {
      question: "What are the tax implications of owning a U.S. business as a foreign national?",
      answer: `<p>Tax implications for foreign business owners depend on your immigration status, business structure, and whether you're considered a U.S. tax resident:</p>
      <p><strong>Tax residency status:</strong></p>
      <ul>
        <li><strong>U.S. tax residents</strong> (green card holders or those meeting the Substantial Presence Test) are taxed on worldwide income</li>
        <li><strong>Non-resident aliens</strong> are generally taxed only on U.S.-source income</li>
      </ul>
      <p><strong>Business structure tax considerations:</strong></p>
      <ul>
        <li><strong>LLC</strong>: 
          <ul>
            <li>Single-member LLC: Treated as a disregarded entity (reported on personal tax return) or can elect corporate taxation</li>
            <li>Multi-member LLC: Typically taxed as a partnership or can elect corporate taxation</li>
            <li>Foreign-owned single-member LLCs have additional reporting requirements</li>
          </ul>
        </li>
        <li><strong>C Corporation</strong>: 
          <ul>
            <li>Subject to corporate income tax (currently 21% federal rate)</li>
            <li>Dividends to foreign shareholders subject to 30% withholding tax (may be reduced by tax treaties)</li>
            <li>Potential for "branch profits tax" on foreign corporations</li>
          </ul>
        </li>
        <li><strong>S Corporation</strong>: Generally not available to non-resident aliens</li>
      </ul>
      <p><strong>Key tax considerations:</strong></p>
      <ul>
        <li><strong>Transfer pricing</strong>: Transactions between your U.S. business and foreign affiliates must be at "arm's length"</li>
        <li><strong>Withholding requirements</strong>: U.S. businesses must withhold taxes on certain payments to foreign persons</li>
        <li><strong>Tax treaties</strong>: May provide relief from double taxation and reduce withholding rates</li>
        <li><strong>FATCA and FBAR</strong>: Foreign account reporting requirements if you have financial accounts outside the U.S.</li>
        <li><strong>State and local taxes</strong>: Vary significantly by location</li>
      </ul>
      <p>UpperVisa works with specialized international tax professionals to help you structure your business in a tax-efficient manner while ensuring compliance with all U.S. tax obligations.</p>`,
    },
    {
      question: "What is the E-2 Treaty Investor Visa?",
      answer: `<p>The E-2 Treaty Investor Visa allows nationals of treaty countries to enter and work in the United States based on a substantial investment in a U.S. business.</p>
      <p><strong>Key requirements:</strong></p>
      <ul>
        <li><strong>Treaty country</strong>: You must be a citizen of a country that maintains a treaty of commerce and navigation with the U.S.</li>
        <li><strong>Substantial investment</strong>: The investment must be substantial relative to the business type (typically $100,000+ but varies by industry)</li>
        <li><strong>Active business</strong>: The investment must be in an active, real operating business (not passive investments like real estate)</li>
        <li><strong>More than marginal</strong>: The business must generate significantly more income than just to support you and your family or create jobs</li>
        <li><strong>Control</strong>: You must own at least 50% of the business or have operational control through a managerial position</li>
      </ul>
      <p><strong>Benefits:</strong></p>
      <ul>
        <li>Initial stay of up to 2 years with unlimited extensions as long as you maintain qualification</li>
        <li>Spouse can apply for work authorization</li>
        <li>Children under 21 can attend school in the U.S.</li>
        <li>No minimum job creation requirement (unlike EB-5)</li>
        <li>Relatively quick processing compared to immigrant visas</li>
      </ul>
      <p><strong>Limitations:</strong></p>
      <ul>
        <li>Does not directly lead to permanent residency (non-immigrant intent required)</li>
        <li>Limited to treaty country nationals</li>
        <li>Business must remain active and profitable</li>
      </ul>
      <p>UpperVisa provides comprehensive E-2 visa services, including business plan development, investment structuring advice, and application preparation to maximize your chances of approval.</p>`,
    },
  ],
  "General Questions": [
    {
      question: "What services does UpperVisa offer?",
      answer: `<p>UpperVisa offers comprehensive immigration and relocation services, including:</p>
      <ul>
        <li><strong>Immigration Visa Services</strong>:
          <ul>
            <li>Immigrant visa applications (EB-1, EB-2, EB-3, EB-5)</li>
            <li>Non-immigrant visa applications (B1/B2, F-1, J-1, L-1, etc.)</li>
            <li>National Interest Waiver petitions</li>
            <li>Green card applications</li>
            <li>Citizenship and naturalization</li>
          </ul>
        </li>
        <li><strong>Relocation & Settlement Solutions</strong>:
          <ul>
            <li>Housing assistance</li>
            <li>Banking and financial setup</li>
            <li>Education support</li>
            <li>Healthcare guidance</li>
            <li>Social integration assistance</li>
          </ul>
        </li>
        <li><strong>Study & Professional Growth Programs</strong>:
          <ul>
            <li>Student visa guidance</li>
            <li>University selection and application assistance</li>
            <li>OPT/CPT advisory services</li>
            <li>Student-to-professional visa transitions</li>
          </ul>
        </li>
        <li><strong>Business & Investment Services</strong>:
          <ul>
            <li>EB-5 investor visa guidance</li>
            <li>Business formation for foreign nationals</li>
            <li>E-2 treaty investor visa applications</li>
            <li>LLC setup and regulatory guidance</li>
            <li>Business tax planning for international entrepreneurs</li>
          </ul>
        </li>
      </ul>
      <p>Our team of experienced immigration consultants provides personalized guidance through every step of your immigration journey, ensuring a smooth and successful process.</p>`,
    },
    {
      question: "How much do UpperVisa's services cost?",
      answer: `<p>UpperVisa's service fees vary based on the complexity of your case, the type of visa or service required, and the level of support needed. We offer several service models:</p>
      <ul>
        <li><strong>Consultation Services</strong>: $150-$300 for initial consultations (credited toward full service if you proceed)</li>
        <li><strong>Document Review</strong>: $500-$1,500 for review and guidance on self-prepared applications</li>
        <li><strong>Full-Service Representation</strong>: $2,000-$15,000+ depending on visa type and complexity</li>
        <li><strong>Business Immigration Services</strong>: Custom pricing based on business needs and scope</li>
      </ul>
      <p>All service packages include:</p>
      <ul>
        <li>Personalized case assessment</li>
        <li>Strategic planning and timeline development</li>
        <li>Document preparation guidance</li>
        <li>Application review and submission</li>
        <li>Case monitoring and updates</li>
        <li>Response to USCIS inquiries and RFEs (Requests for Evidence)</li>
      </ul>
      <p>We believe in transparent pricing and will provide a detailed quote after your initial consultation, based on your specific circumstances and goals. We also offer payment plans to make our services more accessible.</p>
      <p>Note that government filing fees, medical examination costs, and other third-party expenses are not included in our service fees.</p>`,
    },
    {
      question: "What is UpperVisa's success rate for visa applications?",
      answer: `<p>UpperVisa maintains a high success rate for visa applications across various categories:</p>
      <ul>
        <li>99% success rate for properly prepared and qualified applications</li>
        <li>Over 5,000 successful visa cases processed</li>
        <li>Particularly strong results in complex cases including EB-1, EB-2 NIW, and E-2 visas</li>
      </ul>
      <p>Our success stems from:</p>
      <ul>
        <li><strong>Thorough pre-screening</strong>: We evaluate each case carefully and only proceed when we believe there is a path to approval</li>
        <li><strong>Customized strategies</strong>: We develop personalized approaches rather than using one-size-fits-all templates</li>
        <li><strong>Comprehensive documentation</strong>: We ensure all applications are thoroughly documented and professionally presented</li>
        <li><strong>Experienced team</strong>: Our consultants have deep expertise in specific visa categories</li>
        <li><strong>Adaptability</strong>: We stay current with changing immigration policies and adjust strategies accordingly</li>
      </ul>
      <p>While we're proud of our track record, we always provide honest assessments of your chances based on your specific circumstances. If we believe your case faces significant challenges, we'll discuss alternative pathways rather than proceeding with an application unlikely to succeed.</p>`,
    },
    {
      question: "How long does it take to work with UpperVisa on a visa application?",
      answer: `<p>The timeline for working with UpperVisa varies depending on the visa type and your personal circumstances, but here's a general overview:</p>
      <p><strong>Our process timeline:</strong></p>
      <ol>
        <li><strong>Initial Consultation</strong>: 1-2 weeks to schedule and complete</li>
        <li><strong>Strategy Development</strong>: 1-2 weeks to create your personalized immigration plan</li>
        <li><strong>Document Collection</strong>: 2-8 weeks (varies significantly based on your situation and document availability)</li>
        <li><strong>Application Preparation</strong>: 2-4 weeks to prepare all forms and supporting materials</li>
        <li><strong>Review and Finalization</strong>: 1-2 weeks for final review and adjustments</li>
        <li><strong>Submission and Monitoring</strong>: Ongoing until decision (government processing times vary widely)</li>
      </ol>
      <p><strong>Total UpperVisa preparation time</strong> (before submission to government):</p>
      <ul>
        <li><strong>Expedited cases</strong>: As quick as 4-6 weeks for urgent situations</li>
        <li><strong>Standard timeline</strong>: 2-4 months from engagement to submission</li>
        <li><strong>Complex cases</strong>: 4-6 months for cases requiring extensive documentation</li>
      </ul>
      <p>Note that after submission, government processing times are outside our control and vary significantly by visa type, service center workloads, and your country of origin. We provide estimated government processing times during your consultation based on current USCIS or State Department timeframes.</p>
      <p>Throughout the process, we maintain regular communication about your case status and any developments affecting your timeline.</p>`,
    },
    {
      question: "What happens if my visa application is denied?",
      answer: `<p>While UpperVisa maintains a high approval rate, we understand that denials can occur. If your application is denied, we take these steps:</p>
      <ol>
        <li><strong>Thorough Analysis</strong>: We carefully review the denial notice to understand the exact reasons for the decision</li>
        <li><strong>Strategy Consultation</strong>: We schedule a meeting to discuss your options, which may include:
          <ul>
            <li><strong>Motion to Reopen/Reconsider</strong>: Asking the same office to review the decision based on new information or legal arguments</li>
            <li><strong>Appeal</strong>: Challenging the decision with a higher authority (such as the Administrative Appeals Office)</li>
            <li><strong>Reapplication</strong>: Submitting a new application addressing the issues in the denial</li>
            <li><strong>Alternative Visa Pathways</strong>: Exploring different visa categories that might be more suitable</li>
          </ul>
        </li>
        <li><strong>Implementation</strong>: We help you execute the chosen strategy, preparing any necessary documentation</li>
      </ol>
      <p><strong>Our denial protection policy:</strong></p>
      <ul>
        <li>For cases where we provided full representation, we offer significantly reduced fees for reapplications or appeals</li>
        <li>If a denial was due to an error on our part (extremely rare), we handle the reapplication or appeal at no additional professional fee</li>
        <li>We provide honest assessments of your chances with each potential remedy</li>
      </ul>
      <p>It's important to note that some denials are based on factors outside anyone's control, such as changes in immigration policy or subjective consular decisions. In these cases, we focus on finding alternative pathways to achieve your immigration goals.</p>`,
    },
  ],
}

export default function FAQsPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  // Removed unused variable: const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("Immigration Visas")
  const categories = Object.keys(faqData)

  // Filter FAQs based on search query
  const filteredFAQs = useMemo(() => {
    if (!searchQuery.trim()) {
      return faqData
    }

    const query = searchQuery.toLowerCase()
    const results: Record<string, (typeof faqData)[keyof typeof faqData]> = {}

    Object.entries(faqData).forEach(([category, items]) => {
      const filteredItems = items.filter(
        (item) => item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query),
      )

      if (filteredItems.length > 0) {
        results[category] = filteredItems
      }
    })

    return results
  }, [searchQuery]) // Removed faqData from dependency array

  // Get the FAQs for the active category
  const activeFAQs = filteredFAQs[activeCategory as keyof typeof faqData] || [] // Added type assertion

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about immigration, visas, and our services. If you can't find what you're
            looking for, feel free to contact us.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-50">
        <div className="w-full max-w-[1350px] mx-auto px-4">
          {/* Search Bar */}
          <FAQSearch onSearch={setSearchQuery} placeholder="Search for answers..." />

          {/* Categories and FAQs */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-3/4">
              {/* Category Tabs */}
              <FAQCategories
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />

              {/* FAQ Accordion */}
              {activeFAQs.length > 0 ? (
                <FAQAccordion items={activeFAQs} />
              ) : (
                <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                  <p className="text-gray-600">
                    No FAQs found matching your search. Please try different keywords or browse our categories.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="bg-white p-6 rounded-lg border border-gray-200 sticky top-24">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Still Have Questions?</h3>
                <p className="text-gray-600 mb-6">
                  Can't find the answer you're looking for? Please contact our support team for assistance.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-red-600 mr-3" />
                    <a href="mailto:hello@uppervisa.com" className="text-gray-700 hover:text-red-600">
                      hello@uppervisa.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-red-600 mr-3" />
                    <a href="tel:+19292805047" className="text-gray-700 hover:text-red-600">
                      +1 (929) 280-5047
                    </a>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href={`/${locale}/contact`}
                    className="block w-full bg-red-600 text-white text-center py-3 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
