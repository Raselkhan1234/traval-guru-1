import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import NoFound from './Components/NoFound/NoFound';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const SelectedProductContext =createContext();

function App() {
  const [cart,setCart]=useState([]);
  const [loggedInUser,setLoggedInUser]=useState({});
 
  return (
    <SelectedProductContext.Provider value={[cart,setCart,loggedInUser,setLoggedInUser]}>
      
       <Router>
        <Header/>
        <Switch>
          <Route path="/news" >
            <Home/>
          </Route>
          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/place/:productId">
            <ProductDetail/>
          </Route>
          <Route path="*">
            <NoFound/>
          </Route>
        </Switch>
        </Router>
    
    </SelectedProductContext.Provider>
    
  );
};

export default App;
