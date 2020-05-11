import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';

import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Auth from "./pages/auth/auth";
import {auth, createUserProfilerDocument} from "./firebase/firebaseUtil";
import {connect} from 'react-redux';
import {setCurrentUser} from "./redux/user/userActions";

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
                <Route path='/shop' component={ShopPage}/>
                <Route path='/auth' component={Auth}/>
            </Switch>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
