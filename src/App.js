import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar/NavBar';
import ItemListContainer from './component/container/ItemListContainer';
import ItemDetailContainer from './component/container/ItemDetailContainer'
import {CartProvider} from './context/cartContext'
import Cart from './component/cart/Cart'
import Footer from './component/footer/Footer'
import QuienesSomos from './component/quienessomos/QuienesSomos'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UserProvider from './context/userContext';



function App() {

  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path='/category/:id'>
              <ItemListContainer />
            </Route>
            <Route path='/item/:id'>
              <ItemDetailContainer />
            </Route>
            <Route path='/quienessomos'>
              <QuienesSomos />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
            <Route exact path='/'>
              <ItemListContainer />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
