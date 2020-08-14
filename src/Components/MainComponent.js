import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Aboutme from './AboutmeComponent'
import Certificate from './CertificateComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import Contact from './ContactComponent';


const mapStatetoProps = props =>{
    return{
        skills : props.skills,
        certificates : props.certificates
    }
}

class Main extends Component {


    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="App">
             <Header skills={this.props.skills}  certificates={this.props.certificates}/>

            </div>
        );
    }
}


export default withRouter(connect(mapStatetoProps)(Main));