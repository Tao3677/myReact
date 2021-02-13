import React, { Component } from 'react'
import './Modal.css'
export default class Modal extends Component {
    render() {
        if(!this.props.show) {
            return null;
        }
        return (
            <div className="modal">
                加载中...
            </div>
        )
    }
}
