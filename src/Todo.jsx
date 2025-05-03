import React, { useState, useEffect, useRef } from 'react';
import './css/Todo.css';
import { MdDelete, MdEdit } from "react-icons/md";

function Todo({ todo, todos, setTodos}) {
  const [inputText, setInputText] = useState(todo.text);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const textareaRef = useRef(null);
  const MAX_LENGTH = 50;
  useEffect(() => {
    resizeTextarea();
  }, []);

  useEffect(() => {
    if (!isReadOnly && textareaRef.current) {
      textareaRef.current.focus();
      const val = textareaRef.current.value;
      textareaRef.current.setSelectionRange(val.length, val.length);
    }
  }, [isReadOnly]);

  useEffect(() => {
    setInputText(todo.text);
  }, [todo.text]);

  const deleteItem = () => {
    const newTodos = todos.filter(t => t.id !== todo.id);
    setTodos(newTodos);
  };

  const handleChange = (e) => {
    const content = e.target.value.slice(0, MAX_LENGTH);
    setInputText(content);

    const updatedTodos = todos.map(t =>
      t.id === todo.id ? { ...t, text: content } : t
    );
    setTodos(updatedTodos);
    resizeTextarea();
  };

  const editItem = () => {
    setIsReadOnly(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      finalizeEdit();
    }
  };

  const handleBlur = () => {
    finalizeEdit();
  };

  const finalizeEdit = () => {
    const trimmed = inputText.trim();
    const newText = trimmed === '' ? 'Todo' : trimmed;
    setInputText(newText);

    const updatedTodos = todos.map(t =>
      t.id === todo.id ? { ...t, text: newText } : t
    );
    setTodos(updatedTodos);

    setIsReadOnly(true);
    resizeTextarea();
  };

  const resizeTextarea = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + 'px';
    }
  };

  return (
    <div className='todo'>
      <div className='tools'>
        <textarea
          ref={textareaRef}
          className='title'
          readOnly={isReadOnly}
          value={inputText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          rows={1}
        />
        <div>
          <i className='deleteItem' onClick={deleteItem}><MdDelete /></i>
          <i className='editItem' onClick={editItem}><MdEdit /></i>
        </div>
      </div>
    </div>
  );
}

export default Todo;
