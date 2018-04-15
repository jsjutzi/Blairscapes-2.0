import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {getGrass} from '../ducks/reducer'

import Checkbox from '../components/Checkbox'
import Button from '../components/Button'


import stAugustine from '../images/st-augustine.gif';
import bermuda from '../images/Bermuda.jpg';




class Grass extends Component{
    constructor(props){
        super(props)
        this.state= {
            mulch: ''
        }
    }

    onNext = () => {
        this.props.getGrass(this.state.mulch)
        this.props.history.push('/mulch')
    }

    onClick = (val) => {
    }

render(){
    return(
        <div>
            <p className='content-text' >Which kind of grass do you have?</p>
            <div className='content-container'>
                <p className='content-text'>St-Augustine</p>
                    <img className="grass-pic" src={stAugustine} />
                        <Checkbox
                            checkedProperty={this.state.stAugustine}
                            onClick={(e) => {this.onClick('stAugustine')}}
                        />
                <p className='content-text'>Bermuda</p>
                    <img className='grass-pic' src={bermuda}/>
                    <Checkbox
                        checkedProperty={this.state.bermuda}
                        onClick={(e) => {this.onClick('bermuda')}}
                    />
            </div>
            <Button
                title={'Next'}
                onClick={this.onNext}
            />
        </div>
    )
}
}
export default withRouter(connect(null, {getGrass})(Grass))