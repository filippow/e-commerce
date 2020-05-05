import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';

import Home from "./pages/homepage/Home";


const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
)

const HatsItem = () => (
    <div>
        <h1>HATS ITEM</h1>
    </div>
)

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/hats/:id' component={HatsItem}/>
                <Route path='/hats' component={HatsPage}/>
            </Switch>
        </div>
    )
}

export default App;
