import React, { useState } from 'react'


function BMICalculator() {
    
    const [weight,setWeight] = useState();
    const [height,setHeight] = useState();
    const [bmi,setBmi] = useState('');
    const [message,setMessage] = useState(0);

    let calculateBMI = (e) => {
        e.preventDefault();
        if(weight=== 0 || height===0){
            alert("Invalid Input")
        }
        else{
            let bmi = (weight/(height/100)**2)
            setBmi(bmi.toFixed(2))
            if(bmi<18.5){
                setMessage("Your Health is Underweight")
            }
            if(bmi<18.5){
                setMessage("Your Health is Underweight")
            }
            if(bmi>18.5 && bmi<=24.9){
                setMessage("Your Health is Perfect")
            }
            if(bmi>=25 && bmi<=29.9){
                setMessage("Your Health is Not Perfect, You should decrease your health")
            }
        }
    }

    let reload = ()=>{
       window.location.reload();
    }
    
  return (
    <div className='BMI'>
        <div className='container text-center'>
            <h2>BMI Calculator</h2>
            <form onSubmit={calculateBMI}>
                <div>
                    <label>Weight (kg)</label>
                    <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
                <div className='my-3'>
                    <label>Height (cm)</label>
                    <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <button className='btn btn-outline-primary ' type='submit'>Submit</button>
                <button className='btn btn-outline-primary mx-2 my-4' type='submit' onClick={reload}>Reload</button>
            </form>
            <div className='p-3 bg-dark text-light'>
                <h3>Your BMI is : {bmi}</h3>
                <div>{message}</div>
            </div>
            
        </div>
    </div>
  )
}

export default BMICalculator