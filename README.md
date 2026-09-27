# chat-next

An early-stage chat app prototype built with Next.js, TypeScript and Firebase.

## What's here

- Google sign-in with Firebase Authentication (`signInWithPopup`)
- Two-pane Material UI layout: a friends list and a conversation view
- Message thread and compose box components
- App and friends state shared through React Context

## Tech

Next.js 13 · React 18 · TypeScript · Firebase Auth · Material UI · Emotion

## Running locally

```bash
npm install
cp .env.example .env.local   # fill in your Firebase web app config
npm run dev
```

Then open http://localhost:3000.

## Status

Prototype. The UI and auth are in place, but the friends list and messages are placeholders. Next steps are storing users and messages in Firestore and adding real-time listeners.
