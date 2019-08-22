import React, { Component } from 'react';
import firebase from '../firebase';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Header from '../Components/header';
import Footer from '../Components/footer';

class MyRequest extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      original: '',
      year: '',
      description: '',
      link: '',
      numberOfTasks: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('ToDo');
    const item = { 
       title: this.state.title,
       original: this.state.original,
       year: this.state.year,
       description: this.state.description,
       link: this.state.link
    }
    itemsRef.push(item);
    this.setState({
        title: '',
        original: '',
        year: '',
        description: '',
        link: ''
    });

    let numberOfTasks;
    const pullNumber = firebase.database().ref('todoCounter')
    pullNumber.once('value', function(snapshot) {
        numberOfTasks =  snapshot.val();
        numberOfTasks +=1;
        firebase.database().ref('todoCounter').set(numberOfTasks);
   });
  window.location.reload();
}
    render() {
      return (
        <div>
            <Header/>
        <Container>
        <div>
          <row>&nbsp;</row>
          <center>
            <h2>Request Movies</h2>
          </center>
          <row>&nbsp;</row>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                name="title" 
                onChange={this.handleChange} 
                value={this.state.title} 
                required
                />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Original Title</Form.Label>
              <Form.Control 
                name="original" 
                onChange={this.handleChange} 
                value={this.state.original} 
                />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Year of the movie</Form.Label>
              <Form.Control 
                name="year" 
                type="number"
                onChange={this.handleChange} 
                value={this.state.year} 
                />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                name="description" 
                onChange={this.handleChange} 
                value={this.state.description}
                />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Link to Download</Form.Label>
              <Form.Control 
                name="link" 
                onChange={this.handleChange} 
                value={this.state.link} 
                />
            </Form.Group>
              <Button variant="outline-info"  type="submit">
                Submit
              </Button>
          </Form>
            </div>
        </Container>  
        <br></br>
        <Footer/> 
        </div>          
      );
    }
  }
  export default MyRequest;