import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {getInspection} from '../ducks/reducer'

import Checkbox from '../components/Checkbox'
import Button from '../components/Button'





class Inspection extends Component{
    constructor(props){
        super(props)
        this.state= {
            inspection: '',
            quarterly: false,
            biAnnually: false,
            yearly: false
        }
    }

    onNext = () => {
        this.props.getInspection(this.state.inspection)
        this.props.history.push('/seasonal')
    }

    onClick = (val) => {
        this.setState({inspection: val})
        if (val === 'quarterly'){
            this.setState({quarterly: true, biAnnually: false, yearly: false})
        }
        if (val === 'biAnnually') {
            this.setState({biAnnually: true, quarterly: false, yearly: false})
        }
        if (val === 'yearly'){
            this.setState({yearly: true, quarterly: false, biAnnually: false})
        }
    }

render(){
    return(
        <div>
            <p className='content-text' >What inspection schedule would you prefer for your irrigation/sprinkler system?</p>
            <div className='content-container'>
                <p className='content-text'>Quarterly</p>
                        <Checkbox
                            checkedProperty={this.state.quarterly}
                            onClick={(e) => {this.onClick('quarterly')}}
                        />
                <p className='content-text'>Bi-Annually</p>
                    <Checkbox
                        checkedProperty={this.state.biAnnually}
                        onClick={(e) => {this.onClick('biAnnually')}}
                    />
                <p className='content-text'>Yearly</p>
                    <Checkbox
                        checkedProperty={this.state.yearly}
                        onClick={(e) => {this.onClick('yearly')}}
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
export default withRouter(connect(null, {getInspection})(Inspection))