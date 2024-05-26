//import logo from './logo.svg';
import './App.css';
import Login from './login';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Signup from './Signup';
import Home from './home';
//import Accueil from './Acceuil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/home' element={<Home />}></Route>
      </Routes>
                
    </BrowserRouter>
  );
}

export default App;
