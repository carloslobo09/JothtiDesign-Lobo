import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar/NavBar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';


function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer saludo={'¡Bienvendios a Jothti Diseños!'}>
      </ItemListContainer>
    </>
  );
}

export default App;
