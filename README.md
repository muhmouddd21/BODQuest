# Dashboard Quest
A  dashboard application built with React, TypeScript,Tanstack Query, and Redux Toolkit.

## 🔧 Tech Stack
- React 
- TypeScript
- Tanstack Query
- Redux Toolkit
- React Router v6
- React Bootstrap
- React Hook Form
- Zod
- Axios
- Vite
- Lottie Animation
- Framer Motion
- 
## 🚀 Features
- **Authentication**
  - User registration and login with JWT (Refresh token inside cookies) [backend of Registeraion made by me]
  - Axios interceptor to handle silent Auth
  - Email availability checking before signUp
  - Protected routes
  
  
- **Todo Management**
  - CRUD operations for todos
  - Auto refresh every 15Sec
  - Prefetch nextPage in Pagination using tanstack query
  - instance data prefetch, Get info of a todo from caching for the first time he enters the todo
  - optimstic update after adding a todo or editing a todo
  - Filter todos by status (All/Active/Completed)
  - Search todos by title
  - Pagination support
  
- **UI/UX**
  
  - Resuable Component and clean code
  - Toast notifications for user feedback
  - Loading states with Lottie animations
  - Form validation with React Hook Form
  - Clean and modern interface

## 📁 Folder Structure
```
src/
├── assets/              # Static assets and Lottie files
├── components/
│   ├── common/         # Reusable components
│   ├── Dashboard/      # Dashboard specific components
│   ├── feedback/       # Toast and notification components
│   ├── forms/         # Form components
│   └── modals/        # Modal components
├── hooks/              # Custom React hooks
├── layouts/            # Layout components
├── pages/             # Page components
├── services/          # API service layer
├── store/             # Redux store configuration
├── styles/            # Global styles
├── utils/             # Utility functions
└── validations/       # Form validation schemas
```

## 🛠 Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Dashboard_Quest.git
cd Dashboard_Quest
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit .env with your API configuration

4. Start development server:
```bash
npm run dev
```

## 🔌 API Endpoints

### Authentication [Base URL: https://ecommerce-back-production-ab31.up.railway.app/v1]

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/verify` - Verify JWT token

### Todos [Base URL: https://jsonplaceholder.typicode.com]
- `GET /api/todos` - Get todos list
- `GET /api/todos/:id` - Get single todo
- `POST /api/todos` - Create new todo
- `PUT /api/todos/:id` - Update todo
- `DELETE /api/todos/:id` - Delete todo



## 📝 Environment Variables
```
VITE_API_BASE_URL=your_api_base_url
VITE_API_TIMEOUT=5000
```

## 📦 Production Build
```bash
npm run build
```

## 🧪 Running Tests
```bash
npm run test
```