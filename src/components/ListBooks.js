import React, { Component } from 'react';

class ListBooks extends Component {
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
                        			 <option value="none">Move to...</option>
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