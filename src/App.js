import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.scss';

import Header from './components/header/Header';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import CheckoutPage from "./pages/checkout/CheckoutPage";
import SirotkinPage from "./pages/sirotkin/SirotkinPage";

import Auth from './pages/auth/auth';
import {auth, createUserProfilerDocument} from './firebase/firebaseUtil';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/actions';
import {selectCurrentUser} from "./redux/user/selectors";

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfilerDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    });
                });
            }

            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        if (this.unsubscribeFromAuth) {
            this.unsubscribeFromAuth()
        }
    }

    render = () => (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/auth' render={this.renderAuthPage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/checkout' component={CheckoutPage}/>
                <Route path='/sirotkin' component={SirotkinPage}/>
            </Switch>
        </div>
    )

    renderAuthPage = () => {
        return this.props.currentUser ? <Redirect to='/'/> : <Auth/>;
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: selectCurrentUser(state)
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
