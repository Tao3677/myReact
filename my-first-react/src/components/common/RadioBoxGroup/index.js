import React, { Component } from 'react'

export default class RadioBoxGroup extends Component {

    getAllRadio() {
        return this.props.datas.map(item => (
            <label>
                <input type="radio" name={this.props.name} value={item.value} checked={item.value === this.props.value} onChange={this.handleChange}/>{item.name}
            </label>
        ))
    }

    handleChange = e => {
        this.props.onChange && this.props.onChange(e.target.value, e.target.name, e)
    }
    
    render() {
        const allRadios = this.getAllRadio();
        return (
            <div>
                {allRadios}
            </div>
        )
    }
}
