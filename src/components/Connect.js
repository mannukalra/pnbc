import React, {Component} from 'react';
import {Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Connect.scoped.css";

class Connect extends Component{

    constructor() {
        super();
        this.state = {
            name: "",
            contact: "",
            query: ""
        }
    }

    triggerMail = (subject, body) =>{
        console.log("trigger mail called!")
        window.sendEmail(subject, body);  
        setTimeout(function(){ 
            this.setState({name: "", contact: "", query: ""});
            this.props.hideConnect();
        }.bind(this), 300);
        
    }

    enquire = () => {
        console.log("inside enquire");
        if(this.state.name && this.state.contact){
            let subject = this.state.name+" wants to connect with PNBC!"
            let body = "Dear PNBC,<br><br>Please reach out "+this.state.name+" at "+this.state.contact+" regarding below query:<br>"+(this.state.query || "Sorry, empty query!!")
            this.triggerMail(subject, body);
        }else{
            console.log("invalid input");
            alert("Invalid Input. \n Please provide at least Name and Contact (Phone number or Email address)!")
        }
    }

    onChangeName = (event) => {
        this.setState({ name: event.target.value });
    }
    onChangeContact = (event) => {
        this.setState({ contact: event.target.value });
    }
    onChangeQuery = (event) => {
        this.setState({ query: event.target.value });
    }
    render(){
        return (
            <Container fluid className="container">
                <br/>
                <Label className="label-text" style={{marginTop: "5rem"}}>
                    Get in touch for queries or estimates
                </Label>
                <br /><br/>
                <Form>
                    <FormGroup className="input-grid">
                    <Label className="label-text">Name *</Label>
                    <Input className="input-text"
                        onChange={(e) => { this.onChangeName(e) }}
                        value={this.state.name}
                        placeholder="your name"
                    />
                    <br />
                    </FormGroup>
                    <FormGroup className="input-grid">
                    <Label className="label-text">Contact *</Label>
                    <Input className="input-text"
                        onChange={(e) => { this.onChangeContact(e) }}
                        value={this.state.contact}
                        placeholder="phone number or email address"
                    />
                    <br />
                    </FormGroup>
                    <FormGroup className="input-grid">
                    <Label className="label-text">Message</Label>
                    <Input name="text" type="textarea" className="input-text" style={{height: "12rem" }}
                        onChange={(e) => { this.onChangeQuery(e) }}
                        value={this.state.query}
                        placeholder="query or description"
                    />
                    <br />
                    </FormGroup>
                    <br />
                    <Button style={{marginBottom:"1rem", height:"3rem", width:"12rem"}} className="label-text" onClick={this.enquire}>Enquire</Button>
                </Form>
            </Container>
        );
    }
}

export default Connect