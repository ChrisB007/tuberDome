import Home from './Components/Home';
import {about} from './Components/pages/about';
import {creators} from './Components/pages/creators';
import { sponsors} from './Components/pages/sponsors';
import { Contact } from './Components/pages/contact';
import { SignUp } from './Components/sponsors/signup';
import Dashboard from './dashboard/index';
import Login from './Components/Login';
import Register from './Components/Register';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="outer">
        <>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            {about }
          </Route>
          <Route exact path='/creators'>
            { creators }
          </Route>
          <Route exact path='/sponsors'>
            {sponsors}
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/sponsor-signup'>
            {SignUp}
          </Route>
          <Route id="dashboardID" exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
        </Switch>
        </>
      </div>
    </Router>
  );
}

export default App;
