import React from 'react'
import Todos from './Todos';
import NewTodo from './NewTodo';

const dummyTodos = [
    {
        id : 1,
        title: "Todo Title 1",
        desc : "Todo Description is here"
    },
    {
        id : 2,
        title: "Todo Title 2",
        desc : "Todo Description is here"
    },
    {
        id : 3,
        title: "Todo Title 3",
        desc : "Todo Description is here"
    },
];

const Home = () => {
  return (
    <div>
        <div className='container homeTodo '>
            <h1 className='text-center '>Todo App</h1>
            <NewTodo />
        <Todos todos={dummyTodos} />
        </div>
        
    </div>
  )
}

export default Home