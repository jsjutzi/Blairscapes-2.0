import React, {Component} from 'react'


export default class Button extends Component{
    render(){
        const {title, color, linkTo, onClick} = this.props
        return(
            <div className="centered">
                <button onClick={onClick}>{title}</button>
            </div>
        )
    }
}