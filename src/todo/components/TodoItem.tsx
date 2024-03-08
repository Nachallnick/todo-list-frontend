import React, { useState } from "react";
import { ITodoItem } from "./const";


interface TodoItemProps {
    todo: ITodoItem;
    index: number;
    setCheckedToDo: (id: number) => void;
    removeTodo: (id: number) => void;
    editTodo: (id: number, title: string, description: string) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, setCheckedToDo, removeTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(todo.title);
    const [editMode, setEditMode] = useState<string | null>(null);
    const [editDescription, setEditDescription] = useState<string>(todo.description);
    const handleEdit = (part: string) => {
        setEditMode(part)
    }


    const handleSave = () => {
        editTodo(todo.id, editText, editDescription)
        setIsEditing(false)
       
    }

    const handleToggleEdit = () => {       
       setIsEditing(!isEditing)
       setEditText(todo.title)
       setEditDescription(todo.description)
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditText(e.target.value)
    }
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditDescription(e.target.value);
    };

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('en-EU', {
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
        })
    }

    return (
        <>
        <div className="todo-item">
         <div className="todo-content">
             {isEditing ? (
                 <> 
                     <input className="input-group" type="text" value={editText} onChange={handleTitleChange} />
                     <textarea className="input-group" value={editDescription} onChange={handleDescriptionChange} />
                 </>
             ) : (
                 <>
                     <strong className="title">{index}: {todo.title}</strong>
                     <div className="todo-description">{todo.description}</div>
                 </>
             )}
             <span className="edit-date">Last edited: {formatDate(todo.updatedAt)}</span>
             {todo.isEdited && <span>(Edited)</span>}
         </div>
 
         <div className="buttons">
    {isEditing ? (
        <button className="save" onClick={handleSave}>Save</button>
    ) : (
        <>
            <button className="update" onClick={handleToggleEdit}>Update</button>
            <button className={`toggle-btn ${todo.isChecked ? 'completed' : ''}`} onClick={() => setCheckedToDo(todo.id)}>Complete</button>
            <button className="delete" onClick={() => removeTodo(todo.id)}>Delete</button>
        </>
    )}
</div>
            </div>     
        </>
     );
    }

export default TodoItem;
