# To-Do App

A simple To-Do application built with Next.js, TypeScript, and React Query for state management.

## Features

- See completed/not completed tasks
- Add and delete tasks
- Optimistic UI updates
- Fake backend with JSONPlaceholder
- Styled with Tailwind CSS

## Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/laposhko/to-do-app.git
cd to-do-app
pnpm install  # or npm install / yarn install
```

## Running the App

Start the development server:

```sh
pnpm dev  # or npm run dev / yarn dev
```

The app will be available at `http://localhost:3000`.

## Tech Stack

- Next.js
- TypeScript
- React Query
- Tailwind CSS
- Axios

## Optimistic Updates

This app uses React Query's `useMutation` and `invalidateQueries` to ensure the UI updates immediately when adding or deleting tasks, even before the backend confirms the change. In case of the unsuccessful API request, it reverts the change.
