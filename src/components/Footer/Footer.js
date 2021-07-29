import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
function Footer() {
    return (
        
             <div className="container-fluid bg-primary text-white mt-5 py-1 px-sm-1 px-md-5">
        <div className="container text-center py-5">
            <div className="d-flex justify-content-center mb-4">
                
                <a className="btn btn-light btn-social mr-2" href="https://github.com/jyoti-nambiar"><i className="fab fa-github"></i></a>
                <a className="btn btn-light btn-social mr-2" href="https://www.linkedin.com/in/jyoti-nambiar-39070719a"><i className="fab fa-linkedin-in"></i></a>
                
            </div>
            <div className="d-flex justify-content-center mb-3">
                <a className="text-white" href="#">Privacy</a>
                <span className="px-3">|</span>
                <a className="text-white" href="#">Terms</a>
                <span className="px-3">|</span>
                <a className="text-white" href="#">FAQs</a>
                <span className="px-3">|</span>
                <a className="text-white" href="#">Help</a>
            </div>
            <p className="m-0">&copy; <a className="text-white font-weight-bold" href="#">jyotisCode</a>. All Rights Reserved. Designed by <a className="text-white font-weight-bold" href="#">jyotisCode</a>
            </p>
        </div>
    </div>
        
    )
}

export default Footer
