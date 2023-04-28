import React,{useState} from 'react'

import {v4 as uuidv4} from "uuid";
import Todos from './Todos';
import NewTodo from './NewTodo';

const Home = () => {
    const [todos,setTodos]= useState([]);

    const handleAddTodo = (todo)=>{
        setTodos((prevTodos)=>{
            return [...prevTodos, {id : uuidv4(),todo}];
        })
        console.log(todos)
    }

    const handleRemoveTodo = (id)=>{
        
        setTodos((prevTodos)=>{
            const filteredTodos = todos.filter((todo)=> todo.id !==id)
            return filteredTodos;
        })
    }

    const handleEditTodo = (id)=>{
        
        setTodos((prevTodos)=>{
            const filteredTodos = todos.filter((todo)=> todo.id !==id)
            return filteredTodos;
        })
    }
  return (
    <div>
        <div className='container homeTodo '>
            <h1 className='text-center '>Todo App</h1>
            <NewTodo onAddTodo={handleAddTodo} />
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo} onEditTodo={handleEditTodo} />
        </div>
        
    </div>
  )
}

export default Home