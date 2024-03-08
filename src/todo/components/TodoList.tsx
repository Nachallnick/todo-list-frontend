import React, { useState, useEffect, useMemo } from "react";
import '../../index.css';
import TodoItem from "./TodoItem";
import { DEFAULT_TODO_ITEM, createNewTodo } from "./const";


const ToDo = () => {
    
    const [todos, setTodos] = useState(DEFAULT_TODO_ITEM);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleAddTask = (e) => {
       if (e.key === 'Enter' && title.trim()) {
        e.preventDefault();
        const newTodo = createNewTodo(title, description)
        setTodos(prev => [...prev, newTodo]);
        setTitle('');
        setDescription('')
       }
    }

    const setCheckedToDo = (id) => {
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

    const removeAllTodos = () => {
        setTodos([])
    }

    const markAllTodosAsChecked = () => {
        setTodos(prevTodos => 
            prevTodos.map(todo => ({...todo, isChecked: true})))
    }

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos")
        if(storedTodos) {
            setTodos(JSON.parse(storedTodos))
        }
    }, [])

    const memoizedTodoItem = useMemo(() => 
    todos.map((todo, index) => (
        <TodoItem
            key={todo.id}
            todo={todo}
            index={index + 1}
            setCheckedToDo={setCheckedToDo}
            removeTodo={removeTodo}
            editTodo={editTodo}
            />
    )),
    [todos]
    )

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
                <button onClick={removeAllTodos}>Remove All todos</button>
                <button onClick={markAllTodosAsChecked}>Mark All Todos As Checked</button>
            </div>
            <div className="todo-list">
                {memoizedTodoItem}
            </div>
        </>
    );
}

export default ToDo;
