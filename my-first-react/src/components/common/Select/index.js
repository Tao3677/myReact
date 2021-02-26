import React, { Component } from 'react'

export default class Select extends Component {

    getAllOptions() {
        return this.props.datas.map(item => (
            <option key={item.value} value={item.value}>{item.name}</option>
        ))
    }

    handleChange = e => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e)
    }

    render() {
        const allOptions = this.getAllOptions()
        return (
            <select name={this.props.name} value={this.props.value} onChange={this.handleChange}>
                {allOptions}
            </select>
        )
    }
}
