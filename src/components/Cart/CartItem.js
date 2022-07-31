import {cartActions } from '../../store/cartstore';
import classes from './CartItem.module.css';
import {useDispatch} from 'react-redux';

const CartItem = (props) => {
   const dispatch=useDispatch();
   const IncreaseQuantity=()=>{
    dispatch(cartActions.addtocart(props))
   }
   const DecreaseQuantity=()=>{
    dispatch(cartActions.removefromcart(props))
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
          <button onClick={DecreaseQuantity}>-</button>
          <button onClick={IncreaseQuantity}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
