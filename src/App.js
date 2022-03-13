import React from "react";
import Nav from "./Nav";
import Contact from "./Contact";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Route exact path='/Contact' component={Contact} />    
      </div>
    </BrowserRouter>
  );
}

export default App;
