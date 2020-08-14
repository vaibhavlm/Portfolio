import React from 'react';
import {Row, Col, Label, Button, Carousel} from 'reactstrap';
import { Form, Errors, Control, LocalForm} from 'react-redux-form';
import Footer from './FooterComponent';

const handleSubmit = value =>{
    alert("User detail :" + JSON.stringify(value));
}

function Contact(){
    return(
        <section className="site-section" data-section="about">
        <div className="container">
            <div className="row">
            <div className="col-12 m-1 py-5 section-heading text-center">
               <h2>Get in <strong>Touch</strong></h2>
            </div>
            
            </div>
            <div className="row">
                    <div className="col-12 col-md-7">
                        <LocalForm onSubmit={(value)=> handleSubmit(value)}>
                            <h4 className="mb-5">Get In Touch</h4>
                            <Row className="form-group">
                             <Col md={12}>
                                <Label className="sr-only" htmlFor="name">Name</Label>
                                <Control.text model=".name" id="name" placeholder="Name" className="form-control"/>
                             </Col>
                            </Row>  
                            <Row className="form-group">
                             <Col md={12}>
                                <Label className="sr-only" htmlFor="email">Email</Label>
                                <Control.text model=".email" id="email" placeholder="Email" className="form-control"/>
                             </Col>
                            </Row>  
                            <Row className="form-group">
                             <Col md={12}>
                                <Label className="sr-only" htmlFor="mobno">Phone</Label>
                                <Control.text model=".mobno" id="mobno" placeholder="Phone No." className="form-control"/>
                             </Col>
                            </Row>  
                            <Row className="form-group">
                             <Col md={12}>
                                <Label className="sr-only" htmlFor="message">Message</Label>
                                <Control.textarea model=".message" id="message" placeholder="Message" rows="6" className="form-control"/>
                             </Col>
                            </Row> 
                            <Row className="form-group pt-3 ">
                             <Col md={12}>
                                <Button className="btn btn-primary py-3 px-4">Send Message</Button>
                             </Col>
                            </Row>   
                        </LocalForm>
                    </div>
                    <div className="col ml-md-5 pt-5 pt-md-0 details">
                        <h4>My Contact Details</h4>
                        <div className="det-list">
                        <ul className="list-unstyled">
                            <li><p className="det-heading">Email <i className="fa fa-envelope-o pl-1"></i></p>
                            <p className="det-data">vaibhavleoanto@gmail.com</p>
                            </li>
                            <li><p className="det-heading">Phone <i className="fa fa-phone pl-1"></i></p>
                            <p className="det-data">735552****  </p>
                            </li>
                            <li><p className="det-heading">Address <i className="fa fa-address-card pl-1"></i></p>
                            <p className="det-data">Flat No-510,<br/> Begumpur Rohini, <br/> New Delhi</p>
                            </li>
                        </ul>
                        </div>
                    </div>
            </div>
        </div>
        <div className="footer">
        <Footer />
        </div>
        </section>
    );
}

export default Contact;