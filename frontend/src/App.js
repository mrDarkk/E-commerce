import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <switch>
          <Route exact path="/" component={Home}>
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/Checkout">
            <Header/>
            <Checkout />
          </Route>
          <Route exact path="/Login">=
            <Login/>
          </Route>
        
        </switch>
      </div>
    </Router>
  );
}

export default App;
