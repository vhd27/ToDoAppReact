import React, { useState, useEffect, useRef } from 'react';
import './css/Todo.css';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function Todo({ todo, todos, setTodos }) {
  const [inputText, setInputText] = useState(todo.text);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocus]);

  useEffect(() => {
    setInputText(todo.text);
  }, [todo.text]);

  const deleteItem = () => {
    const newTodos = todos.filter(t => t.id !== todo.id);
    setTodos(newTodos);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    const updatedTodos = todos.map(t =>
      t.id === todo.id ? { ...t, text: e.target.value } : t
    );
    setTodos(updatedTodos);
  };

  const editItem = () => {
    setIsReadOnly(false);
    setIsFocus(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsReadOnly(true);
    }
  };

  const handleBlur = () => {
    setIsReadOnly(true);
  };

  return (
    <div className='todo'>
      <input
        ref={inputRef}
        type="text"
        className='title'
        readOnly={isReadOnly}
        value={inputText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
      />
      <div className='tools'>
        <i className='deleteItem' onClick={deleteItem}><MdDelete /></i>
        <i className='editItem' onClick={editItem}><MdEdit /></i>
      </div>
    </div>
  );
}

export default Todo;
