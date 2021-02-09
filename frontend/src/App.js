import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <switch>
          <Route exact path="/" component={Home}>
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header/>
          </Route>
          <Route exact path="/login">=
            <Login/>
          </Route>
        
        </switch>
      </div>
    </Router>
  );
}

export default App;
