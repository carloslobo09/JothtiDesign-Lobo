import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar/NavBar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer'
import Footer from './component/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'



function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path='/item/:id'>
          <ItemDetailContainer />
        </Route>
        <Route path='/category/:id'>
          <ItemListContainer />
        </Route>
        <Route exact path='/'>
          <ItemListContainer saludo={'¡Bienvendios a Jothti Diseños!'}>
          </ItemListContainer>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
