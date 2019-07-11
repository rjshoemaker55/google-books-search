import React, { Component } from 'react';

class BookCard extends Component {

  render() {
    return (
      <div className="card flex-row flex-wrap">
      <div className="card-header border-0" style={{ width: '20%' }}>
          <img src={this.props.thumbnail} alt="" style={{ width: '100%' }}/>
      </div>
      <div className="card-block px-2" style={{ marginTop: '10px', width: '80%' }}>
          <h4 className="card-title">{this.props.title}</h4>
          <h6 className="card-text">{this.props.authors}</h6>
          <p className="card-text">{this.props.description}</p>
          <a href={this.props.link} className="btn btn-primary">Visit on Google Books</a>
      </div>
      <div className="w-100"></div>
      </div>
    )
  }
}

export default BookCard;