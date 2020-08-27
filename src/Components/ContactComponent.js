import React from 'react';
import {Row, Col, Label, Button} from 'reactstrap';
import {  Errors, Control, Form} from 'react-redux-form';
import Footer from './FooterComponent';
import * as emailjs from 'emailjs-com';

const required = (val)=>  val && val.length;
const isEmail = (val)=> /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const isNum = (val)=> !isNaN(Number(val));

const handleSubmit = (value, resetform) =>{
   
   const template={
     from_name: value.name,
       to_name: 'Vaibhav',
       message: JSON.stringify(value.message+". "+"Mobile no: "+ value.mobno)
}
  
  emailjs
  .send(
      "gmail",
      "goatleo",
       template,
       "user_gyiG7nKxuhNvcc2AGtyhX"
  ).then(()=>{ window.alert('sent')
  resetform()
})
   
}

function Contact(props){
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
                        <Form model="contactform" onSubmit={(value)=> handleSubmit(value, props.resetform)}>
                            <h4 className="mb-5">Get In Touch</h4>
                            <Row className="form-group">
                             <Col md={12}>
                                <Label className="sr-only" htmlFor="name">Name</Label>
                                <Control.text model=".name" id="name" placeholder="Name" className="form-control"
                                validators={{required}}/>
                                <Errors className="text-danger" model=".name" show="touched" messages={{
                                      required: "Required"
                                    }}/>
                             </Col>
                            </Row>  
                            <Row className="form-group">
                             <Col md={12}>
                                <Label className="sr-only" htmlFor="email">Email</Label>
                                <Control.text model=".email" id="email" placeholder="Email" className="form-control"
                                validators={{required, isEmail}}/>
                                <Errors className="text-danger" model=".email" show="touched" messages={{
                                      required: 'Required',  isEmail: 'Not a valid Email'
                                    }}/>
                             </Col>
                            </Row>  
                            <Row className="form-group">
                             <Col md={12}>
                                <Label className="sr-only" htmlFor="mobno">Phone</Label>
                                <Control.text model=".mobno" id="mobno" placeholder="Phone No." className="form-control"
                                validators={{required, isNum}}/>
                                <Errors className="text-danger" model=".mobno" show="touched" messages={{
                                      required: 'Required', isNum: 'Enter a Number'
                                    }}/>
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
                        </Form>
                    </div>
                    <div className="col ml-md-5 pt-5 pt-md-0 details">
                        <h4>My Contact Details</h4>
                        <div className="det-list">
                        <ul className="list-unstyled">
                            <li><p className="det-heading">Email <i className="fa fa-envelope-o pl-1"></i></p>
                            <p className="det-data">vaibhavleoanto@gmail.com</p>
                            </li>
                            <li><p className="det-heading">Phone <i className="fa fa-phone pl-1"></i></p>
                            <p className="det-data">7355520031</p>
                            </li>
                            <li><p className="det-heading">Address <i className="fa fa-address-card pl-1"></i></p>
                            <p className="det-data">MAIT,<br/> Begumpur Rohini, <br/> New Delhi</p>
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