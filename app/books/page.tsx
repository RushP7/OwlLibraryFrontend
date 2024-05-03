// app/routes/books/index.tsx
import React from "react";
import Book from "../components/Book";
import { getBooks } from "../api";

export async function loader() {
	try {
		const books = await getBooks();
		return { props: { books } };
	} catch (error) {
		return { props: { books: [], error: "Failed to fetch books." } };
	}
}

export default function BookList({ books, error }) {
	return (
		<div>
			<h1>Book List</h1>
			{error ? (
				<p>{error}</p>
			) : (
				books.map((book) => (
					<Book
						key={book.owlId}
						title={book.title}
						author={book.author}
						owlId={book.owlId}
					/>
				))
			)}
		</div>
	);
}
