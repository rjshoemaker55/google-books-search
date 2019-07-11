import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


function Index() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Saved() {
  return <h2>Saved Books</h2>
}

class Navi extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to='/'>Google Books Search</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link as={Link} to='/about'>About</Nav.Link>
                <Nav.Link as={Link} to='/saved'>Saved Books</Nav.Link>
              </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search Books" className="mr-sm-2" />
              <Button onClick={this.searchSubmit} variant="outline-info">Go</Button>
            </Form>
          </Navbar>

          <Route path='/' exact component={Index} />
          <Route path='/about' exact component={About} />
          <Route path='/saved' exact component={Saved} />

        </div>
      </Router>
    )
  }
}

export default Navi;

