import classes from './CartButton.module.css';
import {useSelector, useDispatch } from 'react-redux';
import { UiActions } from '../../store/Ui-store';

const CartButton = (props) => {
  const total=useSelector(state=>state.cart.totalItems)
    const dispatch=useDispatch();
  function toggleHandler(){
    dispatch(UiActions.ToggleCart())
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
