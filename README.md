# Excelidraw

A real-time collaborative online whiteboard for drawing, diagramming, and brainstorming with your team.

## Features

- ✏️ **Collaborative Drawing:** Draw, sketch, and annotate together in real time.
- 🏠 **Room Management:** Create or join rooms for focused collaboration.
- 🔒 **Authentication:** Secure sign up and sign in with JWT-based authentication.
- 💬 **Live Chat:** Communicate instantly while you draw.
- 📱 **Responsive UI:** Works seamlessly on desktop and mobile devices.

## Tech Stack

- **Frontend:** React, Next.js, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js, Prisma ORM, PostgreSQL
- **Real-time:** WebSockets
- **Monorepo:** Turborepo

## Getting Started

### Prerequisites

- Node.js (v18+)
- PostgreSQL

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/excelidraw.git
   cd excelidraw
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in your database and JWT secrets.

4. **Run database migrations:**
   ```bash
   npx prisma migrate dev
   ```

5. **Start the development servers:**
   ```bash
   # In one terminal
   npm run dev:backend

   # In another terminal
   npm run dev:frontend
   ```

6. **Open your browser:**  
   Visit [http://localhost:3000](http://localhost:3000)

## Folder Structure

```
/apps
  /excelidraw-frontend   # Next.js frontend
  /http-backend          # Express.js backend
/packages
  /common                # Shared types and utilities
  /db                    # Prisma client and schema
```

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

---

**Excelidraw** – Where ideas flow, creativity grows.
