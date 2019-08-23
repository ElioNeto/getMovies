import React, { Component } from 'react';
import firebase from '../firebase';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Header from '../Components/header';
import Footer from '../Components/footer';
import Alert from 'react-bootstrap/Alert'


class ToDo extends Component {

  constructor() {
    super();
    this.state = {
      tasksObj: [],
      title: '',
      original: '',
      year: '',
      description: '',
      link: '',
      msg: 'Wait...',
     status: 'Welcome to getMovie'
    }
    this.complete = this.complete.bind(this);
    this.failure = this.failure.bind(this);
  }

  complete(itemId) {
    const itemRef = firebase.database().ref(`/ToDo/${itemId}`);
    itemRef.once('value', (snapshot) => {
        //Envia Os dados para a tabela Done
        let objective = snapshot.val()
        const postDone = firebase.database().ref('Done')
        const updateObjective = { 
            title: objective.title,
            original: objective.original,
            year: objective.year,
            description: objective.description,
            link: objective.link
        }
        postDone.push(updateObjective);
    })
    /* **************************************************** */
        //Finalmente Remove os dados da tabela ToDo
    const removeTask = firebase.database().ref(`/ToDo/${itemId}`);
    removeTask.remove();
    window.location.reload();
  }

  failure(itemId){
    const itemRef = firebase.database().ref(`/ToDo/${itemId}`);
    itemRef.once('value', (snapshot) => {
        //Envia Os dados para a tabela Done
        let objective = snapshot.val()
        const postDone = firebase.database().ref('Failure')
        const updateObjective = { 
            title: objective.title,
            original: objective.original,
            year: objective.year,
            description: objective.description,
            link: objective.link
        }
        postDone.push(updateObjective);
    })
    /* **************************************************** */
        //Finalmente Remove os dados da tabela ToDo
    const removeTask = firebase.database().ref(`/ToDo/${itemId}`);
    removeTask.remove();
    window.location.reload();
  }
  
  componentDidMount() {
    const itemsRef = firebase.database().ref('ToDo');
    itemsRef.on('value', (snapshot) => {
      let tasks = snapshot.val();
      let newState = [];
      for (let task in tasks) {
        newState.push({
          id: task,
          description: tasks[task].description,
          link: tasks[task].link,
          original: tasks[task].original,
          title: tasks[task].title,
          year: tasks[task].year   
        });
      }
      this.setState({
        tasksObj: newState
      });
    });
    const getStatus = firebase.database().ref('ToDo_STATUS')
    getStatus.on('value', (snapshot) => {
        let postStatus = snapshot.val()
        this.setState({status: postStatus})
    }) 
    const getMsg = firebase.database().ref('ToDo_MSG')
    getMsg.on('value', (snapshot) => {
        let postMsg = snapshot.val()
        this.setState({msg: postMsg})
    })    
  }
  render() {
    const status = this.state.status
    const mensagem = this.state.msg
    return (
      <div>
        <Header/>
        <br></br>
        <Alert variant="info">
          <Alert.Heading>{status}</Alert.Heading>
          <p className="mb-0">{mensagem}</p>
        </Alert>
        <Row>
        <Container>
            <h2>My Requests</h2>
          <Row>
            {this.state.tasksObj.map((task) => {
                return (
                  <Row>
                    <Col>
                      <Card border="info">
                        <Card.Header><b>Title: </b>{task.title}</Card.Header>
                        <Card.Body> 
                            <Card.Title>Original Title: {task.original} - {task.year}</Card.Title>
                            <Card.Text>Description: {task.description}</Card.Text>
                            <Card.Text><center>Link to Download: <Button variant="outline-info" href={task.link} target="_blank">Click Me</Button></center></Card.Text>
                            <Card.Text>
                                <center>
                                <Button variant="outline-secondary" onClick={() => { if (window.confirm('Done?'))this.complete(task.id)}}>Done</Button> &nbsp;&nbsp;&nbsp;
                                <Button variant="outline-secondary" onClick={() => { if (window.confirm('This is End Game?'))this.failure(task.id)}}>Failure</Button>
                                </center>
                            </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <br></br>
                  </Row>
                  
                )
              })
            }      
          </Row>
        </Container>
        </Row> 
        <br></br>
        <Footer/>  
      </div>          
    );
  }
}
export default ToDo;