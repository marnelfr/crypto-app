import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Currency } from './Pages/Currency';
import { Home } from './Pages/Home';
// import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/currency/:currencyId' exact element={<Currency />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
