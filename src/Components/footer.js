import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class Footer extends Component {  
  render() {
      return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="bottom" className="footer">
                <Navbar.Brand href="#home">
                    <Row>
                        <Col>
                            <center>
                                <small><b>Developement by: </b> Elio Neto</small>
                            </center>
                        </Col>
                        <Col className="mr-sm-2" >
                            <center>
                                <small>2019</small>
                            </center>
                        </Col>
                        <Col>
                            <center>
                                <Button variant="outline-info" href="https://github.com/ElioNeto/getMovies" target="_blank">GitHub</Button>
                            </center>
                        </Col>
                    </Row>
                </Navbar.Brand>
            </Navbar>
            </div>
      )
  }
}
  export default Footer