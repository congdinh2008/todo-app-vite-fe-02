import { useState } from 'react'
import './App.css'
import Header from './shared/Header'
import Footer from './shared/Footer'

interface Todo {
  id: number
  title: string
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Learn Vite' },
    { id: 3, title: 'Build something awesome' },
  ])

  const changeData = () => {
    ;
    setTodos([
      { id: 1, title: 'Learn React' },
      { id: 2, title: 'Learn Vite' },
      { id: 3, title: 'Build something awesome' },
      { id: 4, title: 'Learn TypeScript' },
    ])
  };

  return (
    <>
      <Header />
      <main>
        <button onClick={changeData}>ChangeData</button>
        {
          todos.map((todo) => (
            <div key={todo.id} className="todo">
              {todo.title}
            </div>
          ))
        }
      </main>
      <Footer />
    </>
  )
}

export default App
