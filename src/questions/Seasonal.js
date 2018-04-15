import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {getSeasonal} from '../ducks/reducer'

import Checkbox from '../components/Checkbox'
import Button from '../components/Button'





class Seasonal extends Component{
    constructor(props){
        super(props)
        this.state= {
            seasonal: false,
            yesChecked: false,
            noChecked: false
        }
    }

    onNext = () => {
        this.props.getSeasonal(this.state.seasonal)
        this.props.history.push('/year-round')
       
    }

    onClick = (val) => {
        if (val === 'yesChecked'){
            this.setState({yesChecked: true, noChecked: false, seasonal: true})
        }
        if (val === 'noChecked') {
            this.setState({yesChecked: false, noChecked: true, seasonal: false})
        }
    }

render(){
    return(
        <div>
            <p className='content-text' >Would you prefer seasonal color?</p>
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
export default withRouter(connect(null, {getSeasonal})(Seasonal))