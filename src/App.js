import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar/NavBar';
import Container from './component/ItemListContainer/Container';


function App() {

  return (
    <>
      <NavBar/>
      <Container saludo={'¡Bienvendios a Jothti!'} tamaño={'60px'}/>
    </>
  );
}

export default App;
