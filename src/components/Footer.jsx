import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100'>
        <div className="footer-container d-flex justify-content-between">
            <div style={{width:'400px'}} className="media">
                <h5 className='d-flex'><i style={{height:'35px'}} className="fa-solid fa-music me-3"></i>Media Player</h5>
                <p style={{textAlign:'justify'}}>Designed and built with all the love in the world by the Bootstrap team withn the help of our contributors  </p>
                <span>Code licensed MIT, docs CC by 3.0</span>
                <span>Currently v5.3.2</span>
            </div>
            <div className="links d-flex flex-column">
                <h5 style={{height:'30px'}}>Links</h5>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
                <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
                <Link to={'/watch'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>

            </div>
            <div className="guides d-flex flex-column">
            <h5 style={{height:'30px'}}>Guides</h5>
            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}>React JS</a>
            <a href="https://reactrouter.com/en/main" target='_blank' style={{textDecoration:'none',color:'white'}}>React Routing</a>
            <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{textDecoration:'none',color:'white'}}>React Bootstrap</a>
            </div>
            <div className="contact">
                <h5 style={{height:'30px'}}>Contact Us</h5>
                <div className='d-flex'>
                <input type="text" className='form-control me-1' placeholder='Email ID please' />
                <button style={{backgroundColor:'orangered'  , padding:'10px' , color:'white', borderRadius:'5px',}}><i className='fa-solid fa-arrow-right fa-1x'></i></button>
                </div>
                <div className='d-flex justify-content-between'>
                    <a style={{height:'100px'}} href="https://react.dev/"><i className="fa-brands fa-twitter"></i></a>
                    <a style={{height:'100px'}} href="https://react.dev/"><i className="fa-brands fa-whatsapp"></i></a>
                    <a style={{height:'100px'}} href="https://react.dev/"><i className="fa-brands fa-instagram"></i></a>
                    <a style={{height:'100px'}} href="https://react.dev/"><i className="fa-brands fa-github"></i></a>
                    <a style={{height:'100px'}} href="https://react.dev/"><i className="fa-brands fa-facebook"></i></a>
                </div>
            </div>
        </div>
        <p className='text-center mt-5'>Copytight &copy; 2024 Media Player. Built with React</p>
    </div>
  )
}

export default Footer