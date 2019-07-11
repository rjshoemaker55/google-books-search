import React, { Component } from 'react';
import Navi from './components/Navi';
import Results from './pages/Results';

import API from './utils/API'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    }

    this.searchSubmit = this.searchSubmit.bind(this);
  }

  searchSubmit(e, searchInput) {
    e.preventDefault();
    API.searchBooks(searchInput)
      .then(res => {
        if (res.data.status === 'error') {
          throw new Error(res.data.message);
        }
        this.setState({ searchResults: res.data.items, error: '' }, () => {
          console.log(this.state.searchResults)
        })
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <>
        <Navi 
          searchSubmit={this.searchSubmit}
        />
        <Results 
          searchResults={this.state.searchResults}
        />
      </>
    );
  }
}

export default App;
