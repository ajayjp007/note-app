import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import UserNotes from './Pages/UserNotes';
import SignUp from './Pages/SignUp';
import WaterTracker from './Pages/WaterTracker';
import BmiCalculator from './Pages/BmiCalculator';
import Headspace from './Components/HeadSpace/Headspace';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login-page" />
      </Route>
      <Route path="/login-page" exact>
        <Login />
      </Route>
      <Route path="/user-notes" exact>
        <UserNotes />
      </Route>
      <Route path="/sign-up" exact>
        <SignUp />
      </Route>
      <Route path="/Water-tracker" exact>
        <WaterTracker />
      </Route>
      <Route path="/Bmi-calculator" exact>
        <BmiCalculator />
      </Route>
      <Route path="/headspace" exact>
        <Headspace />
      </Route>
      <Route path="/sign-up" exact>
        <SignUp />
      </Route>
      <Route path="*">
        <p>Page not Found </p>
      </Route>
    </Switch>
  );
}

export default App;
