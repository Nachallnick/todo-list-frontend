    import React, { createContext, useContext, useState, useEffect, ReactNode, FC } from 'react'
    import { ITodoItem, createNewTodo } from '../components/const'
    import { getList } from '../components/api'
    


    interface TodoContextType {
        todos: ITodoItem[];
        isLoading: boolean;
        addTask: (title: string, description: string) => void;
        setCheckedToDo: (id: number) => void;
        removeTodo: (id: number) => void;
        editTodo: (id: number, title: string, description: string) => void;
        importTasks: () => void;
        removeAll: () => void;
        markAllChecked: () => void
        
    }

    const TodoContext = createContext<TodoContextType  | undefined>(undefined)

    export const useTodos = (): TodoContextType => {
        const context = useContext(TodoContext)
        if (!context) {
            throw new Error('useTodos must be used within a TodoProvider')
        }
        return context
    }

    interface Props {
        children: ReactNode
    }

    export const TodoProvider: FC<Props>= ({ children }) => {
        const [todos, setTodos] = useState<ITodoItem[]>([])
        const [isLoading, setIsLoading] = useState<boolean>(false)
        const [importTrigger, setImportTrigger] = useState(false)

        useEffect(() => {
            if (!importTrigger) return;
            const loadTask = async () => {
                try {
                    setIsLoading(true)
                    const newTasks = await getList()
                    setTodos((prevTodos) => [...prevTodos, ...newTasks])
                    setIsLoading(false)
                } catch (error) {
                    console.error(error)
                    setIsLoading(false)
                } finally {
                    setImportTrigger(false)
                }
            }
            loadTask()
        }, [importTrigger])

        // useEffect(() => {
        //     setIsLoading(true)
        //     getList()
        //         .then((storedTodos) => {
        //             if(storedTodos.length > 0) {
        //                 setTodos(storedTodos)
        //             }
        //         })
        //         .catch((error) => console.error('Failed to load todos: ', error))
        //         .finally(() => setIsLoading(false))
        // }, [])

        const importTasks = () => {
        setImportTrigger(true)
        }

        const removeAll = () => {
            setTodos([])
        }

        const markAllChecked = () => {
            setTodos(todos => todos.map(todo => ({ ...todo, isChecked: true})))
        }

        const addTask = (title: string, description: string) => {
            const newTodo = createNewTodo(title, description)
            setTodos((prev) => [...prev, newTodo])
        }

        const setCheckedToDo = (id: number) => {
            setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo))
        }

        const removeTodo = (id: number) => {
            setTodos((prev) => prev.filter((todo) => todo.id !== id))
        }

        const editTodo = (id: number, title: string, description: string) => {
            setTodos((prev) => 
                prev.map((todo) => 
                    todo.id === id ? { ...todo, title, description, updatedAt: new Date().toISOString(), isEdited: true } : todo
                )
            )
        }

        return (
            <TodoContext.Provider value={{ todos, isLoading, addTask, setCheckedToDo, removeTodo, editTodo, importTasks, removeAll, markAllChecked }}>{children}</TodoContext.Provider>
        )
    }