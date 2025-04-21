#!/bin/bash

# Test script for social media sharing functionality
echo "Starting local test for social media sharing functionality..."

# Check if the Next.js development server is running
if ! nc -z localhost 3000 &>/dev/null; then
  echo "Next.js development server is not running. Starting it now..."
  echo "Please wait for the server to start..."
  npm run dev &
  # Wait for the server to start
  sleep 10
fi

# Open the test page in the default browser
echo "Opening test page in browser..."
if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS
  open http://localhost:3000/test-social-sharing.html
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
  # Linux
  xdg-open http://localhost:3000/test-social-sharing.html
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
  # Windows
  start http://localhost:3000/test-social-sharing.html
else
  echo "Please open http://localhost:3000/test-social-sharing.html in your browser"
fi

echo ""
echo "Testing WhatsApp preview page..."
echo "Opening WhatsApp preview page in browser..."
if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS
  open http://localhost:3000/whatsapp-preview.html
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
  # Linux
  xdg-open http://localhost:3000/whatsapp-preview.html
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
  # Windows
  start http://localhost:3000/whatsapp-preview.html
else
  echo "Please open http://localhost:3000/whatsapp-preview.html in your browser"
fi

echo ""
echo "To test social media sharing:"
echo "1. Use the buttons on the test page to share the website on different platforms"
echo "2. Verify that the UpperVisa logo and information appear correctly in the preview"
echo ""
echo "For more information, please refer to the SOCIAL_SHARING_GUIDE.md file"
