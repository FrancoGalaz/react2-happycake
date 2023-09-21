import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './views/Navbar';
import Home from './views/Home';
import Contacto from './views/Contacto';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Rutas_React/" element={<Home />} />
        <Route path="/Contacto" element={<Contacto />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;