# Strapi Integration for Contact Form

This document provides instructions on how to set up and use the Strapi integration for the contact form.

## Overview

The contact form has been integrated with Strapi to provide a flexible and dynamic form solution. This allows you to:

1. Store form submissions in a structured database
2. Easily modify form fields without changing code
3. Track and manage submissions through the Strapi admin panel
4. Generate reports and analytics on form submissions

## Setup Instructions

### 1. Install and Run Strapi

The Strapi server is installed in the `strapi` directory. To start it:

```bash
cd strapi
npm run develop
```

This will start the Strapi server at http://localhost:1337/admin

### 2. Create an Admin Account

The first time you run Strapi, you'll need to create an admin account. Follow the on-screen instructions to set up your account.

### 3. Create Content Types

You need to create two content types in Strapi:

#### A. Contact Submission

1. Go to "Content-Type Builder" in the Strapi admin
2. Click "Create new collection type"
3. Name it "Contact Submission"
4. Add the following fields:
   - First Name (Text, required)
   - Last Name (Text, required)
   - Email (Email, required)
   - Phone (Text)
   - Country of Origin (Text, required)
   - Visa Type (Enumeration, required) with options matching your form
   - Immigration Status (Enumeration) with options matching your form
   - Message (Long text, required)
   - Status (Enumeration, required) with values: New, In Progress, Responded, Closed
   - Submitted At (DateTime, required)
   - Notes (Rich Text)
5. Save the content type

#### B. Contact Form Schema

1. Go to "Content-Type Builder" in the Strapi admin
2. Click "Create new single type"
3. Name it "Contact Form Schema"
4. Add a JSON field named "fields" with the following structure:
   ```json
   [
     {
       "name": "firstName",
       "type": "text",
       "required": true,
       "label": "First Name"
     },
     {
       "name": "lastName",
       "type": "text",
       "required": true,
       "label": "Last Name"
     },
     {
       "name": "email",
       "type": "email",
       "required": true,
       "label": "Email Address"
     },
     {
       "name": "phone",
       "type": "tel",
       "required": false,
       "label": "Phone Number"
     },
     {
       "name": "countryOfOrigin",
       "type": "text",
       "required": true,
       "label": "Country of Origin"
     },
     {
       "name": "visaType",
       "type": "select",
       "required": true,
       "label": "Visa Type of Interest",
       "options": [
         { "value": "tourist", "label": "Tourist Visa (B-2)" },
         { "value": "business", "label": "Business Visa (B-1)" },
         { "value": "work", "label": "Work Visa (H-1B, L-1, O-1, etc.)" },
         { "value": "student", "label": "Student Visa (F-1, M-1)" },
         { "value": "family", "label": "Family-Based Immigration" },
         { "value": "investment", "label": "Investment Visa (EB-5)" },
         { "value": "green-card", "label": "Green Card Application" },
         { "value": "citizenship", "label": "Citizenship & Naturalization" },
         { "value": "other", "label": "Other Immigration Services" }
       ]
     },
     {
       "name": "immigrationStatus",
       "type": "select",
       "required": false,
       "label": "Current Immigration Status",
       "options": [
         { "value": "citizen", "label": "U.S. Citizen" },
         { "value": "permanent-resident", "label": "Permanent Resident (Green Card Holder)" },
         { "value": "visa-holder", "label": "Current Visa Holder" },
         { "value": "no-status", "label": "No Current U.S. Immigration Status" },
         { "value": "pending", "label": "Pending Application" }
       ]
     },
     {
       "name": "message",
       "type": "textarea",
       "required": true,
       "label": "Your Message"
     },
     {
       "name": "agreeToTerms",
       "type": "checkbox",
       "required": true,
       "label": "I agree that my submitted data is being collected and stored. For details on how we use your information, please see our Privacy Policy."
     }
   ]
   ```
5. Save the single type

### 4. Configure Permissions

1. Go to "Settings" > "Roles" > "Public"
2. Find your "Contact Submission" content type and enable the "create" permission
3. Find your "Contact Form Schema" single type and enable the "find" permission
4. Save the role

### 5. Generate an API Token

1. Go to "Settings" > "API Tokens"
2. Click "Create new API token"
3. Name it "Contact Form Token"
4. Set the type to "Full access" or customize permissions as needed
5. Copy the generated token

### 6. Update Environment Variables

Add the Strapi API token to your `.env.local` file:

```
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_token_here
```

## Modifying the Form

To modify the form fields:

1. Go to "Content Manager" > "Contact Form Schema" in the Strapi admin
2. Edit the "fields" JSON field
3. Add, remove, or modify fields as needed
4. Save the changes

The form will automatically update with your changes the next time it's loaded.

## Managing Submissions

To view and manage form submissions:

1. Go to "Content Manager" > "Contact Submissions" in the Strapi admin
2. You can filter, sort, and search submissions
3. Click on a submission to view details and update its status
4. Add notes to track communication with the submitter

## Deployment

When deploying to production:

1. Deploy the Strapi server separately from your Next.js app
2. Update the `NEXT_PUBLIC_STRAPI_URL` environment variable to point to your production Strapi URL
3. Generate a new API token for production and update the `STRAPI_API_TOKEN` environment variable
4. Configure proper security settings for your Strapi server (CORS, rate limiting, etc.)
