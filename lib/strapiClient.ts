/**
 * Returns a default contact form schema
 * This is a temporary solution until Strapi is set up
 */
export async function getContactFormSchema() {
  // Return a default schema since Strapi is not set up yet
  return {
    data: {
      attributes: {
        fields: [
          { name: 'firstName', type: 'text', required: true, label: 'First Name' },
          { name: 'lastName', type: 'text', required: true, label: 'Last Name' },
          { name: 'email', type: 'email', required: true, label: 'Email Address' },
          { name: 'phone', type: 'tel', required: false, label: 'Phone Number' },
          { name: 'countryOfOrigin', type: 'text', required: true, label: 'Country of Origin' },
          { 
            name: 'visaType', 
            type: 'select', 
            required: true, 
            label: 'Visa Type of Interest',
            options: [
              { value: 'tourist', label: 'Tourist Visa (B-2)' },
              { value: 'business', label: 'Business Visa (B-1)' },
              { value: 'work', label: 'Work Visa (H-1B, L-1, O-1, etc.)' },
              { value: 'student', label: 'Student Visa (F-1, M-1)' },
              { value: 'family', label: 'Family-Based Immigration' },
              { value: 'investment', label: 'Investment Visa (EB-5)' },
              { value: 'green-card', label: 'Green Card Application' },
              { value: 'citizenship', label: 'Citizenship & Naturalization' },
              { value: 'other', label: 'Other Immigration Services' },
            ]
          },
          { 
            name: 'immigrationStatus', 
            type: 'select', 
            required: false, 
            label: 'Current Immigration Status',
            options: [
              { value: 'citizen', label: 'U.S. Citizen' },
              { value: 'permanent-resident', label: 'Permanent Resident (Green Card Holder)' },
              { value: 'visa-holder', label: 'Current Visa Holder' },
              { value: 'no-status', label: 'No Current U.S. Immigration Status' },
              { value: 'pending', label: 'Pending Application' },
            ]
          },
          { name: 'message', type: 'textarea', required: true, label: 'Your Message' },
        ]
      }
    }
  };
}

/**
 * Placeholder for contact submission (Strapi not set up yet)
 */
export async function createContactSubmission(data: any) {
  // This is a placeholder function since Strapi is not set up yet
  console.log('Contact submission data (Strapi not available):', data);
  return { success: true, message: 'Submission received (Strapi not available)' };
}
