import React, { Component } from 'react'
import ThreeLayout from './index'
export default class Test extends Component {
    render() {
        return (
            <ThreeLayout
                left={
                    <div>left-content</div>
                }
                right={
                    <div>right-content</div>
                }
            >
                <div>main-content</div>
            </ThreeLayout>
        )
    }
}
