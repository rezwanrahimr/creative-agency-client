import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Sheard/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import SignUp from './Pages/Login/SignUp';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}>Home</Route>
       <Route path='/home' element={<Home></Home>}>Home</Route>
       <Route path='/signUp' element={<SignUp></SignUp>}>Home</Route>
       <Route path='/login' element={<Login></Login>}>Home</Route>
     </Routes>
    </div>
  );
}

export default App;
