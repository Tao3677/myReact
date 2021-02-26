import React, { Component } from 'react'

export default class CheckBoxGroup extends Component {

    getAllCheck() {
        return this.props.datas.map(item => (
            <label key={item.value}>
                <input 
                    type="checkbox" 
                    name={this.props.name} 
                    value={item.value} 
                    checked={this.props.chooseDatas.includes(item.value)} 
                    onChange={this.handleChange}
                />{item.name}
            </label>
        ))
    }

    handleChange = e => {
        let newArr;
        console.log(e.target.checked, 'e.target.checked');
        if(e.target.checked) {
            newArr = [...this.props.chooseDatas, e.target.value]
        }else {
            newArr = this.props.chooseDatas.filter(item => item !== e.target.value)
        }
        console.log(newArr, 'index');
        this.props.onChange && this.props.onChange(newArr, this.props.name, e)
    }
    
    render() {
        const checks = this.getAllCheck();
        return (
            <div>
                {checks}
            </div>
        )
    }
}
