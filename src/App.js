import './App.css';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import Navigation from "./Components/Navigation";
import Shop from "./Pages/Shop";
import Admin from "./Pages/Admin/Admin";
import Cart from "./Pages/Cart";
import React, {useContext, useEffect, useState} from "react";
import AppRouter from "./Components/AppRouter";
import {Context} from "./index";
import {check} from "./apis/userAPI";
import {Spinner} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    if (localStorage.getItem('token')) {
        useEffect(() => {
            check()
                .then(data => {
                    user.setUser(data.user)
                    user.setIsAuth(true)
                })
                .catch(() => {
                    user.setUser([])
                    user.setIsAuth(false)
                })
                .finally(() => setLoading(false))
        }, []);
    }
    else {
        useEffect(() => {
            setLoading(false)
        }, [])
    }

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

  return (
      <BrowserRouter>
          <Navigation/>
          <Switch>
              <AppRouter/>
              <Route exact path="/" component={Shop}/>
              <Route path="/admin" component={Admin}/>
              <Route path="/cart" component={Cart}/>
              <Redirect to="/"/>
          </Switch>

      </BrowserRouter>
  );
})

export default App;
