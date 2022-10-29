import {Navbar, Container, Nav} from "react-bootstrap";
import {useState, useEffect} from "react-bootstrap";
import { default as logo } from '../src/img/logo.svg';
import navIcon1 from '../src/img/nav-icon1.svg';
import navIcon2 from '../src/img/nav-icon2.svg';
import navIcon3 from '../src/img/nav-icon3.svg';


<div><logo fill="blue" width="100%" height="100%" /></div>




export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() =>{
        const onScroll = () => {
            if (window.scrollY> 50){
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll", onScroll);
    }, [])
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
        return (
            <Navbar expand="lg" classNaame={scrolled ? "scrolled": ""}>
              <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt = "logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <span className="navbar-toggle-icon"></span>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills"className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects"className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav >
                    <span className ="navbar-text">
                        <div classNam="social-icon">
                        <a href="/#"><img src={navIcon1} alt="" /></a>
                        <a href="/#"><img src={navIcon2} alt="" /></a>
                        <a href="/#"><img src={navIcon3} alt="" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span> Let's connect</span>/</button>
                    </span>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
    }
 

