import React, { Component } from 'react';

class ListBooks extends Component {
	render() {
		const { books } = this.props
		return(
			<div className="list-books">
				{	
					books.map((book) => (
						<div key={book.id} className="book">
						<img src={book.imageLinks ? book.imageLinks.thumbnail : 'test'} alt={book.title}/>
						<p>{book.title}</p>
						<p>{book.authors ? book.authors.join(', ') : ''}</p>
							<div className="book-shelf-changer">
                        		<select>
                            		<option value="move" disabled>Move to...</option>
                            		<option value="currentlyReading">Currently Reading</option>
                            		<option value="wantToRead">Want to Read</option>
		                            <option value="read">Read</option>
        		                    <option value="none">None</option>
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