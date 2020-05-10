import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';

import Header from "./components/header/header";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Auth from "./pages/auth/auth";


function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/auth' component={Auth}/>
            </Switch>
        </div>
    )
}

export default App;
