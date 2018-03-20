import React from 'react';
import {Switch, Route} from 'react-router-dom';

//components to be rendered
import Home from './questions/Home';

 




export default (
    <Switch>
        <Route exact path='/' component={Home}/>
    </Switch>
)