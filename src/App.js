import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Sheard/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}>Home</Route>
     </Routes>
    </div>
  );
}

export default App;
