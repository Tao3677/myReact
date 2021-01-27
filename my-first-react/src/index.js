import React from 'react';
import ReactDOM from 'react-dom';

// 定时器
let num = 0;
setInterval(() => {
    num ++;
    let div = (
        <div><span>我只是旁观的</span>{num}</div>
    )
    ReactDOM.render(div, document.getElementById('root'))
}, 1000)

