import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
const imgUrl = 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1534409950,1918892719&fm=15&gp=0.jpg';

const imgName = 'img-class'

const div = (
    <div>
        <img src={imgUrl} className={imgName} alt="" style={{width: '800px', 'margin-left': '100px'}}/>
    </div>
)


ReactDOM.render(div, document.getElementById('root'))

