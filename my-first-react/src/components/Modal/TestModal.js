import React, { Component } from 'react'
import Modal from '../Modal'

export default class TestModal extends Component {

    state = {
        showModal: false
    }
    
    hideModal = e => {
        console.log(e);
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
                <Modal onClose={this.handleClose}>
                    <div className="modal-main" style={{
                        width: '800px',
                        height: '600px',
                        backgroundColor: '#fff'
                    }}>
                        abc
                    </div>
                </Modal>
                <button onClick={this.showModal}>显示朦层</button>
            </div>
        )
    }
}
