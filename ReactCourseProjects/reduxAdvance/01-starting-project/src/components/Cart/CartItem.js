import classes from './CartItem.module.css';
import { CartActions } from '../../store/Cart-slice';
import { useDispatch} from 'react-redux';

const CartItem = (props) => {
  

  const dispatch=useDispatch()
  const AddToCart=()=>{
      dispatch(CartActions.AddToCart(props.item))
  }
  const removeFromCart=()=>{
    dispatch(CartActions.RemoveFromCart(props.item.id))
}
  return (
    <li className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          ${props.total}{' '}
          <span className={classes.itemprice}>(${props.price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCart}>-</button>
          <button onClick={AddToCart}>+</button>
        </div>
      </div>
    
    </li>
  );
};

export default CartItem;
