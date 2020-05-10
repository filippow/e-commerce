import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';

import Header from "./components/header/header";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Auth from "./pages/auth/auth";
import {auth, createUserProfilerDocument} from "./firebase/firebaseUtil";

class App extends React.Component {
    state = {
        currentUser: null
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
         this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
             if (userAuth) {
                 const userRef = await createUserProfilerDocument(userAuth);

                 userRef.onSnapshot(snapshot => {
                     this.setState({
                         currentUser: {
                             id: snapshot.id,
                             ...snapshot.data()
                         }
                     });
                 });
             }
             this.setState({currentUser: userAuth});
         })
    }

    componentWillUnmount() {
        if (this.unsubscribeFromAuth) {
            this.unsubscribeFromAuth()
        }
    }

    render = () => (
        <div>
            <Header currentUser={this.state.currentUser}/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/auth' component={Auth}/>
            </Switch>
        </div>
    )
}

export default App;
