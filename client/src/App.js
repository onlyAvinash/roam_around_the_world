import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Place from './pages/place/Place';

function App() {
  return (
   
     <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
        <Route path="place" element={< Place/>} />
        {/* <Route path="place/:id" element={<Place />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
 
  );
}

export default App;
