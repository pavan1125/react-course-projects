import React from "react"
import Classes from "./MealInput.module.css"
export default React.forwardRef(function MealInput(props,ref){
    return(
        <div className={Classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    )
})