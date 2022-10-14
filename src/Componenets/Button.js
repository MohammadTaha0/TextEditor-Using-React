import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {
    return (
        <div>
            <button type='button' className={props.className} onClick={props.onClick}>{props.value}</button>
        </div>
    )
}
Button.propTypes = {
    className: PropTypes.string
}
Button.defaultProps = {
    className: "btn btn-secondary rounded-0 border-end",
    value: "btn"
}