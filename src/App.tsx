import React from 'react';


import { TodoProvider } from './todo/contexts/TodoContext';
import './App.css';
import './todo/components/TodoItem.css'
import ToDo from './todo/components/TodoList'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <TodoProvider>
      <ToDo />
    </TodoProvider>
  )
}

export default App
