import React from 'react';
import laptopPic from '../../Images/myLaptopPic.jpg';
import Image from 'react-bootstrap/Image'
import './AboutMe.css'

function Aboutme() {
    return (
        
    
        
        <div className="container py-5" id="about-me">
            <div className="container">
        
               
                <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1 className="display-1 text-uppercase text-blue">About me</h1>
                       
                    </div>
                
                  
                    <div class="container-fluid py-4" id="skill">
                    <div class="row align-items-center">
                <div class="col-lg-6">
                        
                                <Image className="myLaptopPic" src={laptopPic} />
                                </div>
                                <div class="col-lg-6">
                                    <div className="about-me-div" >

                                        <h3>Web Developer</h3>
                                            <p className="short-intro">
                                                I am a Web-development student, with experience working across full-stack of software development. I have built few projects by myself and looking for a role where I can learn and grow from other experienced team members.
                                            </p>
                                                <div className="container-fluid py-10" id="skill">
                                                    <div className="row align-items-center">
                                                        <div className="col-md-12">
                                                            <div className="detail-div">

                                                                <div>
                                                                <h6>
                                                                Name: </h6><span>Jyoti Nambiar</span>
                                                                </div>

                                                                <div>
                                                                    <h6>
                                                                Birthday: </h6><span>14 June 1990</span></div>
                                                
                                            
                                                                <div> <h6>
                                                                    Degree: </h6><span>Bachelors In Instrumentation Engineering</span>
                                                                </div>
                                                                <div> <h6>
                                                                Vocational Training: </h6><span>Full-stack development</span>
                                                                </div>
                                    
                                                                <div> <h6>
                                                                Phone: </h6><span>+46-0769768182</span>
                                                                </div>
                                    
                                                                <div> <h6>
                                                                    Email: </h6><span>jyotiarun2214@gmail.com</span>
                                                                    </div>
                                                        
                                                                <div> <h6>
                                                                    Address: </h6><span>Örbyslottsvägg 46, Älvsjö Stockholm-12571</span>
                                                                    </div>
                                                                    <div> <h6>
                                                                    Freelance: </h6><span>Available</span>


                                                                    </div>
                                                            </div>

                                
                                                        </div>
                                                    </div>
                                                </div>
                                    </div>
                                </div>
                                </div> 
                                </div>
                        
            </div>   
         </div>          
    
      
       
    )
}

export default Aboutme
