
import React from "react";
import './../styles/App.css';
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Item1 from "./Item1";
import Itemlist from "./Itemlist";
const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Router>
        <Routes>
          <Route path="/" element={ <Itemlist/>}></Route>
          <Route path="/items/:id" element={ <Item1/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
