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
import CreateNote from './pages/CreateNote';
import Sidebar from './pages/Sidebar';
import MyNotes from './pages/MyNotes';

function App() {
  const user = useSelector(state=>state.user.currentUser)
  return (
    <Router>
      <NavBar/>
      <Sidebar/>
      <Switch>
      <Route path='/user-notes'>
          <MyNotes/>
        </Route>
        <Route path={`/register`}>
         {user? <Redirect to='/'/>:<Register/>}
        </Route>
        <Route path={`/login`}>
         {user? <Redirect to='/'/>:<Login/>}
        </Route>
        <Route path='/create-note'>
          <CreateNote/>
        </Route>
        <Route exact path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
