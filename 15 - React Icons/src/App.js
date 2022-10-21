import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Nav from './components/Layout/Nav';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <BrowserRouter>
      {/* Manter o "Nav" e o "Footer" fora do 'Routes' faz com que ele possa ser reaproveitado em todas as páginas. */}
      <Nav/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contato' element={ <Contato />} />
        <Route path='/empresa' element={<Empresa />}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;