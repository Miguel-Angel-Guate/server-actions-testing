# Next.js Todo App

This is a Next.js application that allows users to create, read, and delete todos.

## Features

* Create new todos with a title and deadline
* Display all existing todos
* Delete individual todos

## Project Structure
The project is structured as follows:
```
├── README.md
├── app
│   ├── components
│   │   ├── Forms.tsx
│   │   ├── SubmitButton.tsx
│   │   └── getTodos.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── libs
│   │   ├── actions
│   │   │   └── todoActions.ts
│   │   ├── db
│   │   │   └── mongodb.ts
│   │   └── models
│   │       └── todomodels.ts
│   └── page.tsx
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── assets
│   │   └── todo.png
│   ├── next.svg
│   └── vercel.svg
├── tailwind.config.ts
└── tsconfig.json
```
1 directory, 20 files
## How it Works

The application uses Next.js to render the UI and MongoDB as the database. The `Forms` component allows users to create new todos, which are then saved to the database using the `createTodos` function from `todoActions.ts`. The `GetTodos` component fetches all existing todos from the database and displays them to the user. Each todo has a delete button that calls the `deleteTodo` function from `todoActions.ts` to remove the todo from the database.

## Screenshots

![Image description](/public/assets/todo.png)

## Running the App

To run the app, navigate to the project directory and run `npm run dev`. This will start the development server and make the app available at `http://localhost:3000`.

