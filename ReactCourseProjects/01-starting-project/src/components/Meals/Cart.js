import React from "react"
import classes from "./Cart.module.css"
import Modal from "./Modal"
export default function Cart(props){
    const cartItems=[{
        id:"@2",
        name:"sushi",
        amount:2,
        price:12.99
    }].map((item)=><li>{item.name}</li>)
    return(
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>total amount</span>
                <span>55.66</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}