import React, { Component } from 'react';
import Header from './HeaderComponent';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {actions} from 'react-redux-form'


const mapStatetoProps = props =>{
    return{
        skills : props.skills,
        certificates : props.certificates
    }
}

 const mapDispachtoProps = (dispatch) =>({
    resetform : ()=> {dispatch(actions.reset('contactform'))}
 })

 

class Main extends Component {


    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="App">
             <Header skills={this.props.skills}  certificates={this.props.certificates} resetform={this.props.resetform}/>
            </div>
        );
    }
}


export default withRouter(connect(mapStatetoProps, mapDispachtoProps)(Main));