import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {getSeeding} from '../ducks/reducer'

import Checkbox from '../components/Checkbox'
import Button from '../components/Button'





class YearRound extends Component{
    constructor(props){
        super(props)
        this.state= {
            yearRound: false,
            yesChecked: false,
            noChecked: false
        }
    }

    onNext = () => {
        this.props.getSeeding(this.state.yearRound)
        this.props.history.push('/fertilizer')
       
    }

    onClick = (val) => {
        if (val === 'yesChecked'){
            this.setState({yesChecked: true, noChecked: false, yearRound: true})
        }
        if (val === 'noChecked') {
            this.setState({yesChecked: false, noChecked: true, yearRound: false})
        }
    }

render(){
    return(
        <div>
            <p className='content-text' >Would you prefer your lawn to be green year-round (during winter)?</p>
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
export default withRouter(connect(null, {getSeeding})(YearRound))