import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from './pages/Login';
import NavBar from './pages/NavBar';
import Home from './pages/Home';
import Register from './pages/Register';
import { useSelector } from 'react-redux';

function App() {

  const user = useSelector(state=>state.user.currentUser)
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path={`/register`}>
         {user? <Redirect to='/'/>:<Register/>}
        </Route>
        <Route path={`/login`}>
         {user? <Redirect to='/'/>:<Login/>}
        </Route>
        <Route exact to='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
