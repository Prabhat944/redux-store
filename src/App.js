import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from 'react-redux';
import { Fragment, useEffect } from 'react';
import Notification from './components/Notification/Notification';
import { FetchFromServer, SendToServer } from './store/cart-action';
import { uiActions } from './store/uiSlice';

let initial=true;
function App() {
  const dispatch=useDispatch();

  const showcart=useSelector(state=>state.ui.toggle);
  const cart=useSelector(state=>state.cart.cartitem);
  const quantity=useSelector(state=>state.cart.quantity);
  const total=useSelector(state=>state.cart.total);
  const show=useSelector(state=>state.cart.show);
  const notification=useSelector(state=>state.ui.shownotify);

  useEffect(()=>{
    dispatch(FetchFromServer());
  },[dispatch])

  useEffect(()=>{
    if(initial){
      initial=false;
      return;
    }
    if(show){
      dispatch(uiActions.showstatus(true))
    dispatch(SendToServer({items:cart,quantity:quantity,total:total}));
    }
    
  },[dispatch,cart,quantity,total,show])
  return (
    <Fragment>
      {notification && <Notification />}
    <Layout>
      {showcart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
