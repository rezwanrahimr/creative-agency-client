import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Sheard/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Home/Header/Header';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Header></Header>}>Home</Route>
     </Routes>
    </div>
  );
}

export default App;
