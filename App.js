import React from "react"
import "./App.css";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Orders from './Orders';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStatevalue } from "./StateProvider";
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51Ius8HSJDmUl5MnFUisOC0dPAvvifDbPzLIcwCrQS5PXtqvuu4nrsOAjxpIznmW22DYt3TOOQeC5kYXlC0l9ib0R00HYBT2qO3");

function App() {
  const [{ }, dispatch] = useStatevalue();

  React.useEffect(() => {
    // will only run once when app component loads..
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS>>>', authUser);

      if (authUser) {
        // user is just logged in../was
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {

        dispatch({

          type: 'SET_USER',
          user: null
        })
        // the user is logged out
      }
    })
  }, [])
  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
        <Route path="/Orders">
            <Orders/>
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/Payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>

          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
