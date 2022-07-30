import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from 'react-redux';

const Cart = (props) => {
  const cartitem=useSelector(state=>state.cartitem);
  const itemlist=cartitem.map(store=>
  <CartItem 
  title= {store.title}  
  quantity= {store.quantity}  
  total={store.total} 
  price= {store.price} 
  key={Math.random().toString()}/>)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {itemlist}
      </ul>
    </Card>
  );
};

export default Cart;
