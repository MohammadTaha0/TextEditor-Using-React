import React from 'react'
import PropTypes from 'prop-types'
import {
    Link
} from "react-router-dom";
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link home`} aria-current="page" to="/" id="home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link about`} to="/about">About</Link>
                        </li>
                    </ul>
                    <span className="me-4 text-center" style={{ 'cursor': 'pointer', 'transition': '1s' }} onClick={props.toggleMode}><i className={`fa-${props.mode === "dark" ? "solid" : "light"} text-${props.mode === "dark" ? "light" : "dark"} fa-moon-over-sun fs-4`}></i></span>

                    <span className='text-center' style={{ 'minWidth': '50px' }}>
                        <input type="color" className="form-control form-control-color my-3" id="exampleColorInput" value={props.theme} onChange={props.colorChange} title="Change Theme" />
                    </span>
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: 'TextUtils'
};