import Home from './Components/Home';
import {About} from './Components/pages/about';
import Navbar from './Components/Navbar';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="outer">
        <Navbar />
        <>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='./Components/pages/about'>
            <About />
          </Route>
        </Switch>
        </>
      </div>
    </Router>
  );
}

export default App;
