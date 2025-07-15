# Rob and Hannah AI Assistant

This project is an early prototype of a personal AI chatbot for Rob and Hannah. It uses Next.js 15.3 with the App Router, React 19, TypeScript and Tailwind CSS. Authentication is handled with Clerk and the chatbot communicates with OpenAI's API.

## Development

1. Install dependencies (requires Node.js 20+):
   ```bash
   npm install
   ```
2. Create a `.env` file with your `OPENAI_API_KEY` and Clerk keys.
3. Run the development server:
   ```bash
   npm run dev
   ```

## Features

- App Router with server components
- Clerk authentication
- Chatbot interface on the home page
- API route that proxies requests to OpenAI

This repository is a starting point and does not yet include production configuration or database integration.
