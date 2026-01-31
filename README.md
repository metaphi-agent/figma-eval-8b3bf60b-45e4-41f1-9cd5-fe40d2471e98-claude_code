# Dashdark X Admin Dashboard

A modern, dark-themed admin dashboard built with React, Tailwind CSS v4, and Vite. This project was implemented based on a Figma design.

## Features

- **Dashboard** - Overview with stats cards, revenue charts, profit tracking, and session analytics
- **Analytics** - Detailed data visualizations with website visitors, revenue by customer type, and team progress
- **Users** - User management with searchable table, pagination, and status indicators
- **Add User** - Multi-step wizard (4 steps) for creating new users with form validation
- **Messages** - Real-time chat interface with contact list and message threads
- **Kanban** - Task management board with drag-and-drop columns (To Do, In Progress, Completed)
- **Calendar** - Year overview with mini calendar and people management
- **Products** - Product listing with filtering, color variants, and status badges

## Tech Stack

- **React 19** - UI library
- **React Router v7** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vite 6** - Build tool and dev server
- **Lucide React** - Icon library
- **clsx** - Conditional class names
- **Framer Motion** - Animations

## Project Structure

```
src/
  components/
    ui/           # Reusable UI components (Button, Card, Badge, Input, Table, Avatar)
    blocks/       # Layout components (Sidebar, Layout, Charts, PageHeader)
  pages/          # Page components
    Dashboard.tsx
    Analytics.tsx
    Users.tsx
    AddUser.tsx
    Messages.tsx
    Kanban.tsx
    Calendar.tsx
    Products.tsx
  App.tsx         # Main app with routing
  main.tsx        # Entry point
  index.css       # Global styles and Tailwind theme
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Design Tokens

The project uses a custom color palette defined in `design_tokens.json` and implemented in `src/index.css`:

- **Primary**: Purple gradient (#CB3CFF to #7B2FFF)
- **Secondary**: Cyan (#05C3DD), Teal (#00BFA5)
- **Neutral**: Dark blues ranging from #081028 to #F1F5F9
- **System**: Green, Red, Yellow, Blue for status indicators

## Routes

| Route | Page |
|-------|------|
| `/` | Dashboard |
| `/analytics` | Analytics |
| `/users` | Users List |
| `/users/add` | Add User Wizard |
| `/messages` | Messages/Chat |
| `/kanban` | Kanban Board |
| `/calendar` | Calendar |
| `/products` | Products List |

## License

MIT
