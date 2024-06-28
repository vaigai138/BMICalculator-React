import { useState } from 'react'
import './App.css'

function App() {
  
  const [height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [bmi,setBmi]=useState(null);
  const [bmistatus,setBmiStatus]=useState("");
  const [errorMessage,setErrorMessage]=useState("");

  const bmiCalculator=()=>{

    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if (isValidHeight && isValidWeight){
      const heightInMeters= height/100;
      const bmiValue = weight/(heightInMeters*heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if(bmiValue<18.5){
        setBmiStatus("Under Weight")
      }else if(bmiValue>=18.5 && bmiValue<24.9){
        setBmiStatus("Normal Weight")
      }else if(bmiValue>=25 && bmiValue<29.9){
        setBmiStatus("Over Weight")
      }else{
        setBmiStatus("Obese")
      }
      setErrorMessage("");
    }else{
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("Please enter a valid numeric value for the height & weight.")
    }
  }

  const clearAll=()=>{
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");

  }

  return (
    <>
      <div className="bmi-container">
        <div className="bmi-image"></div>
        <div className="bmi-data">
          <h1>BMI Calculator</h1>
          {errorMessage && <p className='error'> {errorMessage} </p>}
          <div className="input-container">
            <label htmlFor="height">Height (CM):</label>
            <input type="text" id='height' value={height} onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight (KG):</label>
            <input type="text" id='weight' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
          </div>
          <button onClick={bmiCalculator}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>
          {bmi!==null &&(
            <div className="result">
            <p>Your BMI Is : {bmi}</p>
            <p>BMI Status : {bmistatus}</p>
          </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
