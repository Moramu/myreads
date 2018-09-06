import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

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
        <div key={index} className="shelf-name">
        <b>{shelf.name}</b>
        <ListBooks
          books={books.filter(book => book.shelf === shelf.id)}
          shelfs={shelfs}
          onShelfUpdate={onShelfUpdate}
        />
        </div>
      ))}
      </div>
		)
	}
}
export default ListShelfs