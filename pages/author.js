import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getBooksByAuthor } from "../utils/api";

export default function Author() {
	const router = useRouter();
	const { author } = router.query;
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchBooks() {
			try {
				if (author) {
					const data = await getBooksByAuthor(author);
					setBooks(data);
					setLoading(false);
				}
			} catch (error) {
				console.error("Error fetching books by author:", error);
			}
		}

		fetchBooks();
	}, [author]);

	return (
		<div>
			<h1>Books by {author}</h1>
			{loading ? (
				<p>Loading...</p>
			) : books.length === 0 ? (
				<p>No books found by {author}</p>
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
