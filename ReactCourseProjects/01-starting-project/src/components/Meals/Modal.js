import React from "react"
import  ReactDOM  from "react-dom"
import classes from "./Modal.module.css"
 function BackDrop(props){
    return(
        <div className={classes.backdrop} onClick={props.onClose}></div>
    )
 }

 function Overlay(props){
    return(
        <div className={classes.modal}>
           
                {props.children}
          
        </div>
    )
 }

export default function Modal(props){
    return(
        <>
        {
            ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>,document.getElementById("modal"))
        }
         
         {
            ReactDOM.createPortal(<Overlay>{props.children}</Overlay> ,document.getElementById("modal"))
         }
        </>
    )
}