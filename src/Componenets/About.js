import React from 'react'
import Resume from '../assets/img/resume.png'
import '../assets/css/About.css';
export default function About() {
    document.title = "Textutilz - About";
    return (
        <div className="container">
            <div className="row h-100 align-items-center m-0 p-0">
                <div className="col-12 h-100 img-parent">
                    <img src={Resume} alt="taha" />
                    <br />
                    <span>
                        <a href="https://github.com/MohammadTaha0" className='h4 text-light btn btn-dark'>Github <i className="fa-solid fa-up-right-from-square fs-6 ms-1"></i></a>
                    </span>
                    <br />
                    <span>
                        <a href="https://www.linkedin.com/in/mohammad-taha-244725247/" className='h4 text-light btn btn-primary'>Linkedin <i className="fa-solid fa-up-right-from-square fs-6 ms-1"></i></a>
                    </span>
                </div>
            </div>
        </div>
    )
}
