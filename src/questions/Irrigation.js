import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {getSprinkler} from '../ducks/reducer'

import Checkbox from '../components/Checkbox'
import Button from '../components/Button'





class Irrigation extends Component{
    constructor(props){
        super(props)
        this.state= {
            irrigation: false,
            yesChecked: false,
            noChecked: false
        }
    }

    onNext = () => {
        this.props.getSprinkler(this.state.irrigation)
        if (this.state.irrigation === true){
            this.props.history.push('/inspection')
        } else{
            this.props.history.push('/seasonal')
        }
    }

    onClick = (val) => {
        if (val === 'yesChecked'){
            this.setState({yesChecked: true, noChecked: false, irrigation: true})
        }
        if (val === 'noChecked') {
            this.setState({yesChecked: false, noChecked: true, irrigation: false})
        }
    }

render(){
    return(
        <div>
            <p className='content-text' >Do you have an irrigation/sprinkler system?</p>
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
export default withRouter(connect(null, {getSprinkler})(Irrigation))