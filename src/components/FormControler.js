import React, { useState }  from 'react'


function FormControler() {
    const [form,setForm] = useState(true)

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleChangeName = (e)=>{
        setName(e.target.value);
    }

    const handleChangeEmail = (e)=>{
        setEmail(e.target.value);
    }

    const handleChangePassword = (e)=>{
        setPassword(e.target.value);
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        setForm(false)
        let userInfo = {
            name,
            email,
            password,
        };
        console.log(userInfo)
    }
  return (

    <div className='container mt-3'>
        <form onSubmit={handleFormSubmit}>
            {form ? (
                <div>
                                                    <div className='mb-3 mt-3'>
                                <label className='form-label' htmlFor='name'>Username: </label>
                                <input type="text" className='form-control' name='name' value={name} id='name' onChange={handleChangeName} />
                                </div>
                
                            <div className='mb-3 mt-3'>
                                <label className='form-label' htmlFor='email'>Email: </label>
                                <input type="email" className='form-control' name='email' id='email' value={email} onChange={handleChangeEmail} required />
                            </div>
                
                            <div className='mb-3 mt-3'>
                                <label className='form-label' htmlFor='password'>Password: </label>
                                <input type="password" className='form-control' name='password' id='password' value={password} onChange={handleChangePassword} required />
                            </div>
                
                            <button className='btn btn-outline-success' type='submit'>Submit</button>
                </div>
            ) : (
                <div className='container success text-center'>
                    <h3 className='text-center text-success'>Resistration Success</h3>
                </div>
            )}

           
               
            
            
        </form>
    </div>
  )
}

export default FormControler