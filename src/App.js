import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import About from "./pages/About";
import Services from "./pages/Services";
import Contactus from "./pages/Contactus";



const App = () => {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contactus}></Route>
      <Route path="/services" component={Services}></Route>
    </Switch>
     
    </>
  );
};

export default App;
