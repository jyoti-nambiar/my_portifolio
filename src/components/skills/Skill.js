import React from 'react'

function Skill() {
    return (
        
            <div class="container-fluid py-5" id="skill">
        <div class="container">
            <div className="about-div">
            <h1 id="outline-Text">Skills</h1>
            <h2 id="heading-text">My Skills</h2>
        </div>
        <div class="container-fluid py-4" id="skill">
                    <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="skill mb-4">
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-bold">HTML</h6>
                            <h6 class="font-weight-bold">95%</h6>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="95" style={{width: "95% "}} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="skill mb-4">
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-bold">CSS</h6>
                            <h6 class="font-weight-bold">85%</h6>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="85" style={{width: "85% "}} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="skill mb-4">
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-bold">PHP</h6>
                            <h6 class="font-weight-bold">90%</h6>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" style={{width: "90% "}} aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="skill mb-4">
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-bold">Javascript</h6>
                            <h6 class="font-weight-bold">90%</h6>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="90" style={{width: "90% "}} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="skill mb-4">
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-bold">React JS</h6>
                            <h6 class="font-weight-bold">95%</h6>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="95" style={{width: "95% "}} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="skill mb-4">
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-bold">Wordpress</h6>
                            <h6 class="font-weight-bold">85%</h6>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-info" role="progressbar" aria-valuenow="85" style={{width: "85% "}} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
    )
}

export default Skill
