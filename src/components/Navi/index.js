import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import Results from '../../pages/Results';
import Home from '../../pages/Home';

class Navi extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      searchResults: []
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchInput: e.target.value });
  }

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
              <FormControl 
                type="text" 
                placeholder="Search Books" 
                className="mr-sm-2" 
                value={this.state.searchInput} 
                onChange={this.handleChange}
              />
              <Button 
                onClick={(e) => this.props.searchSubmit(e, this.state.searchInput)} 
                variant="outline-info">
                Go
              </Button>
            </Form>
          </Navbar>

          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={Results} />
          <Route path='/saved' exact component={Results} />

        </div>
      </Router>
    )
  }
}

export default Navi;

