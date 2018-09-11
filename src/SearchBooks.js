import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {DebounceInput} from 'react-debounce-input'
import * as booksAPI from './utils/BooksAPI' 
import ListBooks from './components/ListBooks'
import clearQueryImg from './images/clear.png'

class SearchBooks extends Component {

	state = {
	query: '',
	books: [],
	myBooks:[],
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
    booksAPI.getAll().then(books => {
      this.setState({
    	myBooks: books.filter(book => book.shelf !== 'none')
	  })
  	})
  	}


	updateQuery = (query) => {
		this.setState({query})
		query !== "" ? this.onSearch(query) : this.clearQuery()
	}

	clearQuery = () => {
		this.setState({ query:'' })
		this.setState({ books:[] })
	} 

  onSearch = (query) => { 
    const { myBooks } = this.state
    if (query) {
    booksAPI.search(query)
    .then(response => {
    	if (response && response.length > 0) {
    		let searchResults = response
    		searchResults.map((book) => book.shelf = 'none' )
    		myBooks.map((book) => {
    			const updateIndex = searchResults.findIndex(s => s.id === book.id)
    			if (searchResults[updateIndex]) {
      		  	searchResults[updateIndex].shelf = book.shelf   
    			}
    		})
    		this.setState({books: searchResults})
        } else {
          this.setState({ books: [] })
        }
  	})
	} else {
      this.setState({ books: [] })
  }
  }

  onShelfUpdate  = (book, shelf) => {
  booksAPI.update(book, shelf).then(() => {
    book.shelf = shelf
    this.setState(previousState => ({
      books: previousState.books.filter(b=> b.id !== book.id).concat([book])
    }))
    })
  }

	render(){
	const { query,books,shelfs } = this.state
	const onShelfUpdate = this.onShelfUpdate

		return(
			<div className="search">
			<Link className="back-to-books" to="/" >Back to My Library</Link>
				<form className="input-search-book">
        <DebounceInput
              minLength={2}
              debounceTimeout={300}
              placeholder="book"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
        />
							<img className="clearQuery" src={clearQueryImg} alt="cler search" onClick={this.clearQuery}/>
				</form>
				<ListBooks 
					books={books}
					shelfs={shelfs}
					onShelfUpdate={onShelfUpdate}
				/>
			</div>
		)
	}

}

export default SearchBooks
	