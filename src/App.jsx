import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoItem1 from './components/TodoItem1';
import AppName from './components/AppName';
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <center className='todo-container'>
        <AppName />
        <AddTodo />
        <TodoItem1 />
      </center>
    </>
  )
}

export default App
