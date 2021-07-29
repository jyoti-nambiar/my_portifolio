import React from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Typical from 'react-typical'
import Image from 'react-bootstrap/Image'
import mypic from '../../Images/MyPic.jpg'
import './Header.css';


function Header() {
    return (
        
        <Container className="header-container" id="header" fluid>

<Row>
    <Col className="col" lg="auto"><h1>Hi, I am <br /></h1>
                <h2>Jyoti Nambiar</h2>           
                <p classname="typedText">I am a {' '}

                    <Typical
                            steps={['Web-developer 👩‍💻', 2000,
                            'Daughter 💃', 2000,
                            'Mother 👩‍👦',2000]}
                            loop={Infinity}
                            wrapper="p"
                        />

                </p>

                <Router>
                <Link className="link-button" to="files/Frontend_Developer-Jyoti_Nambiar-CV.pdf" target="_blank" download  >Download CV</Link>
                </Router></Col>
    <Col  className="col" lg="auto"> <Image className="myImg" src={mypic} roundedCircle /></Col>
  </Row>


        </Container>

       

                
            )
        
          
}

export default Header