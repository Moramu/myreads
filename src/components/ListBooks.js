import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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
					books.map((book,index) => (
						<div key={index} className="book">
						<img src={book.imageLinks ? book.imageLinks.thumbnail : 'test'} alt={book.title}/>
						<p>{book.title}</p>
						<p>{book.authors ? book.authors.join(', ') : ''}</p>
							<div className="book-shelf-changer">
                        		<select onChange={e => onShelfUpdate(book, e.target.value)}>
                        			 <option>Move to...</option>
                        			 {shelfs.map((shelf,index) => (
                        			 	<option key={index} value={shelf.id}>{shelf.name}</option>
                        			 ))}
                		        </select>
                    		</div>
						</div>
						
						
						))
				}
			</div>
		)
	}

}

export default ListBooks