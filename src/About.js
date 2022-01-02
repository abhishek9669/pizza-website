import React from 'react'

export default function About() {
    return (
        <div className="about">
            <div className="container">
               <div className="row">
                   <div className="col-6 a_p">
                   <h3>About Us</h3>
                <h1>WELCOME TO MAESTRO PIZZINI</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi deserunt consequatur, sunt dolor quam est fugiat quidem quibusdam ratione! 
                </p>
                <div className="about_btn">
                    <a href="" className="btn btn-smart">
                        READ MORE
                    </a>
                </div>
                   </div>
                   <div className="col-6">
                       <div className="about_img">
                       <img src="/img/pizza.jpg" alt="" />
                       </div>

                   </div>
               </div>

            
            </div>

        </div>
        
    )
}

