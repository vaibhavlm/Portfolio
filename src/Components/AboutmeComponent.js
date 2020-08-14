import React from 'react';
import { Media, Progress, Card, CardTitle, CardText, CardSubtitle, Button } from 'reactstrap';
import vaibh from "../images/vaibh.png";
import ProtoTypes from 'prop-types';




function RenderSkill({ skills }) {

    const renderskill = skills.map((skill) => {
        return (
            <ul className="list-unstyled" key={skill.id}>
                <li className="skill-name">{skill.name}</li>
                <li><Progress color="secondary" value={skill.percent} /></li>
            </ul>
        );
    });
    return (
        <>
            {renderskill}
        </>
    );
}

function Aboutme(props) {
    return (
        <section id="about-me">
            <section className="site-section">
                <div className="container">
                    <div className="row pt-5 align-items-center">
                        <div className=" col-12 col-md-6 pr-lg-5 mb-5 mb-lg-0">
                            <Media >
                                <Media left middle>
                                    <Media height="670px" width="400px" object src={vaibh} alt="vaibhav sinha" className="img-fluid thumbnail d-flex" />
                                </Media>
                            </Media>
                        </div>
                        <div className=" col-12 col-md-6 pl-lg-0">
                            <div className="section-heading">
                                <h2>About <strong>Me</strong></h2>
                            </div>

                            <p className="bio">A Highly Motivated and passionate Individual . A Team Worker, complaisant in
                            accepting challenges. Always ready to learn new things, nice and authentic.
                            Always Inclined towards Tech. Always try to do my best in any work assigned and always
                            try to be appreciated as well-performer.</p>
                            <p className="pt-4 mt-0">
                                <Button onClick={()=> {
                                    console.log(props.contactRef.current);
                                    let node = props.contactRef.current;
                                    window.scrollTo({
                                        top:node.offsetTop,
                                        behavior: "smooth"
                                    });
                                }} className="btn btn-primary px-4 py-2 mr-1 mb-1 mb-md-0 btn-sm smoothscroll">Contact Me</Button>
                                <a href="https://drive.google.com/file/d/1t5mlILBwjsWjp4BChypZ2AiKd0LeW3MN/view?usp=sharing" className="btn btn-secondary px-4 py-2 btn-sm">Download CV</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5 section-heading">
                            <h2>Education</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6" data-aos="fade-right"  data-aos-duration="300">
                            <Card className="education mb-4">
                                <span className="date"><span className="fa fa-calendar"></span> August 2017 - Present</span>
                                <CardTitle className="course">Bachelors of Technology (Information Technology)</CardTitle>
                                <CardText>
                                    <p>CGPA - 8.3</p>
                                    <CardSubtitle className="school"><p>Maharaja Agrasen Intitute of Technology <br /> GGSIPU</p></CardSubtitle>
                                    <p className="city">Rohini, New Delhi</p>
                                </CardText>
                            </Card>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-12 col-md-6" data-aos="fade-left"  data-aos-duration="300">
                            <Card className="education mb-4">
                                <span className="date"><span className="fa fa-calendar"></span> April 2016 - April-2017</span>
                                <CardTitle className="course">Senior Secondary</CardTitle>
                                <CardText>
                                    <p>Percent- 93%</p>
                                    <CardSubtitle><p>Gurukul Academy</p></CardSubtitle>
                                    <CardText><p>Lucknow, UP</p></CardText>
                                </CardText>
                            </Card>
                        </div>
                    </div>

                    <div className="row">
                        <div className=" col-12 col-md-6" data-aos="fade-right"  data-aos-duration="300">
                            <Card className="education mb-5">
                                <span className="date"><span className="fa fa-calendar"></span> April 2014 - April 2015</span>
                                <CardTitle className="course">Secondary</CardTitle>
                                <CardText>
                                    <p>Percent- 93%</p>
                                    <CardSubtitle><p>Gurukul Academy</p></CardSubtitle>
                                    <CardText><p>Lucknow, UP</p></CardText>
                                </CardText>
                            </Card>
                        </div>
                    </div> 

                    <div className="row mt-5 skills-section" data-aos="zoom-in" data-aos-duration="300">
                        <div className="col-12" >
                            <div className="section-heading ">
                                <h2 className=" pb-5">My <strong>SKILLS</strong></h2>
                            </div>
                            <div className="skills">
                                <RenderSkill skills={props.skills} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );

}


export default Aboutme;

Aboutme.ProtoTypes = {
    contactRef : ProtoTypes.object
}