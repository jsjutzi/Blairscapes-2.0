import React, {Component} from 'react'
import CheckBox from 'react-animated-checkbox'

export default class Checkbox extends Component{
    render = () => {
        const {checkedProperty, onClick} = this.props
        return(
            <div className='checkbox-container'>
                <CheckBox
                className='checkbox-container'
                checked={checkedProperty}
                checkBoxStyle={{
                    checkedColor: '#66f828',
                    size: 60,
                    unCheckedColor: '#ffffff' 
                }}
                duration={400}
                onClick={onClick}
                />
            </div>
        )
    }
}
