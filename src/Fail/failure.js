import React, { Component } from 'react'
import firebase from '../firebase'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Header from '../Components/header'
import Footer from '../Components/footer';

class Failure extends Component {

  constructor() {
    super()
    this.state = {
      tasksObj: [],
      task: '',
      title: "",
      status: "Wait..." 
    }
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('Fail')

    itemsRef.on('value', (snapshot) => {
      let tasks = snapshot.val()
      let newState = []
      for (let task in tasks) {
        newState.push({
          id: task,
          title: tasks[task].title,    
        })
      }
      this.setState({
        tasksObj: newState
      })
    })

    const getStatus = firebase.database().ref('failStatus')
    getStatus.on('value', (snapshot) => {
        let postStatus = snapshot.val()
        this.setState({status: postStatus})
    }) 
    const getMsg = firebase.database().ref('failMsg')
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
            <Col sm={11}>
            {this.state.tasksObj.map((task) => {
                return (
                    <ListGroup variant="flush">
                        <ListGroup.Item  >
                        <Row>
                            <Col sm={6}>
                              {task.title}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                  </ListGroup>
                 )
                })
              } 
              </Col>
              </Row> 
              <br></br>  
              <Footer/>  
      </div>          
    )
  }
}
export default Failure