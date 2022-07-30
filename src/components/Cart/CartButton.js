import classes from './CartButton.module.css';
import {useDispatch,useSelector} from 'react-redux';
import { storeActions } from '../../store';

const CartButton = (props) => {
  const dispatch=useDispatch();
  const quantity=useSelector(state=>state.quantity)
  const CartHandler=()=>{
    dispatch(storeActions.showcart());
  }
  
  return (
    <button className={classes.button} onClick={CartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
