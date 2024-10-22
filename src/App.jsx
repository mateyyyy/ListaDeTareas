import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import VentanaPrincipal from './components/molecules/VentanaPrincipal';
import Inicio from './pages/Inicio';

function App() {
  const location = useLocation();
  
  return (
    <>
      <VentanaPrincipal />
      {location.pathname == '/' ?  <><Inicio></Inicio></> : <></>}
      <Outlet />
    </>
  );
}

export default App;
