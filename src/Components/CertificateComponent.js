import React from 'react';
import { Card, CardTitle, CardSubtitle, CardBody, CardText } from 'reactstrap';
import Footer from './FooterComponent'
import certiphoto from '../images/certificate.png';


function RenderCertificate({certificates}){
    const rendcer = certificates.map((certificate)=>{
       return(
       <div key={certificate.id} className="col-12 col-md-6 py-2" data-aos="fade-left">
            <Card className="certificate">
                <CardBody className="text-center card-header" >
                    <i className="certificate-icon"><img className="thumbnail" height="40px" src={certiphoto} alt="certi"/></i>
                    <CardTitle className="certificate-name">{certificate.name}</CardTitle>
                    <CardSubtitle><p>{certificate.source}</p></CardSubtitle>
                
                <CardText><a className="certificate-link" href="#">Certificate Link <i className=" fa fa-chevron-right"></i> </a></CardText>
                </CardBody>
            </Card>
        </div>
        );
    });

    return(
    <div className="row justify-content-center">
            {rendcer}  
    </div>
    );
}


function Certificate(props) {
    return (
        <section className="site-section sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 m-1 py-5">
                        <div className="section-heading">
                            <h2>My<strong> Certifications</strong></h2>
                        </div>
                    </div>
                </div>
                <RenderCertificate certificates={props.certificates} />
            </div>
        </section>
    );
}

export default Certificate;