import React, {Component} from 'react'
import {Button} from 'react-bootstrap'


export default class ButtonComponent extends Component{
    render(){
        const {title, color, linkTo, onClick} = this.props
        return(
            <div className="centered">
                <button className='button' onClick={onClick}>{title}</button>
            </div>
        )
    }
}