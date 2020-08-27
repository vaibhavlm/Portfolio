import React, { useState, useRef } from 'react';
import {NavbarToggler, Collapse} from 'reactstrap';
import Home from './HomeComponent';
import Aboutme from './AboutmeComponent'
import Certificate from './CertificateComponent';
import Contact from './ContactComponent';
import Hobbies from './HobbiesComponent';

const Header = (props)=>{
     const contact = useRef(null);
      const[isNav, toggleNav] = useState(false);

  return(
      <React.Fragment>
        
          <nav className="navbar bg-light site-navbar navbar-expand-sm fixed-top" >
           <div className="container">
               <a className="navbar-brand" href="#home">Portfolio</a>
               <NavbarToggler onClick={()=> toggleNav(!isNav)} />
               <Collapse isOpen={isNav} navbar>
               <ul class="navbar-nav mr-auto">
                <li class="nav-item active"><a class="nav-link" href="#home">Home</a></li>
                <li class="nav-item "><a class="nav-link" href="#aboutme">Aboutme</a></li>
                <li class="nav-item "><a class="nav-link" href="#certi"> Certification</a></li>
                <li class="nav-item "><a class="nav-link" href="#contact"> ContactMe</a></li>
              </ul>
              </Collapse>
           </div>
          </nav>
      
   
      <div id="home">
         <Home />
      </div>

      <div id="aboutme">
          <Aboutme  skills={props.skills} contactRef={contact} />
      </div>

      <div id="certi">
         <Certificate certificates={props.certificates} />
      </div>
      
      <div id="hobbies">
          <Hobbies />
      </div>
      
      <div id="contact" ref={contact}>
         <Contact resetform={props.resetform}  />
      </div>
      </React.Fragment>

  );
    
}


export default Header;