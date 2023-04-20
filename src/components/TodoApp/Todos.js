import React from 'react'
import Todo from './Todo'


const Todos = (props) => {
    
  return (
    <section className='todoSection px-3'>
         
        {
           
            props.todos.map((todo)=>(
                <Todo todo={todo.todo} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo}  />
            ))
        }
    </section>
  )
}

export default Todos