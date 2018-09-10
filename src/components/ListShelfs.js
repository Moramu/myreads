import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'
import { Link } from 'react-router-dom'

class ListShelfs extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfs: PropTypes.array.isRequired,
    onShelfUpdate: PropTypes.func.isRequired
  }

 

  render() {
    const { books,shelfs,onShelfUpdate } = this.props
    

    return(
      <div className="shelfs">
      {shelfs.map((shelf,index) => (
        <div key={index} className="shelf">
          <div className="shelf-title">
            <b>{shelf.name}</b>
          </div>
        <ListBooks
          books={books.filter(book => book.shelf === shelf.id)}
          shelfs={shelfs}
          onShelfUpdate={onShelfUpdate}
        />
        </div>
      ))}
      <div className="search-book">
        <Link className="search-book" to="/search"></Link>
      </div>
      </div>
    )
  }
}
export default ListShelfs