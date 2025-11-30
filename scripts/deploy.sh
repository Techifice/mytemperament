#!/bin/bash

# Deployment script for MyTemperament to Vercel
# This script helps deploy the application with proper environment checks

set -e

echo "🚀 MyTemperament Deployment Script"
echo "===================================="
echo ""

# Check if .env file exists
if [ ! -f .env ]; then
    echo "❌ Error: .env file not found!"
    echo "Please create a .env file from .env.example"
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found!"
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

# Run linter
echo "🔍 Running linter..."
npm run lint || echo "⚠️  Linter warnings detected (continuing anyway)"

# Build the project
echo "🏗️  Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi

# Ask for deployment type
echo ""
echo "Select deployment type:"
echo "1) Preview (staging)"
echo "2) Production"
read -p "Enter choice (1 or 2): " choice

case $choice in
    1)
        echo "🚀 Deploying to preview..."
        vercel
        ;;
    2)
        echo "🚀 Deploying to production..."
        vercel --prod
        ;;
    *)
        echo "❌ Invalid choice!"
        exit 1
        ;;
esac

echo ""
echo "✅ Deployment complete!"
echo "Don't forget to set environment variables in Vercel dashboard if this is first deployment."
