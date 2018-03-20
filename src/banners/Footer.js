import React, {Component} from 'react'
import logo from '../logo.png'
require('../index.css')

export default class Footer extends Component{
    render(){
        return(
            <div className='footer-bar'>
               <p>&copy; Blairscapes 2018 </p>
            </div>
        )
    }
}