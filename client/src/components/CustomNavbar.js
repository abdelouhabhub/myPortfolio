import { useEffect, useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import profileAvatar from '../assets/images/profileAvatar.png';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../../assets/logo.svg';
// import logo from '../../assets/logo.svg';
// import logo from '../../assets/logo.svg';


const CustomNavbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {    
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }
    , []);


    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


    return (
    <Navbar bg="dark" variant="dark" expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
        <Navbar.Brand href="#home">
            <img src={profileAvatar} width="30" height="30" className="d-inline-block align-top" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>

                <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>

                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>

                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>

                <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                <a href="your-social-link" className="social-icon-link" src={profileAvatar}>Social Link 1</a>
                            <a href="your-social-link" className="social-icon-link" src={profileAvatar}>Social Link 2</a>
                            <a href="your-social-link" className="social-icon-link" src={profileAvatar}>Social Link 3</a>
                </div>
                <button className="vvd" onClick={() => console.log('connect')}/><span>Let's Connect</span>
            </span>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}


export default CustomNavbar;