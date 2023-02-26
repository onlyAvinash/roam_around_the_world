import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './pages/home/Home';
import Place from './pages/place/Place';
import Header from './components/header/Header';
import { Home } from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/login/Register';


function App() {
  return (
   
     <BrowserRouter>
     <Header/>
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
        <Route  path="login" element={<Login />} />
        <Route  path="register" element={<Register />} />
        <Route path="place" element={< Place/>} />
        <Route path="place/:id" element={<Place />} />
      </Route>
    </Routes>
  </BrowserRouter>
 
  );
}

export default App;
