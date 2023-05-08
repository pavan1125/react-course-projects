import { useState } from "react"
export default function useInput(validate){
    const [name,setName]=useState("")
    const [blur,setBlur]=useState(false)
    const nameIsValid=validate(name) 
    const InputIsINValid=!nameIsValid && blur

    const changeHandler=(event)=>{
        setName(event.target.value)
     }
     const BlurHandler=(event)=>{
         setBlur(true)
        }

        const Reset=()=>{
            setName("")
            setBlur(false)
        }

        return {
               value:name,
               valueIsValid:nameIsValid,
               InputIsINValid,
              changeHandler,
              BlurHandler,
              Reset
        }
}