import React from 'react';
import { useState } from 'react';
import './App.css';
import './todo/components/TodoItem.css'
import ToDo from './todo/components/TodoList'

function App() {
  return (
    <div>
      <ToDo />
    </div>
  )
}

export default App
