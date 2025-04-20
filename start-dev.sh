#!/bin/bash

# Start Strapi in the background
echo "Starting Strapi server..."
cd strapi && npm run develop &
STRAPI_PID=$!

# Wait for Strapi to start
echo "Waiting for Strapi to start..."
sleep 10

# Start Next.js
echo "Starting Next.js app..."
cd .. && npm run dev

# When Next.js is stopped, also stop Strapi
kill $STRAPI_PID
