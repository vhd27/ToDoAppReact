import React, { useRef } from 'react'
import './css/AddTodo.css'

function AddTodo({todos,setTodos}) { 
  const todoInputRef = useRef(null);

  const todoAdd = () =>{
    setTodos([...todos, { id: Date.now(), text: todoInputRef.current.value }]);
    todoInputRef.current.value = "";
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      todoAdd();
    }
  };

  return (
    <div id='addTodo'>
        <input type="text" id='todoInput' ref={todoInputRef} onKeyDown={handleKeyDown} />
        <button id='addTodoButton' onClick={todoAdd}>Todo Ekle</button>
    </div>
  )
}

export default AddTodo