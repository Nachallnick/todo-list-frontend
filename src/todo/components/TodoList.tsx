import React, { useState } from "react";
import { useTodos } from "../contexts/TodoContext";
import '../../index.css';
import TodoItem from "./TodoItem"; 
import MultilineTextFields from "../mui_appka/inputs";
import { MarkAllTodosAsCheckedButtons } from "../mui_appka/buttons/buttonComplite";
import { DeleteAllButtons } from "../mui_appka/buttons/deleteButtons";
import AddTaskButtons from "../mui_appka/buttons/AddTaskButtons";
import ImportTaskButtons from "../mui_appka/buttons/importTaskButtons";

    const ToDo = () => {
        const { todos, isLoading, addTask, setCheckedToDo, removeTodo, editTodo, importTasks, removeAll, markAllChecked } = useTodos() 
        const [title, setTitle] = useState('')
        const [description, setDescription] = useState('')


        const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault() 
        if (title.trim() && description.trim()) {

            addTask(title, description)
            setTitle('');
            setDescription('')

        }
        }

        // const handleClick = (action: string) => {
        //     switch(action) {
        //         case 'removeAll':
        //             todos.forEach(todo => removeTodo(todo.id))
        //             break;
        //         case 'markAllChecked':
        //             todos.forEach(todo => setCheckedToDo(todo.id))
        //             break
        //         case 'importTasks':
        //             setImportTrigger(true)
        //             break
        //         default:
        //             console.log('action not recognized')
        //     }
        // }

        return (
            <>
                <div className="top-bar" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', }}>
                    <h1>Task application</h1>
                    
                    <form onSubmit={handleAddTask} className="input-group" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', flexGrow: 1, marginTop: '100px',}}>
                <MultilineTextFields 
                            onTitleChange={(e) => setTitle(e.target.value)}
                            onDescriptionChange={(e) => setDescription(e.target.value)}
                            titleValue={title}
                            description={description}
                            isEditing={undefined}/>
                    <AddTaskButtons onAddTask={handleAddTask}></AddTaskButtons> 
                    </form>
                    
                 <div className="buttons">
                    <DeleteAllButtons onClick={removeAll}></DeleteAllButtons>
                    <MarkAllTodosAsCheckedButtons  onClick={markAllChecked}></MarkAllTodosAsCheckedButtons>
                    <ImportTaskButtons onImportTasks={importTasks}></ImportTaskButtons>
                    </div>   
                    
                </div>
                <div className="todo-list">
                    {isLoading ? <p>Loading...</p> : todos.map((todo, index) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            index={index + 1}
                        />
                    ))}
                    
                </div>
            </>
        );
    }

    export default ToDo;
