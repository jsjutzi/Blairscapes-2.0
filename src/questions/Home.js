import React, {Component} from 'react';
import {getGrass} from '../ducks/reducer.js';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'






class Home extends Component{
    constructor(props){
        super(props)
        this.state= {
            address: {}
        };
    }

    render(){
        return(
            <div>
                <div className='content-text'>
                    <p>Welcome to Blairscapes!  To get a free estimate for lawncare, please click below and answer 10 simple questions about your needs to help us determine your quote.</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;
const connected = connect(mapStateToProps, { getGrass })(Home);
const RoutedContainer = withRouter(connected);
export default RoutedContainer;