import React from 'react'

const NewTodo = () => {
  return (
    <form className='form'>
        <div className='form-field'>
            <label htmlFor='title'>Title: </label>
            <input type="text" id='title' name='title' />
        </div>
        <div className='form-field'>
            <label htmlFor='desc'>Description: </label>
            <textarea type="text" id='desc' name='desc' />
        </div>
        <button className='btn btn-outline-info' type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo