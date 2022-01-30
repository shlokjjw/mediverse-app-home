import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import LOGIN_PATIENT from './pages/js/LOGIN_PATIENT';
import Error from './pages/js/Error';
import About from './About';
import Logindoctor from './pages/js/Login_doctor';


function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route path='/login' element={<LOGIN_PATIENT/>} />
        <Route path='/logindoc' element={<Logindoctor/>} />
        <Route path='*' element={<Error/>}></Route>
      </Routes>
  );
}

export default App;
