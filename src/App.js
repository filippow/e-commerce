import React, {useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.scss';

import Header from './components/header/Header';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import CheckoutPage from "./pages/checkout/CheckoutPage";
import SirotkinPage from "./pages/sirotkin/SirotkinPage";
import Auth from './pages/auth/auth';

import {checkUserSession} from "./redux/user/actions";
import {selectCurrentUser} from "./redux/user/selectors";

const App = ({checkUserSession, currentUser}) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);


    const renderAuthPage = () => {
        return currentUser ? <Redirect to='/'/> : <Auth/>;
    }

    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/auth' render={renderAuthPage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/checkout' component={CheckoutPage}/>
                <Route path='/sirotkin' component={SirotkinPage}/>
            </Switch>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: selectCurrentUser(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkUserSession: () => dispatch(checkUserSession())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
