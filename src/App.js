import React from 'react'
import { Routes, Route } from "react-router-dom";
import Characters from './Pages/Characters/character.js';
import Home from "./Pages/Home/Home.js"
import NotFound from './Pages/NotFound/NotFound.js';

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Characters />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  )
}

export default App;
