
import './App.css';
import Home from './components/Homepage/home';
import Login from './components/Login/login';
import Registration from './components/Registration/registration';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
function App() {
  const [user,setLoginUser]=useState({})
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id  ?<Home setLoginUser={setLoginUser}/>: <Login setLoginUser={setLoginUser}/>
            }
            </Route>
          <Route path="/login"><Login setLoginUser={setLoginUser}/></Route>
          <Route path="/registration"><Registration/></Route>
         
        </Switch>
      </Router>
      {/* <Home/>
      <Login/>
      <Registration/> */}
    </div>
  );
}

export default App;
