
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import {Navigat} from './pages/Navigation'
import { Home } from './pages/Home';
import { SopOnWeb } from './pages/Sop';

import './App.css'
import { SopOnAir } from "./pages/SopOnAir";


function App() {
  return (
    <>

   
   <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
        <Route path="/" element={<Navigat/>}>
        <Route index element={<Home />} />
          <Route path="SopOnWeb" element={<SopOnWeb/>} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
        </Route>
        <Route path="SopOnAir" element={<SopOnAir/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
