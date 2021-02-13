import React from 'react'
import Student from './Student'
export default function StudentList(props) {
    let stusList = props.stus.map(item => <Student key={item.id} {...item} />);
    return (
        <ul>
            {stusList}
        </ul>
    ) 
}
