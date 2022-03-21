import React from "react";
import Nav from "./Nav";
import Contact from "./Contact";
import About from "./About";
import Episodes from "./Episodes";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Route exact path='/Contact' component={Contact} />    
      <Route exact path='/About' component={About} />
      <Route exact path= '/Episodes' component={Episodes} />
      </div>
    </BrowserRouter>
  );
}

export default App;
