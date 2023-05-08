import React from "react"
import "../index.css"

import useInput from "../hooks/InputHooks";
const SimpleInput = (props) => {

   const {value,valueIsValid,InputIsINValid,
    changeHandler,
    BlurHandler,
    Reset}=useInput((value)=>value.trim()!=="")
   
   let formIsValid=false
   if(valueIsValid){
    formIsValid=true
   }
   const submitHandler=(event)=>{
     event.preventDefault();
     if(!formIsValid){
      return
     }
      Reset()
   }
   
  const nameInputClasses =InputIsINValid 
    ? 'form-control invalid'
    : 'form-control';

return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input  type='text' id='name' value={value} onChange={changeHandler} onBlur={BlurHandler}/>
        { InputIsINValid  && <p>name should not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
