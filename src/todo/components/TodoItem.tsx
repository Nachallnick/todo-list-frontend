import React, { useState } from "react";

const TodoItem = ({todo, index, setCheckedToDo, removeTodo, editTodo}) => {

    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(todo.title)
    const [editMode, setEditMode] = useState(null)
    const [editDescription, setEditDescription] = useState(todo.description)

    const handleEdit = (part) => {
        setEditMode(part)
    }
    const handleSave = () => {
        editTodo(todo.id, editText, editDescription)
        setIsEditing(false)
       
    }
    const handleToggleEdit = () => {       
       setIsEditing(!isEditing)
    };

    const handleTitleChange = (e) => {
        setEditText(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setEditDescription(e.target.value);
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-EU', {
            year: 'numeric', month: 'long', day: 'numeric'
        })
    }

    return (
        <>     
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
            <button className="redact" onClick={handleToggleEdit}>Redact</button>
            <button className={`toggle-btn ${todo.isChecked ? 'completed' : ''}`} onClick={() => setCheckedToDo(todo.id)}>Complete</button>
            <button className="delete" onClick={() => removeTodo(todo.id)}>Delete</button>
        </>
    )}
</div>
        </>
     );
};

export default TodoItem;
