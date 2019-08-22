import React from 'react'
import firebase from '../firebase'
import Alert from 'react-bootstrap/Alert'
import Header from '../Components/header'
import Footer from '../Components/footer';

class Welcome extends React.Component {
  constructor() {
    super()
    this.state = {
     msg: 'Aguarde...',
     status: 'Welcome to getMovie'
    }
  }

  componentDidMount(){
    const getStatus = firebase.database().ref('statusView')
    getStatus.on('value', (snapshot) => {
        let postStatus = snapshot.val()
        this.setState({status: postStatus})
    }) 
    const getMsg = firebase.database().ref('msgView')
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
        <Footer/>
      </div>
    )
  }
}
export default Welcome