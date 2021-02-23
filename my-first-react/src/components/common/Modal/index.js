import React, { Component } from 'react'
import './index.css'
export default class Modal extends Component {

    hanleClose = e => {
        // 阻止事件冒泡的一种
        if(e.target.className === 'modal-content') {
            this.props.onClose();
        }
    }
    
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
                onClick={e => {
                    this.hanleClose(e)
                }}
            >
                <div className="modal-center">
                    {datas.children}
                </div>
            </div>
        )
    }
}
