"use client";
import React from 'react'
import Header from './components/Header'
import ToDoMAIN from './components/ToDoMAIN'
import Form from './components/Form'
import ToDoLIST from './components/TODOList'

export default function App() {
  const [todos, setTodos] = React.useState([
    
  ]);
  return (
    <div className="wrapper"> 
      <Header/>
      <ToDoMAIN todos_completed={0} total_todos={0}/>
      <Form/>
      <ToDoLIST todos={todos}/>
    </div>
  );
}
