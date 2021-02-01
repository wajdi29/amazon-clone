/*eslint no-empty-pattern: "off"*/

import './App.css';

import Header from './Header';

import Home from './Home';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Checkout from './Checkout';

import Login from './Login';

import React, { useEffect } from 'react'
import { auth } from './firebase'
import { useStateValue } from './stateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51HuCTXGfyjO9Io5agXWrdKs73hHcPkxaU31a8MkQdBMz7XsWmVkgmtE7ZTXmIieBuDT3JrWQTV1ksHlX7jMaHeZp00VP7x3xFU')


function App() {
  const [{ }, dispatch] = useStateValue()
  useEffect(() => {
    // will only run when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('User is >>>', authUser)

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })


      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;
