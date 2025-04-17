# Chat Bot

This application built with Next.js 15 features a modern, responsive user interface for an AI-powered chatbot. To run the app, please set up the backend first. You can find it [here](https://github.com/JeanVittory/backend-chatbot).

## Tech

- Next 15 - Enables you to create high-quality web applications with the power of React components.
- Typescript - TypeScript is a strongly typed programming language that builds on JavaScript.
- Zustand - A small, fast, and scalable bearbones state management solution.
- Firebase - Prototype, build & run modern, AI-powered experiences
- Firestore - Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud.
- Chakra - Accessible React components for building high-quality web apps and design systems

## Installation

Please follow these steps

```sh
git clone git@github.com:JeanVittory/frontend-chatbot.git
cd frontend-chatbot
pnpm i
pnpm run dev
```

Locate a file called `.env.example` in your project's root directory it will contain these values please create a `.env` in the root of the project a fill these values.

```sh
NEXTAUTH_URL=
NEXTAUTH_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GITHUB_ID=
GITHUB_SECRET=

DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

As you can see, the application uses multiple authentication providers through NextAuth. If you want to use all of them but don’t know how to get some of the credentials, you can check these videos:

- [Github](https://www.youtube.com/watch?v=9bV_x2jxLFQ&t=526s&ab_channel=CodeCommerce)
- [Discord](https://www.youtube.com/watch?v=WgyCcXotReU&ab_channel=MrJAwesome)
- [Google](https://www.youtube.com/watch?v=k1TL-AzavvY&ab_channel=CandDev)

You don’t have to use every provider. But if you omit any, remember to only use the ones you’ve set up in your environment variables during login—the others won’t function.

# IMPORTANT

If you need any help with the installation, don’t hesitate to leave me a message or contact me vittory.dev@gmail.com
