import React from "react"
import mealImg from "../assets/meals.jpg"
import CssClasses from "./Header.module.css"
import HeaderButton from "./HeaderButton"
export default function Header(props){
    return(
        <>
          <header className={CssClasses.header}>
             <h1>meals App</h1>
             <HeaderButton  onClick={props.onShowCart}/>
          </header>
          <div className={CssClasses['main-image']}>
            <img src={mealImg} alt="meals" />
          </div>
        </>
    )
}