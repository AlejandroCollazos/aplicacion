import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Registros from './pages/Registros';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Registro' element={<Registros />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
