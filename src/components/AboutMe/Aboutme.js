import React from 'react';
import laptopPic from '../../Images/myLaptopPic.jpg';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Aboutme() {
    return (
        
    <Container>
       
        <div className="container py-5" id="about-me">
            <div className="container">
        

                <Row>   
                <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1 className="display-1 text-uppercase text-white" style={{webkitTextStroke: "1px #dee2e6"}}>About</h1>
                        <h1 className="position-absolute text-uppercase text-primary">About me</h1>
                    </div>
                
                    </Row>

                    <Row>
                        <div className="grid-container">
                                <Image className="myLaptopPic" src={laptopPic} />
                                    <div className="about-me-div" >
                                        <h3>Web Developer</h3>
                                            <p className="short-intro">
                                                I am a Web-development student, with experience working across full-stack of software development. I have built few projects by myself and looking for a role where I can learn and grow from other experienced team members.
                                            </p>
                                                <div className="container-fluid py-10" id="skill">
                                                    <div className="row align-items-center">
                                                        <div className="col-md-10">
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
                                
                            
                        </Row> 
            </div>   
         </div>          
    </Container>
      
       
    )
}

export default Aboutme
