import React  from "react";
import { Switch,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Detaills from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Contact from "./components/Contact/Contact";
import Vetements from "./components/Vetements/Vetements";
import Chaussures from "./components/Chaussures/Chaussures";
import Cosmetiques from "./components/Cosmetiques/Cosmetiques";
import Bijoux from "./components/Bijoux/Bijoux";
import Maroquineries from "./components/Maroquineries/Maroquineries";



function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component={Detaills}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/Contact" component={Contact}/>
        <Route component={Default}/>
      </Switch>
      <Modal />

    </React.Fragment>
  );
}

export default App;
