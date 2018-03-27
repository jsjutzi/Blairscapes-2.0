import React, {Component} from 'react';
import Button from '../components/Button';




export default class Home extends Component{
    

    render(){
        return(
            <div>
                <div>
                    <h3 className='content-text'>Welcome to Blairscapes!</h3>
                    <h5 className='content-text'>To get a free estimate for lawncare, please click below and answer a few simple questions about your needs to help us determine your quote.</h5>
                </div>
                <Button/>
            </div>
        )
    }
}

