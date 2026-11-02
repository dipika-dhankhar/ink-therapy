# Ink Therapy

React (Vite) frontend and Express backend, both in JavaScript.

## Run

Backend (port 5000):

    cd backend
    npm install
    npm run dev

Frontend (port 5173, proxies /api to the backend):

    cd frontend
    npm install
    npm run dev

## Structure

    backend/
      bin/www                       server entry point
      src/app.js                    middleware and all route mounting
      src/routes/auth/              auth.routes, auth.controller, auth.service
      src/routes/essays/            essays.routes, essays.controller, essays.service
      src/data/essays.js            essay content

    frontend/src/
      pages/                        Home, InkTherapy, Ghostwriting, WritingForThinking, Essay, About
      components/                   shared UI
      styles/index.css              custom CSS
