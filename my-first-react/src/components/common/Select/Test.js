import React, { Component } from 'react'
import Select from './index'
import { getAllStudents } from '../../../services/student'
export default class Test extends Component {
    state = {
        datas: [
            {
                name: '足球',
                value: 'football'
            },
            {
                name: '音乐',
                value: 'music'
            },
            {
                name: '电影',
                value: 'movie'
            },
            {
                name: '其他',
                value: 'other'
            }
        ],
        value: '',
    }

    async componentDidMount() {
        const stus = await getAllStudents();
        this.setState({
            datas: stus.map(item => ({
                value: item.id.toString(),
                name: item.name
            }))
        })
    }
    
    render() {
        return (
            <div>
                <Select name="loves" {...this.state} onChange={value => {
                    this.setState({
                        value
                    })
                }} />
            </div>
        )
    }
}
