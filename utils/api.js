const apiUrl = "http://127.0.0.1:8000/api";

export async function getAllBooks() {
	const response = await fetch(`${apiUrl}/books/`);
	const data = await response.json();
	return data;
}

export async function getBooksByAuthor(author) {
	const response = await fetch(`${apiUrl}/books/?author=${author}`);
	const data = await response.json();
	return data;
}
