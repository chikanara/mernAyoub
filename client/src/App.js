
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProfile } from './js/action/authAction';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
     dispatch(getProfile())
  }, [dispatch])
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/profile" element={<Profile/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
