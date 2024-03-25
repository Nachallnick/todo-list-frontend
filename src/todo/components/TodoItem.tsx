import React, { useContext, useState } from "react";
import { useTodos } from "../contexts/TodoContext";
import { ITodoItem } from "./const";
import ComplitedButtons from "../mui_appka/buttons/buttonComplite";
import Button from '@mui/material/Button'
import DeleteButtons from "../mui_appka/buttons/deleteButtons";
import MultilineTextFields from "../mui_appka/inputs";
import UpdateButtons from "../mui_appka/buttons/updateButtons";




interface TodoItemProps {
    todo: ITodoItem;
    index: number
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index }) => {
    const { setCheckedToDo, removeTodo, editTodo } = useTodos() 
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(todo.title);
    const [editDescription, setEditDescription] = useState<string>(todo.description);
    const [editMode, setEditMode] = useState<string | null>(null)


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
        
        <div className="todo-item">
         <div className="todo-content">
             {isEditing ? (
                 <> 
                     <MultilineTextFields 
                            onTitleChange={handleTitleChange}
                            onDescriptionChange={handleDescriptionChange}
                            titleValue={editText}
                            description={editDescription}
                            isEditing={true}                    />
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
        <Button className="save" onClick={handleSave}>Save</Button>
    ) : (
        <>
            <UpdateButtons  onClick={handleToggleEdit}></UpdateButtons>
            <ComplitedButtons onClick={() => setCheckedToDo(todo.id)} isChecked={todo.isChecked}></ComplitedButtons>
            <DeleteButtons onClick={() => removeTodo(todo.id)}>Delete</DeleteButtons>
        </>
    )}
</div>
            </div>     
        
     );
    }

export default TodoItem;
