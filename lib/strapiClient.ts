const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

/**
 * Fetches the contact form schema from Strapi
 * This allows the form to be dynamically generated based on the Strapi schema
 */
export async function getContactFormSchema() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/contact-form-schema`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(STRAPI_API_TOKEN ? { 'Authorization': `Bearer ${STRAPI_API_TOKEN}` } : {}),
      },
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to fetch form schema from Strapi');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching form schema from Strapi:', error);
    // Return a default schema if the API call fails
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
}

/**
 * Creates a new contact submission in Strapi
 */
export async function createContactSubmission(data: any) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/contact-submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(STRAPI_API_TOKEN ? { 'Authorization': `Bearer ${STRAPI_API_TOKEN}` } : {}),
      },
      body: JSON.stringify({ data }),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to submit to Strapi');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error submitting to Strapi:', error);
    throw error;
  }
}
