import React from 'react'

const Todo = (props) => {
    const {title,desc,id} = props.getTodo
    
    
  return (
    <article>
        <div className='content'>
            
            <h5>{id}</h5>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    </article>
  )
}

export default Todo