import React, { Component } from 'react'
import Pager from './Pager'
import StudentList from './StudentList'
import Modal from './Modal'
export default class PagerControl extends Component {
    state = {
        current: 1,
        limit: 10,
        total: 0,
        panelNumber: 5,
        students: [],
        isLoading: true
    }
    constructor(props) {
        super(props)
        this.fetchStudents();
    }
    async fetchStudents() {
        const resData = await fetch(`http://api.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.limit}`)
            .then(res => res.json())
            .then(res => res.data);
        this.setState({
            students: resData.findByPage,
            total: resData.cont,
            isLoading: false
        })
    }
    handleOnPageChange = (newPage) => {
        this.setState({
            current: newPage,
            isLoading: true
        }, () => {
            this.fetchStudents()
        })
    }
    render() {
        return (
            <div>
                <StudentList stus={this.state.students}></StudentList>
                <Pager 
                    {...this.state}
                    onPageChange={this.handleOnPageChange}
                /> 
                <Modal show={this.state.isLoading} />
            </div>
        )
    }
}
