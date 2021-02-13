import React from 'react'
import './Pager.css'

/**
 * 分页组件
 * 属性：
 * 1.current        当前页码
 * 2.total          总数据量
 * 3.limit          页容量，每页显示多少条数据
 * 4.panelNumber    数字页码总共显示多少个
 * 5.onPageChange   改变页码触发事件
 * @param {*} props 
 */
export default function Pager(props) {
    const pageNumber = getPageNumber(props);
    const min = getMinNumber(pageNumber, props);
    const max = getMaxNumber(min, pageNumber, props);
    let dom = [];
    for (let i = min; i <= max; i++) {
        dom.push(<span className={i === props.current ? 'item active' : 'item'} key={i} onClick={() => toPage(i, props)}>{i}</span>   )
    }
    return (
        <>
            <span 
                className={props.current === 1 ? 'item disabled' : 'item'}
                onClick={() => toPage(1, props)}
            >首页</span>
            <span 
                className={props.current === 1 ? 'item disabled' : 'item'}
                onClick={() => toPage(props.current - 1 < 1 ? 1 : props.current - 1, props)}
            >上一页</span>
            {/* 数字页码 */}
            {dom}
            <span 
                className={props.current === pageNumber ? 'item disabled' : 'item'}
                onClick={() => toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1, props)}
            >下一页</span>
            <span 
                className={props.current === pageNumber ? 'item disabled' : 'item'}
                onClick={() => toPage(pageNumber, props)}
            >尾页</span>
            <span className="current">{ props.current }</span> / 
            <span> {pageNumber}</span>
        </>
    )
}

/**
 * 获取显示的最大页码
 * @param {*} min        最小页码
 * @param {*} pageNumber 总页码
 * @param {*} props      所有属性
 */
function getMaxNumber(min, pageNumber, props) {
    let maxNumber = min + props.panelNumber - 1;
    if(maxNumber > pageNumber) {
        maxNumber = pageNumber;
    }
    return maxNumber;
}

/**
 * 获取显示的最小页码
 * @param {*} pageNumber 
 * @param {*} props 
 */
function getMinNumber(pageNumber, props) {
    // 用当前页码减去总显示页数的一半
    let minNumber = props.current - Math.floor(props.panelNumber / 2);
    // 必须要保持总的页码为设置的总数
    if(minNumber + props.panelNumber > pageNumber) {
        return pageNumber - props.panelNumber + 1
    }
    if(minNumber < 1) {
        minNumber = 1;
    }
    return minNumber;
}

/**
 * 跳转到指定页
 * @param {*} target 
 * @param {*} props 
 */
function toPage(target, props) {
    // 如果当前页码和指定页码相同，则不执行
    if(target === props.current) return ;
    props.onPageChange && props.onPageChange(target);
}

/**
 * 获取总页数
 * @param {*} props 
 */
function getPageNumber(props) {
    return Math.ceil(props.total / props.limit)
}