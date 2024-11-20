import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from '../pages/Home';
import Signup from '../pages/Signup';

function App() {  
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/signup' element = {<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
