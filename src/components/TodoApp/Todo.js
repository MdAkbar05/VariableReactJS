import React from 'react'

const Todo = (props) => {
  const {title,desc} = props.todo;
  const {id} = props;
    
    
    const handleRemove = (id)=>{
      
      props.onRemoveTodo(id)
    }
    const handleEdit = (id)=>{
      props.onEditTodo(id)
    }
  return (
    <article className='content p-3'>
        <div >
            
            
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <div>
          <button className='btn' onClick={()=>{handleRemove(id)}}>
          <i className='fa fa-trash fa-2x text-danger'></i>
          </button><br/>
          <button className='btn' onClick={()=>{handleEdit(id)}}>
          <i className='fa fa-edit fa-2x text-info'></i>
          </button>
        </div>
    </article>
  )
}

export default Todo