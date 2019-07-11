import React, { Component } from 'react';
import BookCard from '../../components/BookCard';

class Results extends Component {

  render() {
    return (
      <>

      <div className='container'>
        <div className='row'>
          <h1>Results</h1>
        </div>
        <div className='row'>
          <div className='col-sm-12'>

            {this.props.searchResults.map(result => (
              <BookCard 
                key={result.id}
                thumbnail={result.volumeInfo.imageLinks.thumbnail}
                title={result.volumeInfo.title}
                authors={result.volumeInfo.authors}
                description={result.volumeInfo.description}
                link={result.volumeInfo.infoLink}
              />
            ))};

          </div>
        </div>
      </div>

        <h1>Results</h1>

        
      </> 
    )
  }
}

export default Results;
