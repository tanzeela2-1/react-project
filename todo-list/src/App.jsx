
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {

const [input, setInput] = useState('')
const [todoList, setTodoList] = useState([])

function addTodoList() {
  if (!input.trim()) return;
  const item = {
    id : todoList.length,
    text : input,
    completed: false
  }
  setTodoList((prev)=>[...prev, item])
  setInput('')
}

function toggle(id){
  setTodoList(
  todoList.map((todo)=> {
    if(todo.id === id)
      return{
      ...todo,
      completed: !todo.completed
      }
      return todo;
  })
  )
}

function removeTodoList(id){
  setTodoList(todoList.filter((todo)=>todo.id !== id))
}

  return(
    <>
    <div className='container'>
    <div className='input-box'>
    <input  className='input-field' type="text" placeholder='Enter TODO' value={input} onChange={(e)=>setInput(e.target.value)} />
    <button className='add-btn' onClick={()=>addTodoList()}>ADD</button>
    </div>
    </div>
    <ul className={`todo-container ${todoList.length > 0 ? 'active-border' : ''}`}>
    {todoList.map((todo)=><li className='todo-list' key = {todo.id}>
      <input type="checkbox" checked={todo.completed} onChange={()=>toggle(todo.id)} />
      <span className={`todos ${todo.completed ? 'lineThrough' : ''}`}>{todo.text}</span>
      <button className='dlt-btn' onClick={()=>removeTodoList(todo.id)}>Delete</button>
    </li>)}
    </ul>
    </>
  )
}

export default App
 