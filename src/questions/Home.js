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
                <div>
                    <h3 className='content-text'>Welcome to Blairscapes!</h3>
                    <h5 className='content-text'>To get a free estimate for lawncare, please click below and answer a few simple questions about your needs to help us determine your quote.</h5>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;
const connected = connect(mapStateToProps, { getGrass })(Home);
const RoutedContainer = withRouter(connected);
export default RoutedContainer;