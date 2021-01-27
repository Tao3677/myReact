import React from 'react'
import ReactDOM from 'react-dom'

const a = 1, b = 2;
// const obj = {
//     a: 1,
//     b: 2
// }
const obj = <span>这是个span元素</span>;
const arr = [1, 2, 3, 88, 99 ];
const numbers = new Array(30);
numbers.fill(0);
let lis = numbers.map((item, index) => <li key={index}>{index}</li>)
const dom =  (
    <li>
        <div>{a} + {b} = {a + b}</div>
        <p>
            {/* 以下内容不会输出，虽然不会输出，但是会占用节点 */}
            <span>{null}</span>
            <span>{undefined}</span>
            <span>{false}</span>
        </p>
        <p>
            {/* 0可以显示 */}
            <span>{0}</span>
        </p>
        <p>
            {/* 普通对象无法放置 */}
            {/* { obj } */}
        </p>
        <p>
            {/* 但是可以放置react元素对象 */}
            { obj }
        </p>
        <p>
            {/* 可以放置数组 */}
            { arr }
        </p>
        <ul>
            {/* 循环列表 */}
            {lis}
        </ul>

    </li>
)

ReactDOM.render(dom, document.getElementById('root'))