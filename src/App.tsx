import React from 'react';
import './App.css';
import './todo/components/TodoItem.css'
import ToDo from './todo/components/TodoList'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <div>
      <ToDo />
    </div>
  )
}

export default App
