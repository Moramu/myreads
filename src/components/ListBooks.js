import React, { Component } from 'react'
import PropTypes from 'prop-types'
import noImg from '../images/no-image-icon.png'

class ListBooks extends Component {
	
	static propTypes = {
		books: PropTypes.array.isRequired,
		shelfs: PropTypes.array.isRequired,
		onShelfUpdate: PropTypes.func.isRequired
	}

	render() {
		const { books,shelfs,onShelfUpdate } = this.props

		return(
			<div className="books">
				{	
					books.length > 0 ? books.map((book,index) => (
							<div key={index} className="book">
								<div className="book-cover">
									<img className="book-image" src={book.imageLinks ? book.imageLinks.thumbnail : noImg} alt={book.title}/>
									<div className="book-shelf-changer">
		                        		<select value={book.shelf} onChange={e => onShelfUpdate(book, e.target.value)}>
		                        			 <option disabled>Move to...</option>
		                        			 {shelfs.map((shelf,index) => (
		                        			 	<option key={index} value={shelf.id}>{shelf.name}</option>
		                        			 ))}
		                        			 <option value="none">None</option>
		                		        </select>
	                    			</div>
	                    		</div>	
								<div className="book-details">
									<p className="book-title">Title: {book.title}</p>
									<p className="book-authors">Author: {book.authors ? book.authors.join(', ') : ''}</p>
								</div>
							</div>
						))
					: ( books.length === 0 ? (<p className="result">No query entered</p>) : (<p className="result">No Results Found</p>) )
				}
			</div>
		)
	}

}

export default ListBooks