import classes from './CartButton.module.css';
import {useDispatch} from 'react-redux';
import {storeActions} from '../../store/index';

const CartButton = (props) => {
  const dispatch=useDispatch();
  const ShowCartHandler=()=>{
    dispatch(storeActions.showcart());
  }
  return (
    <button className={classes.button} onClick={ShowCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
