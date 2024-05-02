import React from "react";

const BookList = ({ books }) => {
	return (
		<div>
			{books.length > 0 ? (
				<ul>
					{books.map((book) => (
						<li key={book.id}>
							<h2>{book.title}</h2>
							<p>Author: {book.author}</p>
							<p>Type: {book.book_type}</p>
						</li>
					))}
				</ul>
			) : (
				<p>No books available.</p>
			)}
		</div>
	);
};

export default BookList;
