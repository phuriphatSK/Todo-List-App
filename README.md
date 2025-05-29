# 📝 Todo List App

Todo List App สร้างขึ้นด้วย **React + TypeScript + Vite + Tailwind CSS** จัดการ state ด้วย **Context API** และเชื่อมต่อกับ **Axios + json-server** เป็น dummy backend


## 🚀 Features

- ✅ เพิ่ม / แก้ไข / ลบ รายการ Todo
- 🔁 Toggle สถานะ "ทำแล้ว / ยังไม่ทำ"
- 💾 บันทึกข้อมูลไปยัง dummy backend (json-server)
- ⏳ Loader แสดงระหว่างการโหลดข้อมูลหรือทำงาน

## 🧠 Implementation Choices & Reasoning

- 🔷 **React + TypeScript**: ใช้ React เพื่อความง่ายในการจัดการ UI และใช้ TypeScript เพื่อเพิ่มความปลอดภัยและช่วยให้พัฒนาได้แม่นยำขึ้น
- 🌀 **Context API**: สำหรับแอปขนาดเล็ก การใช้ Context API เพียงพอและไม่ต้องติดตั้ง state manager เพิ่มอย่าง Redux
- 🌐 **Axios**: มี API ที่ใช้งานง่าย รองรับ interceptors และเหมาะกับการจัดการ request/response
- 📦 **json-server**: เป็นทางเลือกง่าย ๆ สำหรับ mock backend โดยไม่ต้องตั้งค่า backend จริง
- 🎨 **Tailwind CSS**: ช่วยให้พัฒนา UI ได้เร็วขึ้น มี utility classes ที่สะดวก และ responsive โดยไม่ต้องเขียน CSS เยอะ


## 🧑‍💻 Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Context API](https://reactjs.org/docs/context.html)
- [Axios](https://axios-http.com/)
- [json-server](https://github.com/typicode/json-server)

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
   

