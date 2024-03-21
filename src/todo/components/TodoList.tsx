import React, { useState, useEffect, useMemo } from "react";
import '../../index.css';
import TodoItem from "./TodoItem";
import { DEFAULT_TODO_ITEM, ITodoItem, createNewTodo } from "./const";
import { getList } from "./api";
import MultilineTextFields from "../mui_appka/inpupts";

import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';


const ToDo = () => {
    
    const [todos, setTodos] = useState<ITodoItem[]>([]);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const [isLoading, setIsLoading] = useState<boolean>(false)

    console.log('isLoading::', isLoading)

    useEffect(() => {
        setIsLoading(true)
        getList()
            .then((storedTodos: ITodoItem[]) => {
                if(storedTodos.length > 0) {
                    setTodos(storedTodos)
                }
            })
            .catch((error) => console.error('Failed to load todos:', error))
            .finally(() => setIsLoading(false))
    },[])
        

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault()
       if (title.trim()) {
       
        const newTodo = createNewTodo(title, description)
        setTodos(prev => [...prev, newTodo]);
        setTitle('');
        setDescription('')
       }
    }

    const setCheckedToDo = (id: number) => {
        setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo));
    }

    const removeTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const editTodo = (id: number, newTitle: string, newDescription: string) => {
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
    [todos, setCheckedToDo, removeTodo, editTodo]
    )

    return (
        <>
            <div className="top-bar">
                <h1>Task application</h1>
                <form onSubmit={handleAddTask} className="input-group">
               <MultilineTextFields 
               onTitleChange={(e) => setTitle(e.target.value)}
               onDescriptionChange={(e) => setDescription(e.target.value)}
               titleValue={title}
               description={description}
               />
                <Button type="submit">Add task</Button>
                </form>
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={removeAllTodos}>Remove All todos</Button>
                <Button  onClick={markAllTodosAsChecked}>Mark All Todos As Checked</Button>
                <Button onClick={async()=>{
                    setIsLoading(true)
                    try{
                        const storedTodos = await getList()
                        if (storedTodos.length > 0) {
                            setTodos(storedTodos)
                        }
                    } catch (error) {
                        console.log('Failed to import tasks:', error)
                    } finally {
                        setIsLoading(false)
                    }
           
         }}>Import task</Button>
            </div>
            <div className="todo-list">
                {isLoading ? <p>Loading...</p> : memoizedTodoItem}
                
            </div>
        </>
    );
}

export default ToDo;
