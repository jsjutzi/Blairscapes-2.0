import React from 'react';
import {Switch, Route} from 'react-router-dom';

//components to be rendered
import Home from './questions/Home';
import Grass from './questions/Grass';

 




export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/grass' component={Grass}/>
    </Switch>
)