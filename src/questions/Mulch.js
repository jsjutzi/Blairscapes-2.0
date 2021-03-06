import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {getMulch} from '../ducks/reducer'

import Checkbox from '../components/Checkbox'
import Button from '../components/Button'





class Mulch extends Component{
    constructor(props){
        super(props)
        this.state= {
            mulch: false,
            yesChecked: false,
            noChecked: false
        }
    }

    onNext = () => {
        this.props.getMulch(this.state.mulch)
        this.props.history.push('/irrigation')
    }

    onClick = (val) => {
        if (val === 'yesChecked'){
            this.setState({yesChecked: true, noChecked: false, mulch: true})
        }
        if (val === 'noChecked') {
            this.setState({yesChecked: false, noChecked: true, mulch: false})
        }
    }

render(){
    return(
        <div>
            <p className='content-text' >Would you prefer mulch?</p>
            <div className='content-container'>
                <p className='content-text'>Yes</p>
                        <Checkbox
                            checkedProperty={this.state.yesChecked}
                            onClick={(e) => {this.onClick('yesChecked')}}
                        />
                <p className='content-text'>No</p>
                    <Checkbox
                        checkedProperty={this.state.noChecked}
                        onClick={(e) => {this.onClick('noChecked')}}
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
export default withRouter(connect(null, {getMulch})(Mulch))