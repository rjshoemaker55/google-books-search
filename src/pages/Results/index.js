import React, { Component } from 'react';

class Results extends Component {

  render() {
    return (
      <>
        <h1>Results</h1>

        {this.props.searchResults.map(result => (
          <p>{result.volumeInfo.title}</p>
        ))};
      </> 
    )
  }
}

export default Results;