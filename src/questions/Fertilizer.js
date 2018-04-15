import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {getFertilizer} from '../ducks/reducer'

import Checkbox from '../components/Checkbox'
import Button from '../components/Button'





class Fertilizer extends Component{
    constructor(props){
        super(props)
        this.state= {
            springChecked: false,
            summerChecked: false,
            fallChecked: false,
            winterChecked: false
        }
    }

    onNext = () => {
        this.props.getFertilizer(this.state)
        this.props.history.push('/address')
       
    }

    onClick = (val) => {
        this.setState({[val]: !this.state[val]})
    }

render(){
    return(
        <div>
            <p className='content-text' >How often will you need fertilizer (Check all that apply) ?</p>
            <div className='content-container'>
                <p className='content-text'>Spring</p>
                        <Checkbox
                            checkedProperty={this.state.springChecked}
                            onClick={(e) => {this.onClick('springChecked')}}
                        />
                <p className='content-text'>Summer</p>
                    <Checkbox
                        checkedProperty={this.state.summerChecked}
                        onClick={(e) => {this.onClick('summerChecked')}}
                    />
                <p className='content-text'>Fall</p>
                    <Checkbox
                        checkedProperty={this.state.fallChecked}
                        onClick={(e) => {this.onClick('fallChecked')}}
                    />
                <p className='content-text'>Winter</p>
                    <Checkbox
                        checkedProperty={this.state.winterChecked}
                        onClick={(e) => {this.onClick('winterChecked')}}
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
export default withRouter(connect(null, {getFertilizer})(Fertilizer))