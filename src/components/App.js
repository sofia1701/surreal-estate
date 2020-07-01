import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import "../styles/App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
}

export default App;
