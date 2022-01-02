import React from 'react'
import About from './About'
import Navbar from './Navbar'
import Shop from './Shop'

export default function Header() {
    return (
        <div className="banner">
            <Navbar />
            <div className="baner_contact">
                <div className="container">
                    <div className="container_text">
                    <h3>Pizza Delivery</h3>
                    <h1>MAESTRO PIZINNI</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque harum, facere illo reprehenderit nam ex, 
                    </p>
                    <div className="banner_btn">
                        <a href="" className="btn btn-smart">DELIVER NOW</a>
                    </div>

                    </div>
                    
                </div>

            </div>
            <About />
            <Shop />
        </div>
        
    )
}
