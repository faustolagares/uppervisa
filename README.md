# UpperVisa Immigration Website

A modern, multilingual website for an immigration consulting firm built with Next.js, Tailwind CSS, and headless CMS integration.

## Features

- Responsive design optimized for all devices
- Multilingual support with locale-based routing
- Blog system powered by Sanity CMS
- Dynamic contact form powered by Strapi CMS
- Email notifications via Resend
- Interactive USA map
- Comprehensive immigration service information

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **CMS**: 
  - Sanity (for blog content)
  - Strapi (for contact form and submissions)
- **Email**: Resend
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```
3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local` and fill in the required values

### Development

To run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Strapi Integration

The contact form is integrated with Strapi CMS, allowing for dynamic form fields and submission management. See [STRAPI_INTEGRATION.md](./STRAPI_INTEGRATION.md) for setup instructions.

To run both Next.js and Strapi together:

```bash
./start-dev.sh
```

### Sanity Integration

The blog system is powered by Sanity CMS. To run the Sanity Studio:

```bash
cd sanity
npm run dev
```

Open [http://localhost:3333](http://localhost:3333) to access the Sanity Studio.

## Project Structure

- `app/`: Next.js app router pages and layouts
- `components/`: React components
- `lib/`: Utility functions and API clients
- `public/`: Static assets
- `sanity/`: Sanity CMS configuration and schemas
- `strapi/`: Strapi CMS for contact form management
- `styles/`: Global CSS styles
- `translations/`: Multilingual content

## Deployment

The website is configured for deployment on Vercel. The Sanity Studio is deployed separately using Vercel, and Strapi should be deployed on a separate server.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
