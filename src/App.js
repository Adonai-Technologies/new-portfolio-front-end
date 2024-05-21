import React from 'react';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
function App() {
  return (
    <div>
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home/>} />
           </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
