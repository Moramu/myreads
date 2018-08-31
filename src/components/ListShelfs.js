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
  		booksAPI.update(book,shelf).then(
                this.setState((state) => ({
                    books: state.books.map(b => {
                        b.shelf = shelf
                        //console.log(b)
  				 return b
  					})
                }))
        )
  	}

	render() {
		const { books } = this.state
		const onShelfUpdate = this.onShelfUpdate
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
					{/*{console.log({shelf})}	*/}
					<b>{shelf.name}</b>
						{<ListBooks 
							books={shelf.books}
							shelfs={shelfs.map((shelf) => shelf.name)}
							onShelfUpdate={onShelfUpdate}
						/>}
						
					</div>
					))}
			</div>
		)
	}
}
export default ListShelfs