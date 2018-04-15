import React from 'react';
import {Switch, Route} from 'react-router-dom';

//components to be rendered
import Home from './questions/Home';
import Grass from './questions/Grass';
import Mulch from './questions/Mulch';
import Irrigation from './questions/Irrigation';
import Inspection from './questions/Inspection';
import Seasonal from './questions/Seasonal';
import YearRound from './questions/YearRound';
import Fertilizer from './questions/Fertilizer';

 




export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/grass' component={Grass}/>
        <Route path='/mulch' component={Mulch}/>
        <Route path='/irrigation' component={Irrigation}/>
        <Route path='/inspection' component={Inspection}/>
        <Route path='/seasonal' component={Seasonal}/>
        <Route path='/year-round' component={YearRound}/>
        <Route path='/fertilizer' component={Fertilizer}/>
      
    </Switch>
)