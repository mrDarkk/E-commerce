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
          {/* <Route path="/">
            <Header />
            <Home />
          </Route> */}
          <Route path="/checkout">
            <Header/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        
        </switch>
      </div>
    </Router>
  );
}

export default App;
