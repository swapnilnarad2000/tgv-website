import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';

import Image from 'react-bootstrap/Image';

import logo from '../Assets/Hotel-Gallery and Hero Images/tgv-logo.jpg'

import data from '../demo-data/hotel-data.json'

let hotelPrefix = data.config.name_prefix;
let hotelBrand = data.config.name_brand;

let NavbarSection = () => {
  const [overlay, setOverlay] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if(window.scrollY === 0){
      setOverlay(false);
    }
    else if (window.scrollY > lastScrollY) {
       // if scroll down hide the navbar
       setOverlay(true);
    } else { // if scroll up show the navbar
      setOverlay(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, controlNavbar]);


  return (
    <Navbar expand="lg" fixed="top" id="navbar" className={`${overlay ? "bg-body-tertiary navbar-block active" : "inactive"}`} data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" className="mx-auto">
          <div className='logo'>
            <div className='logo-img-image'>
              <Image src={logo} fluid className='logo-image' />
            </div>
            <div className='logo-text'>
              <div className='logo-text-pre-head'>{hotelPrefix}</div>
              <div className='logo-text-head'>{hotelBrand}</div>
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#services">Our Services</Nav.Link>
            <Nav.Link href="#testimony">Our Testimonials</Nav.Link>
            <Nav.Link href="#gallery">Our Gallery</Nav.Link>
            <Nav.Link href="#location">Locate Us</Nav.Link>
            <Nav.Link href="#review">Review Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




  )
}

export default NavbarSection;