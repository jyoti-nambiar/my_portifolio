import React from 'react'
import Card from 'react-bootstrap/Card'
function Portfolio() {
    return (
        
           <div className="container-fluid pt-5 pb-3" id="portfolio">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase">My Work</h1>
                            </div>
           
            <div className="row portfolio-container">
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Shopping-cart App</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">HTML, CSS/SCSS, Javascript</Card.Subtitle>
                        <Card.Text>
                        A vanilla Javascript project for a shopping cart app, Includes CRUD operations for both product list and items in cart. The shopping can be completed and a pdf invoice can be downloaded.    </Card.Text>
                        <Card.Link href="https://jyoti-nambiar.github.io/Shopping-Cart-Project/">Shopping-cart-app</Card.Link>
                        <Card.Link href="https://github.com/jyoti-nambiar/Shopping-Cart-Project.git" >Github Repositry</Card.Link>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                    <div className="position-relative overflow-hidden mb-2">
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Budget Calculator</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">HTML, CSS, Javascript</Card.Subtitle>
                            <Card.Text>
                            A Budget calculator , where you can add in your Income with a '+' selection and Expenses with a '-' selction and view the savings you have for the month.
                            </Card.Text>
                            <Card.Link href="https://jyoti-nambiar.github.io/The-Budget-App/">Budget App</Card.Link>
                            <Card.Link href="https://github.com/jyoti-nambiar/The-Budget-App.git">Github Repositry</Card.Link>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                    <div className="position-relative overflow-hidden mb-2">
                    <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Simon Game</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">HTML, CSS, Javascript</Card.Subtitle>
                        <Card.Text>
                        A Game which test your memory in long run, Just click following the blinked color and always remember the color which was previously blicked.Play as long as you can remember the sequence of blink.
                        </Card.Text>
                        <Card.Link href="https://jyoti-nambiar.github.io/Simon-Game/">Budget App</Card.Link>
                        <Card.Link href="https://github.com/jyoti-nambiar/Simon-Game.git">Github Repositry</Card.Link>
                    </Card.Body>
                    </Card>
                    </div>
                </div>
               

                <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                    <div className="position-relative overflow-hidden mb-2">
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Reactjs-StarWar-App</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Reactjs, Tailwind-CSS</Card.Subtitle>
                            <Card.Text>
                            A React application to call Swapi API to display Starwar characters and more details on clicking the characters names. You can search for a particular character in the search bar. 
                            </Card.Text>
                            <Card.Link href="https://starwarheros.netlify.app/">Starwar-App</Card.Link>
                            <Card.Link href="https://github.com/jyoti-nambiar/starwarWebApp.git">Github Repositry</Card.Link>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                    <div className="position-relative overflow-hidden mb-2">
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Service-Booking-App</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Reactjs, Tailwind-CSS, Strapi(backend), Stripe-Payment-solution (3rd-party-integration), Heroku deployment</Card.Subtitle>
                            <Card.Text>
                            A Reactjs application. It provides User-Authentication, Authorization , Booking cleaning services, Services booked by user under My-bookings, Payment-solutions with Stripe(VISA/MASTER card). Login using two dummy users(admin/ user) with the same username and password as the role(admin/user)
                            </Card.Text>
                            <Card.Link href="https://spikspan-app.herokuapp.com/">Spik&Span-App</Card.Link>
                            <Card.Link href="https://github.com/jyoti-nambiar/BookingApp2021.git">Github Repository</Card.Link>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                    <div className="position-relative overflow-hidden mb-2">
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>React-Photo-Search-App</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Reactjs, Deplyed on AWS Amplify</Card.Subtitle>
                            <Card.Text>
                            React photo search application , which calls the images from Unsplash-API matching the keyword types in the search box.
                            </Card.Text>
                            <Card.Link href="https://main.d1tjngmf6ie63f.amplifyapp.com/">Photo-Search App</Card.Link>
                            <Card.Link href="https://github.com/jyoti-nambiar/ReactPhotoSearchApp.git">Github Repository</Card.Link>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
                
            </div>
        </div>
        </div>   
        
    )
}

export default Portfolio
