import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import ListShelfs from './components/ListShelfs'
import SearchBooks from './components/SearchBooks'
import * as booksAPI from './utils/BooksAPI' 





class Library extends Component {

	state = {
    	books: [],
      	shelfs: [
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
                        if(b.id === book.id)
           				b.shelf = shelf;
           		return b
            })
                }))
        )
    }



	render() {
		const { books,shelfs } = this.state
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
				<SearchBooks 
					books={books}
					shelfs={shelfs}
					onShelfUpdate={onShelfUpdate}
				/>
			)}/>

			</div>
		)
	}
}

export default Library