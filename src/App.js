import Home from './Components/Home';
import {about} from './Components/pages/about';
import {creators} from './Components/pages/creators';
import { sponsors} from './Components/pages/sponsors';
import { contact } from './Components/pages/contact';
import { SignUp } from './Components/sponsors/signup';
import Navbar from './Components/Navbar';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="outer">
        <Navbar />
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
            {contact}
          </Route>
          <Route exact path='/sponsor-signup'>
            {SignUp}
          </Route>
        </Switch>
        </>
      </div>
    </Router>
  );
}

export default App;
