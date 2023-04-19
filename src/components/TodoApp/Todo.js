import React from 'react'

const Todo = (props) => {
    const {title,desc,id} = props.getTodo
    
    
  return (
    <article className='content'>
        <div >
            
            <h5>{id}</h5>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <div>
          <button className='btn'>
          <i className='fa fa-trash fa-2x text-danger'></i>
          </button>
        </div>
    </article>
  )
}

export default Todo