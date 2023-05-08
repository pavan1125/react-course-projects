import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = (props) => {
  const Data=useSelector(state=>state.cart)

  
  console.log(Data)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {Data.items.map((item)=>{
          return (

            <CartItem
              key={item.id} title={item.title} quantity={item.Quantity} total={item.Quantity * item.price} price={item.price} item={item}
            />
          )
        })}
      </ul>
      <div>Total:{Data.totalPrice}</div>
    </Card>
  );
};

export default Cart;
