import React from 'react'
import {
  Link
} from "react-router-dom";
export default function Footer() {
  return (
    <footer className='container-fluid bg-dark py-4'>
        <div className="col text-light text-center m-auto">
          <Link to='/' className='text-decoration-none text-light'><b>ToDo List App</b></Link> Copyright &copy; 2022
        </div>
    </footer>
  )
}
