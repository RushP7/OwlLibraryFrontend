// pages/index.js
import { useState, useEffect } from "react";
import { getAllBooks } from "../utils/api";

export default function Home() {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchBooks() {
			try {
				const data = await getAllBooks();
				setBooks(data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching books:", error);
			}
		}

		fetchBooks();
	}, []);

	return (
		<div>
			<h1>All Available Books</h1>
			{loading ? (
				<p>Loading...</p>
			) : (
				<ul>
					{books.map((book) => (
						<li key={book.id}>
							<h2>{book.title}</h2>
							<p>Author: {book.author}</p>
							<p>Type: {book.book_type}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
