import AddTodo from './AddTodo'
import './css/App.css'
import Todos from './Todos'
import React, { useEffect, useState } from 'react'

function App() {
  
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

  return (
    <div id='todoApp'>
      <div id='todoAppContainer'>
        <AddTodo todos={todos} setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </div>
  )
  }
export default App
