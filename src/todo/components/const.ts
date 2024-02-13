export const DEFAULT_TODO_ITEM: ITodoItem[] = [{
    id: Date.now(), 
    title: 'Task 1', 
    description: 'Title of task',
    isChecked: false, 
    createdAt: new Date().toISOString(), 
    updatedAt: new Date().toISOString(), 
    isEdited: false 
}]

export interface ITodoItem {
    id: number;
    title: string;
    description: string;
    isChecked: boolean;
    isEdited: boolean;
    updatedAt: string;
    createdAt: string;
}

export const createNewTodo = (title: string, description: string): ITodoItem => ({
    id: Date.now(), 
    title, 
    description,
    isChecked: false, 
    createdAt: new Date().toISOString(), 
    updatedAt: new Date().toISOString(), 
    isEdited: false,
});