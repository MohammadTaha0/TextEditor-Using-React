import React from 'react'
import '../App.css'
function Alert(props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show position-absolute top-25`} role="alert">
            <strong className='text-capitalize'>{props.alert.type}: </strong> {props.alert.msg}
        </div>
    )
}

export default Alert
