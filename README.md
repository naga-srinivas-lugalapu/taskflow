# TaskFlow

TaskFlow is a modern personal dashboard app built with **Next.js (App Router)**, **React**, **TypeScript**, **Tailwind CSS**, and **PostgreSQL + Prisma**.  
It allows you to manage projects and tasks with a clean, interactive UI.

---

## Tech Stack

- **Next.js (App Router) — built on React**
- **React** (for building UI components)
- **TypeScript**
- **Tailwind CSS**
- **Prisma ORM**
- **PostgreSQL**
- **Git + GitHub**

---

## ⚡ Features

- Collapsible sidebar built with **React components**
- Header with dropdown actions
- Dashboard page with stats cards
- Projects & Tasks pages with tables
- Create Project & Create Task modals (UI + backend ready)
- Empty state UI for tables and dashboards
- Routing and dynamic linking between projects and tasks
- Initial mock data (temporary), fully replaced by PostgreSQL + Prisma

---

## Getting Started (Development)

Follow these steps to set up the project locally.

1. **Clone the repo**

```bash
git clone <your-repo-url>
cd taskflow

Install dependencies

npm install
# or
yarn install
# or
pnpm install

Setup environment variables

Create a .env file in the project root:

# PostgreSQL database connection
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/taskflow?schema=public"

Important: Do not commit .env to Git. Each developer should create their own .env file.

Run Prisma migrations and seed data

npx prisma migrate dev --name init
npx prisma db seed

Generate Prisma client (if needed)

npx prisma generate

Run development server

npm run dev
# or yarn dev / pnpm dev

Open http://localhost:3000
in your browser to view the app.


Project Structure

app/            → Next.js pages and layouts
components/     → Reusable React UI components (Modal, Buttons, Tables, EmptyState)
lib/prisma.ts   → Prisma client singleton
prisma/         → Database models and seed data
mockData.ts     → Temporary mock data (to be removed)
.env            → Environment variables (not committed)

Database

PostgreSQL is used for storing projects and tasks.

Prisma is used as ORM for type-safe queries.

Seed data includes a sample project and tasks for development.

Running Prisma Studio

To visually inspect your database:

npx prisma studio

You can view Projects, Tasks, and linked data.