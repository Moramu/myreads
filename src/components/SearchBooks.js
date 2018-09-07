import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import * as booksAPI from '../utils/BooksAPI' 
import ListBooks from './ListBooks'

class SearchBooks extends Component {

	state = {
		query: '',
		searchedBooks:[]
	}

	updateQuery = (query) => {
		this.setState({query: query})
		this.onSearch(query)
	}

	clearQuery = () => {
		this.setState({ query:'' })
	} 

	onSearch = (query) => {
    booksAPI.search(query)
    	.then(response =>this.setState({searchedBooks : response}))
    	console.log(this.state)
  	}

	render(){
	const { searchedBooks } = this.state
	const { onShelfUpdate,shelfs } = this.props

	const { onSearch } = this.onSearch
		return(
			<div className="search">
				<form className="search-book">
						<input 
							type="text" 
							name="name" 
							placeholder="book"
							value={this.state.query}
							onChange={(event) => this.updateQuery(event.target.value)}
							/>
							<button onClick={this.clearQuery}>Clear</button>
				</form>
				<ListBooks 
					books={searchedBooks}
					shelfs={shelfs}
					onShelfUpdate={onShelfUpdate}
				/>
				<Link className="search-book" to="/" >Back to My Library</Link>
			</div>
		)
	}

}

export default SearchBooks
	