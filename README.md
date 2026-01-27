# 🤖 OpenAI Chat Demo — React + Express + OpenAI API Integration

A full-stack demonstration of **OpenAI API integration** with a modern web application. This project showcases real-time chat interactions between a React frontend and an Express backend powered by OpenAI.

- ⚛️ React (with Vite) – Dynamic frontend
- 🎨 Tailwind CSS v4 – Elegant UI styling
- 🚀 Express.js (Node.js backend) – REST API server
- 🤖 OpenAI API Integration – GPT-powered chat functionality
- 💙 Javascript (ES6+) – Both frontend & backend
- ⚡ Real-time API Communication – Seamless async/await handling

This project demonstrates production-ready patterns for integrating AI capabilities into web applications.

---

## 🧰 Tech Stack

### Frontend
- **React** (with Vite) – Modern UI library for interactive components
- **Tailwind CSS v4** – Utility-first CSS framework for responsive design
- **React Router DOM** – Client-side page routing and navigation
- **Axios** – HTTP client for API communication
- **Vite** – Lightning-fast dev server and optimized build tool

### Backend
- **Express.js** – Lightweight Node.js web framework for REST APIs
- **OpenAI API Client** – Official OpenAI SDK for GPT integration
- **CORS** – Cross-origin resource sharing for secure frontend-backend communication
- **Dotenv** – Environment variable management for API keys
- **Nodemon** – Auto-restart server during development
- **Javascript (ES6+)** – Modern async/await patterns for clean code

---

## ✨ Key Features

- **OpenAI Integration** – Real-time chat with GPT models
- **Clean Architecture** – Modular and maintainable codebase
- **RESTful API** – Well-structured backend routes and controllers
- **Error Handling** – Robust API error handling and user feedback
- **Responsive UI** – Mobile-friendly design with Tailwind CSS v4
- **Environment Configuration** – Secure API key management via .env
- **Hot Module Reloading** – Vite for instant frontend updates
- **Auto-Reload Backend** – Nodemon for seamless development experience
- **Component-Based Frontend** – Reusable React components with custom hooks
- **Service Layer Pattern** – Centralized API calls and service logic

---

## 📁 Project Structure

```
OPEN AI Demo/
├── client/                          # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   │   └── Layout.jsx          # Shared layout component
│   │   ├── pages/
│   │   │   ├── Home.jsx            # Chat interface page
│   │   │   └── Error404.jsx        # 404 error page
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx       # Route configuration
│   │   ├── services/
│   │   │   ├── axiosInstance.js    # Axios HTTP client setup
│   │   │   └── api/
│   │   │       ├── apiErrorHandling.js  # Error handling utilities
│   │   │       └── apiCalls/
│   │   │           └── chat.js     # Chat API endpoints
│   │   ├── App.jsx                 # Root component
│   │   ├── main.jsx                # Entry point
│   │   └── index.css               # Global styles
│   ├── vite.config.js              # Vite configuration
│   ├── eslint.config.js            # Linting rules
│   └── package.json                # Dependencies
│
└── server/                          # Backend (Express + OpenAI)
    ├── src/
    │   ├── controllers/
    │   │   └── chatController.js   # Chat request handler
    │   ├── routes/
    │   │   └── chat.routes.js      # Chat API routes
    │   ├── services/
    │   │   └── openaiClient.js     # OpenAI API integration
    │   ├── app.js                  # Express app setup
    │   └── server.js               # Server entry point
    ├── nodemon.json                # Nodemon configuration
    └── package.json                # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- OpenAI API Key ([Get one here](https://platform.openai.com/api-keys))

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/nikhilhuh/OPEN-AI-Demo
cd OPEN-AI-Demo
```

#### 2. Setup Frontend
```bash
cd client
npm install
```

#### 3. Setup Backend
```bash
cd ../server
npm install
```

#### 4. Configure Environment Variables
Create a `.env` file in the **server** directory:
```env
OPENAI_API_KEY=your_openai_api_key_here
PORT=4000
FRONTEND_URL=http://localhost:5173
```

Create a `.env` file in the **client** directory (if needed for API base URL):
```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## 🏃 Running the Application

### Start the Backend Server
```bash
cd server
npm run dev
```
Backend will run on: `http://localhost:4000`

### Start the Frontend Development Server
```bash
cd client
npm run dev
```
Frontend will run on: `http://localhost:5173`

---

## 📝 API Documentation

### Chat Endpoint
**POST** `/api/chat`

**Request Body:**
```json
{
  "message": "Your message to OpenAI"
}
```

**Response:**
```json
{
  "reply": "OpenAI's response message"
}
```

---

## 🔧 Available Scripts

### Frontend
- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Run ESLint

### Backend
- `npm run dev` – Start server with Nodemon (auto-reload)
- `npm start` – Start production server

---

## 💡 Usage Example

1. Navigate to `http://localhost:5173` in your browser
2. Type a message in the chat interface
3. The message is sent to the backend
4. Backend communicates with OpenAI API
5. Response is displayed in real-time on the frontend

## 🔐 Environment Variables

### Server (.env)
```env
OPENAI_API_KEY=sk-your-key-here    # Your OpenAI API key
PORT=4000                           # Server port (optional, default: 4000)
NODE_ENV=development               # Environment mode
```

### Client (.env.local - if needed)
```env
VITE_API_BASE_URL=http://localhost:4000  # Backend API URL
```

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide)

---

## 🛠️ Troubleshooting

### Port Already in Use
If port 4000 is already in use, change the `PORT` in the server `.env` file:
```env
PORT=5000  # Use a different port
```

### CORS Errors
Ensure the backend `.env` has the correct frontend URL and CORS is properly configured in `app.js`.

### OpenAI API Errors
- Verify your API key is valid and active
- Check your OpenAI account has sufficient credits
- Ensure you're using a supported model in the chat controller

---

## 👨‍💻 Author
Crafted with ❤️ by Nikhil - [GitHub](https://github.com/nikhilhuh)

## 💬 Support & Contributions
If you found this useful:
- ⭐ Give this repo a star on GitHub
- 🔄 Share it with the community
- 📧 Contribute improvements via pull requests
- 🐛 Report issues and suggestions
