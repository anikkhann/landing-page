import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeInfo from './Components/Home/Home/Home';
import ImagePreview from './Components/Home/ImagePreview/ImagePreview';
export const UserContext = createContext();

function App() {
  const [text , setText] = useState({}); 
  return (
    <UserContext.Provider value={[text, setText]}>
       <Router>
          <Switch>
          
            <Route path="/home">
              <Home></Home>
            </Route>
            
            <Route path="/preview">
              <ImagePreview></ImagePreview>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>

           <Route path="*">
              <Home></Home>
            </Route>
           
          </Switch>
          
      </Router>

    </UserContext.Provider>
  );
}

export default App;
