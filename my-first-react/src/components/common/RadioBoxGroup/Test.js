import React, { Component } from 'react'
import RadioBoxGroup from './index'
import { getAllStudents } from '../../../services/student'

export default class Test extends Component {

    state = {
        datas: [],
        value: '',
    }
    
    async componentDidMount() {
        const stus = await getAllStudents();
        this.setState({
            datas: stus.map(item => ({
                name: item.name,
                value: item.id.toString()
            }))
        })
    }

    handleChange = value => {
        this.setState({
            value
        })
    }
    
    render() {
        return (
            <div>
                <RadioBoxGroup name="radios" {...this.state} onChange={this.handleChange} />
            </div>
        )
    }
}
