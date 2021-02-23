import React, { Component } from 'react'
import Modal from './index'

export default class TestModal extends Component {

    state = {
        showModal: false
    }
    
    hideModal = e => {
        this.setState({
            showModal: false
        })
    }
    
    showModal = e => {
        this.setState({
            showModal: true
        })
    }

    render() {
        return (
            <div>
                <img src="https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF" alt=""/>
                {
                    this.state.showModal ? (
                        <Modal onClose={this.hideModal} >
                            <div className="modal-main" style={{
                                width: '800px',
                                height: '600px',
                                backgroundColor: '#fff'
                            }}>
                                <h1>Modal Content</h1>
                                <button onClick={this.hideModal}>隐藏朦层</button>
                            </div>
                        </Modal>
                    )
                    : null
                }                
                <button onClick={this.showModal}>显示朦层</button>
            </div>
        )
    }
}
