import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoFrom";

const App: React.FC = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              📝 Todo List
            </h1>
            <p className="text-gray-500">
              Keep track of your tasks efficiently
            </p>
          </div>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
