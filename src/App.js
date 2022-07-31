import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from 'react-redux';
import { Fragment } from 'react';
import Notification from './components/Notification/Notification';

function App() {
  const showcart=useSelector(state=>state.ui.toggle);
  return (
    <Fragment>
      <Notification />
    <Layout>
      {showcart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
