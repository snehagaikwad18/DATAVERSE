import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './pages/Hero';
import ModalSignedUpUsers from './components/ModalSignedUpUsers';

function App() {
  return (
    <div className="bg-black  poppins  ">

      <BrowserRouter>        
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/user' element={<ModalSignedUpUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
