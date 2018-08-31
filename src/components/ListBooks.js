import React, { Component } from 'react';

class ListBooks extends Component {
	render() {
		const { books,shelfs,onShelfUpdate } = this.props

		return(
			<div className="books">
				{	
					books.map((book) => (
						<div key={book.id} className="book">
						<img src={book.imageLinks ? book.imageLinks.thumbnail : 'test'} alt={book.title}/>
						<p>{book.title}</p>
						<p>{book.authors ? book.authors.join(', ') : ''}</p>
							<div className="book-shelf-changer">
                        		<select onChange={e => onShelfUpdate(book.id, e.target.value)}>
                        			<option value="move" >Move to...</option>
                        			{shelfs.map((shelf,index) => (
                        			<option key={index} value={shelf}>{shelf}</option>
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