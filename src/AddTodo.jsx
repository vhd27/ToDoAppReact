import React, { useRef } from 'react';
import './css/AddTodo.css';

function AddTodo({ todos, setTodos}) {
  const todoInputRef = useRef(null);
  const MAX_LENGTH = 50;
  const todoAdd = () => {
    const inputText = todoInputRef.current.value.trim();
    if (inputText.length > 0 && inputText.length <= MAX_LENGTH) {
      setTodos([...todos, { id: Date.now(), text: inputText }]);
      todoInputRef.current.value = ""; // Inputu temizle
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      todoAdd();
    }
  };

  return (
    <div id='addTodo'>
      <input
        type="text"
        id='todoInput'
        ref={todoInputRef}
        onKeyDown={handleKeyDown}
        maxLength={MAX_LENGTH} // Burada maksimum karakter uzunluğu belirleniyor
        placeholder="Yeni todo ekleyin..."
      />
      <button id='addTodoButton' onClick={todoAdd}>Todo Ekle</button>
    </div>
  );
}

export default AddTodo;
