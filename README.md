# 📝 Todo List App

Todo List App built with **React + TypeScript + Vite + Tailwind CSS** managing state with **Context API** and connected to **Axios + json-server** as a dummy backend

## 🚀 Features

- ✅ Add / Edit / Delete Todo items
- 🔁 Toggle status "Complete / Incomplete"
- 💾 Save data to dummy backend (json-server)
- ⏳ Loader display during data loading or processing

## 🧠 Implementation Choices & Reasoning

- 🔷 React + TypeScript: Using React for easy UI management and TypeScript to enhance safety and development accuracy
- 🌀 Context API: For small applications, Context API is sufficient without needing additional state managers like Redux
- 🌐 Axios: Features an easy-to-use API, supports interceptors, and is suitable for request/response handling
- 📦 json-server: A simple solution for mock backend without setting up a real backend
- 🎨 Tailwind CSS: Accelerates UI development with convenient utility classes and responsive design without writing extensive CSS


## 🧑‍💻 Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Context API](https://reactjs.org/docs/context.html)
- [Axios](https://axios-http.com/)
- [json-server](https://www.npmjs.com/package/json-server)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app
2. **Install dependencies**
   ```bash
   npm install
3. **Start json-server**
   ```bash
   npm run server
4. **Start development server**
   ```bash
   npm run dev
5. **Project Structure
   ```bash
   src/
    ├── api/             # Axios instance and todoApi functions
    ├── components/      # TodoItem, TodoList, TodoForm
    ├── context/         # TodoContext (state management)
    ├── hooks/           # Custom hook: useTodoContext
    ├── styles/          # Loader CSS
    ├── types/           # Type definitions
    ├── App.tsx          # Main app component
    └── main.tsx         # Entry point
   

