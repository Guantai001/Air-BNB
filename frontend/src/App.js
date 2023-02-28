import './App.css';
import { BrowserRouter,Navigate , Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AirBnbPage from './components/AirBnbPage';
import HotelPage from './components/HotelPage';
import AccountPage from './components/AccountPage';


function App() {
  return (
   <>
    <BrowserRouter>

      <Routes>
      <Route path="/" element={<Navigate to="/home"/>} />
     <Route path="/home" element={<HomePage/>}/>
    <Route path="/airbnb" element={<AirBnbPage/>}/>
    <Route path="/hotel" element={<HotelPage/>}/>
    <Route path="/account" element={<AccountPage/>}/>
      </Routes>

    </BrowserRouter>
   </>
  );
}

export default App;
