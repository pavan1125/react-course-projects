import React from "react";
import CardClasses from "./Card.module.css"

export default function Card(props){
    return(
        <div className={CardClasses.card}>
         {props.children}
        </div>
    )
}