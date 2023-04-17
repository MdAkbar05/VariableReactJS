import React from 'react'
import Todo from './Todo'


const Todos = (props) => {
    
  return (
    <section className='todoSection'>
         
        {
           
            props.todos.map((todo)=>(
                <Todo getTodo={todo} key={todo.id} />
            ))
        }
    </section>
  )
}

export default Todos