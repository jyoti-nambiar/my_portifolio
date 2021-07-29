import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import About from './components/AboutMe/Aboutme';
import Skill from './components/skills/Skill';
import Education from './components/Education/Education'
import Porfolio from './components/Portfolio/Portfolio'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
     

<Header />
<About />
<Skill />
<Education />
<Porfolio /> 
<Footer />
     
      
     
     
     
    </div>
  );
}

export default App;
