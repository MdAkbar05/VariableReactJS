import React from 'react'
import Todos from './Todos';

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
];

const Home = () => {
  return (
    <div>
        <div className='container homeTodo '>
            <h1 className='text-center text-success'>Todo App</h1>
        <Todos todos={dummyTodos} />
        </div>
        
    </div>
  )
}

export default Home