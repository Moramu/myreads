import React, { Component } from 'react';
import * as booksAPI from '../utils/BooksAPI' 
import ListBooks from './ListBooks'

class ListShelfs extends Component {
	state = {
    	books: []
	}

	componentDidMount() {
    	booksAPI.getAll().then((books) => {
      		this.setState({books})
    	})
  	}

  	onShelfUpdate = (book,shelf) => {

  	}

	render() {
		const { books } = this.state
    	const shelfs = [
      		{
      			name: 'Read',
      			books: books.filter(book => book.shelf === 'read')
      		},
      		{
      			name: 'Current Reading',
      			books: books.filter(book => book.shelf === 'currentlyReading')
      		},
      		{
      			name: 'Want To Read',
      			books: books.filter(book => book.shelf === 'wantToRead')
      		}
      	
      	]

		return(
			<div className="list-shelfs">
				{shelfs.map((shelf,index) => (
					<div key={index} className="shelf">
					{shelf.name}
						{<ListBooks 
							books={shelf.books}
						/>}
						
					</div>
					))}
			</div>
		)
	}
}
export default ListShelfs