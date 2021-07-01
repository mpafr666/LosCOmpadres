import './App.css';
import Navbar from './components/pages/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Carta from './components/pages/Carta/Carta';
import Footer from './components/pages/Footer/Footer';
import CarritoContextProvider from './components/pages/context/carritoContext';
import CarritoView from './components/pages/views/CarritoView';


function App() {

  return (
    <Router>
      <CarritoContextProvider>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/carta" component={Carta}/>      
        <Route path="/carrito" component={CarritoView}/>
      </Switch>
      <Footer />
      </CarritoContextProvider> 
    </Router>
  );
}

export default App;
