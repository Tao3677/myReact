import React, { Component } from 'react'
import CheckBoxGroup from './index'
import { getAllStudents } from '../../../services/student'

export default class Test extends Component {
    state = {
        datas: [],
        chooseDatas: []
    }

    async componentDidMount() {
        const stus = await getAllStudents();
        this.setState({
            datas: stus.map(stu => ({
                value: stu.id.toString(),
                name: stu.name
            }))
        })
    }

    handleChange = newArr => {
        console.log(newArr, 'arr');
        this.setState({
            chooseDatas: newArr
        })
    }
    
    render() {
        return (
            <div>
                <CheckBoxGroup name="loves" {...this.state} onChange={this.handleChange} />
            </div>
        )
    }
}



