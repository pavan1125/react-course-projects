import React from "react"
import MealInput from "./MealInput"
import classes from "./MealItemForm.module.css"
export default function MealItemForm(props){
     const inputRef=React.useRef()

     function SUbmitHandler(event){
          event.preventDefault();
          const enteredAmount=event.target.value 
          const enteredAmountNumber=+enteredAmount
          props.amoutAdded(enteredAmountNumber)
     }
     return(
        <form className={classes.form} onSubmit={SUbmitHandler}>
            <MealInput label="amount" ref={inputRef} input={{
                 id:'amount_'+props.id,
                 
                 type:"number",
                 min:1,
                 max:5,
                 defaultValue:1
                  }} />
            <button>+Add</button>
        </form>
     )
}