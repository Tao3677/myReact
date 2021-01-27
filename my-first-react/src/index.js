import React from 'react'
import ReactDOM from 'react-dom'
import src1 from './assets/1.jpg'
import src2 from './assets/2.jpg'
import src3 from './assets/3.jpg'
import './index.css'
const srcs = [src1, src2, src3];
let index = 0;
let timer = null;
const container = document.getElementById('root');
function render() {
    ReactDOM.render((<img src={srcs[index]} alt=""/>), container);
}

function start() {
    stop();
    timer = setInterval(() => {
        index ++;
        index = index % 3;
        console.log(index, 'index');
        render();
    }, 1000)
}

function stop() {
    clearInterval(timer);
    timer = null;
}

// 先渲染，再执行定时器切换图片
render();
start();

// 鼠标经过盒子的时候暂停动画
container.onmouseenter = function () {
    stop();
}
container.onmouseleave = function () {
    start();
}