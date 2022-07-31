import classes from './CartButton.module.css';
import {useDispatch,useSelector} from 'react-redux';
import { uiActions } from '../../store/uiSlice';

const CartButton = (props) => {
  const dispatch=useDispatch();
  const quantity=useSelector(state=>state.cart.quantity)
  const CartHandler=()=>{
    dispatch(uiActions.carttoggle());
  }
  
  return (
    <button className={classes.button} onClick={CartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
