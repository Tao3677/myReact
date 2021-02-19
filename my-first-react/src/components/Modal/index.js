import React, { Component } from 'react'
import './index.css'
export default class Modal extends Component {
    
    render() {
        const defaultProps = {
            bg: 'rgba(0, 0, 0, .5)'
        }
        const datas = Object.assign({}, defaultProps, this.props)
        return (
            <div 
                className="modal-content" 
                style={{
                    backgroundColor: datas.bg
                }}
                onClick={datas.onClose}
            >
                <div className="modal-center">
                    {datas.children}
                </div>
            </div>
        )
    }
}
