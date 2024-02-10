import React, { useState } from "react";
import '../../index.css';
import TodoItem from "./TodoItem";
import { items } from "./const";

const ToDo = () => {
    const [name, setName] = useState('');
    const [todos, setTodos] = useState(items);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleAddTask = e => {
       if (e.key === 'Enter' && title.trim()) {
        e.preventDefault();
        const newTodo = {
            id: Date.now(),
            title,
            description,
            isChecked: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            isEdited: false
        }
        setTodos(prev => [...prev, newTodo]);
        setTitle('');
        setDescription('')
       }
    }

    const setCheckedToDo = id => {
        setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo));
    }

    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const editTodo = (id, newTitle, newDescription) => {
        setTodos((prev) => 
            prev.map((todo) => (todo.id === id ? {...todo, title: newTitle, description: newDescription || todo.description, updatedAt: new Date().toISOString(), isEdited: true} : todo))
        )
    }

    return (
        <>
            <div className="top-bar">
                <h1>Task application</h1>
                <div className="input-group">
                <input  
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyPress={handleAddTask}
                    placeholder="Enter the name of new task"
                    autoFocus 
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter task description"
                />
                </div>
            </div>
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <TodoItem 
                        key={todo.id}
                        todo={todo}
                        index={index + 1}
                        setCheckedToDo={setCheckedToDo}
                        removeTodo={removeTodo}
                        editTodo={editTodo}
                    />
                ))}
            </div>
        </>
    );
}

export default ToDo;
