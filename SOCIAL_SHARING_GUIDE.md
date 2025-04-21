# UpperVisa Social Sharing Guide

This guide explains the changes made to ensure that the UpperVisa logo and information appear correctly when the website is shared on WhatsApp, Facebook, and other social media platforms.

## What Was Implemented

We've made several improvements to ensure that the UpperVisa logo and information appear correctly when shared on social media platforms:

1. Added comprehensive Open Graph meta tags in both layout files
2. Created a dedicated WhatsApp preview page with optimized meta tags
3. Updated the middleware to detect social media crawlers and redirect them to the preview page
4. Added a robots.txt file to ensure social media crawlers can access the preview page
5. Implemented absolute URLs for all image references

## Files Modified

- `app/layout.tsx` - Updated Open Graph meta tags with absolute URLs and additional properties
- `app/[locale]/layout.tsx` - Updated Open Graph meta tags with absolute URLs and additional properties
- `middleware.ts` - Added social media crawler detection and redirection to the preview page
- `app/page.tsx` - Added client-side detection for social media crawlers

## Files Created

- `public/whatsapp-preview.html` - A dedicated preview page for social media platforms with optimized meta tags
- `public/robots.txt` - Added rules to ensure social media crawlers can access the preview page
- `public/test-social-sharing.html` - A test page to help verify that social media sharing works correctly
- `types/negotiator.d.ts` - A TypeScript declaration file for the negotiator module

## How to Test

1. Deploy the website to your production environment (https://uppervisa.com)
2. Visit `/test-social-sharing.html` on your website
3. Use the social sharing buttons to share the website on different platforms
4. Verify that the UpperVisa logo and information appear correctly in the preview

You can also use these tools to debug social media sharing:

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Troubleshooting

If the image is not appearing correctly when shared:

1. **Clear Cache**: Social media platforms cache previews. Use the debugging tools mentioned above to clear the cache.
2. **Check Image Dimensions**: The og.jpg image should be 1200x630 pixels for optimal display.
3. **Verify Meta Tags**: Ensure that all meta tags are correctly implemented in the layout files.
4. **Check Middleware**: Make sure the middleware is correctly detecting social media crawlers and redirecting them to the preview page.
5. **Test with Different Platforms**: Different social media platforms may handle Open Graph tags differently.

## Technical Details

### Open Graph Meta Tags

The Open Graph meta tags are implemented in both `app/layout.tsx` and `app/[locale]/layout.tsx` files. These tags provide information about the website when shared on social media platforms.

```typescript
export const metadata: Metadata = {
  // ... other metadata
  metadataBase: new URL('https://uppervisa.com'),
  openGraph: {
    title: "UpperVisa | Your American Dream Starts Here",
    description: "Expert immigration and visa consulting services...",
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'UpperVisa Immigration Consulting',
      }
    ],
    locale: 'en_US',
    type: 'website',
    siteName: 'UpperVisa',
  },
  // ... other metadata
}
```

### WhatsApp Preview Page

The WhatsApp preview page (`public/whatsapp-preview.html`) is a dedicated HTML page with optimized meta tags for social media platforms. It includes:

- Standard Open Graph meta tags
- WhatsApp-specific meta tags
- Twitter Card meta tags
- A visual representation of the UpperVisa brand

### Middleware

The middleware (`middleware.ts`) detects when a request is coming from a social media crawler and redirects it to the WhatsApp preview page. This ensures that social media platforms see the optimized preview page when crawling the website.

```typescript
// Check if the request is from WhatsApp or other social media platforms
const socialMediaCrawlers = ['whatsapp', 'facebook', 'instagram', 'telegram']
const isSocialMediaCrawler = socialMediaCrawlers.some(crawler => 
  userAgent.toLowerCase().includes(crawler)
)

// If the request is from a social media crawler and it's the root path, redirect to the preview page
if (isSocialMediaCrawler && (pathname === '/' || pathname === '/en-US' || pathname === '/pt-BR' || pathname === '/es-MX')) {
  return NextResponse.rewrite(new URL('/whatsapp-preview.html', request.url))
}
```

## Conclusion

These changes should ensure that when someone shares the UpperVisa website link on WhatsApp, Facebook, Twitter, or other social media platforms, they'll see the UpperVisa logo and information in the preview.

If you have any questions or need further assistance, please refer to the documentation or contact the development team.
