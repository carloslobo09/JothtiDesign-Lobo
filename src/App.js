import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './NavBar/navbar';
import Container from './ItemListContainer/Container';


function App() {

  return (
    <>
      <Navbar/>
      <Container saludo={'¡Bienvendios a Jothti!'} tamaño={'60px'}/>
    </>
  );
}

export default App;
