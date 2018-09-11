import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListShelfs from './components/ListShelfs'
import SearchBooks from './SearchBooks'
import * as booksAPI from './utils/BooksAPI' 




class Library extends Component {

	state = {
    	books: []
	}

	componentDidMount() {
    	booksAPI.getAll().then((books) => {
      		this.setState({books})
    	})
  	}

  onShelfUpdate  = (book, shelf) => {
  booksAPI.update(book, shelf).then(() => {
    book.shelf = shelf
    this.setState(previousState => ({
      books: previousState.books.filter(b=> b.id !== book.id).concat([book])
    }))
    })
  }

	render() {
    const shelfs = [
        {
        "id":"read",
        "name":"Read"
      },
      {
        "id":"currentlyReading",
        "name":"Currently Reading"
      },
      {
        "id":"wantToRead",
        "name":"Want to Read"
      }
      ]

		const { books } = this.state
		const onShelfUpdate = this.onShelfUpdate
		return (
			<div className="library">
			<Route exact path="/" render={()=>(
				<ListShelfs 
					books={books}
					shelfs={shelfs}
					onShelfUpdate={onShelfUpdate}
			/>
			)}/>

			<Route exact path="/search" render={()=>(
				<SearchBooks />
			)}/>
			</div>
		)
	}
}

export default Library