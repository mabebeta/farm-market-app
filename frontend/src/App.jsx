import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Honey from './pages/Honey';
import Coffee from './pages/Coffee';
import Avocados from './pages/Avocados';
import Admin  from './pages/Admin';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avocados" element={<Avocados />} />
        <Route path="/honey" element={<Honey />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

