import React, {Component} from 'react'
import logo from '../logo.png'
require('../index.css')

export default class Header extends Component{
    render(){
        return(
            <div className='header-bar'>
                <img className='logo' src={logo}/>
            </div>
        )
    }
}