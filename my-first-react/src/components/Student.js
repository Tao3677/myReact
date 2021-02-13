import React, { Component } from 'react'

export default class Student extends Component {
    render() {
        return (
            <li>
                【姓名】：{this.props.name}
                【邮箱】：{this.props.email}
                【地址】：{this.props.address}
            </li>
        )
    }
}
