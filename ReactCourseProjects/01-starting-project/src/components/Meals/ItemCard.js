import React,{useContext} from "react";
import Classes from "./ItemCard.module.css" ;
import MealItemForm from "./MealItemForm";
import { CartContext } from "../store/CartContext";
export default function ItemCard(props){
   const cartCtx=useContext(CartContext)
    const amoutAdded=(amount)=>{
        cartCtx.addItem({
             id:props.id,
             amount:amount,
             price:props.price,
             name:props.name
        })
    }
    return(
        <li className={Classes.meal}>
            <div >
                <h3>{props.name}</h3>
                <div className={Classes.description}>{props.description}</div>
                <div className={Classes.price}>${props.price}</div>
            </div>
            <div>
                <MealItemForm amoutAdded={amoutAdded}/>
            </div>
        </li>
    )
}